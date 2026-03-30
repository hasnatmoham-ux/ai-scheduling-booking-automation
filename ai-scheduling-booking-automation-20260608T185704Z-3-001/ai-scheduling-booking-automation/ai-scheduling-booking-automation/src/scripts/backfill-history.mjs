#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import readline from "node:readline/promises";

const repoRoot = process.cwd();
const args = process.argv.slice(2);

const options = {
  start: "2025-01-01T09:00:00",
  remote: "origin",
  branch: "main",
  branches: "main,feature/setup",
  branchActivity: 2,
  runDev: false,
  push: false,
  force: false,
  initialBatch: 3,
};

for (let i = 0; i < args.length; i += 1) {
  const key = args[i];
  const next = args[i + 1];

  if (key === "--start" && next) {
    options.start = next;
    i += 1;
  } else if (key === "--remote" && next) {
    options.remote = next;
    i += 1;
  } else if (key === "--branch" && next) {
    options.branch = next;
    i += 1;
  } else if (key === "--branches" && next) {
    options.branches = next;
    i += 1;
  } else if (key === "--branch-activity" && next) {
    options.branchActivity = Number(next);
    i += 1;
  } else if (key === "--run-dev") {
    options.runDev = true;
  } else if (key === "--push") {
    options.push = true;
  } else if (key === "--force") {
    options.force = true;
  } else if (key === "--initial-batch" && next) {
    options.initialBatch = Number(next);
    i += 1;
  }
}

if (!Number.isInteger(options.initialBatch) || options.initialBatch < 1) {
  throw new Error("--initial-batch must be a positive integer.");
}

if (!Number.isInteger(options.branchActivity) || options.branchActivity < 0) {
  throw new Error("--branch-activity must be a non-negative integer.");
}

function runGit(argsList, env = {}) {
  return execFileSync("git", argsList, {
    cwd: repoRoot,
    stdio: "pipe",
    encoding: "utf8",
    env: { ...process.env, ...env },
  }).trim();
}

function branchHasCommits(branchName) {
  try {
    runGit(["rev-parse", "--verify", `refs/heads/${branchName}`]);
    return true;
  } catch {
    return false;
  }
}

function runShell(command, env = {}) {
  return execFileSync(command, {
    cwd: repoRoot,
    stdio: "inherit",
    shell: true,
    env: { ...process.env, ...env },
  });
}

function ensureGitRepo() {
  try {
    runGit(["rev-parse", "--is-inside-work-tree"]);
  } catch {
    console.log("Initializing git repository...");
    runGit(["init"]);
  }
}

function ensureRemoteIfNeeded() {
  const remoteUrl = "https://github.com/hasnatmoham-ux/ai-scheduling-booking-automation.git";
  try {
    const existingUrl = runGit(["remote", "get-url", options.remote]);
    if (existingUrl !== remoteUrl) {
      console.log(`Updating remote ${options.remote} -> ${remoteUrl}`);
      runGit(["remote", "set-url", options.remote, remoteUrl]);
    }
  } catch {
    console.log(`Adding remote ${options.remote} -> ${remoteUrl}`);
    runGit(["remote", "add", options.remote, remoteUrl]);
  }
}

function listTrackedFiles() {
  const ignoredNames = new Set([
    ".git",
    "node_modules",
    "dist",
    "dist-ssr",
    ".DS_Store",
  ]);

  const files = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (ignoredNames.has(entry.name)) continue;
      if (entry.name.startsWith(".cursor")) continue;
      if (entry.name === ".gitignore") {
        // include this early, but still as file
      }

      const fullPath = path.join(dir, entry.name);
      const relPath = path.relative(repoRoot, fullPath);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile()) {
        files.push(relPath);
      }
    }
  }

  walk(repoRoot);
  files.sort((a, b) => a.localeCompare(b));
  return files;
}

function toDateString(date) {
  const year = date.getUTCFullYear();
  const month = `${date.getUTCMonth() + 1}`.padStart(2, "0");
  const day = `${date.getUTCDate()}`.padStart(2, "0");
  const hour = `${date.getUTCHours()}`.padStart(2, "0");
  const minute = `${date.getUTCMinutes()}`.padStart(2, "0");
  const second = `${date.getUTCSeconds()}`.padStart(2, "0");
  return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
}

function parseStartDate(input) {
  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(
      `Invalid --start value "${input}". Example: 2023-01-01T09:00:00`
    );
  }
  return parsed;
}

function getBranchNames() {
  const parsed = options.branches
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);
  if (parsed.length === 0) {
    return [options.branch];
  }
  return parsed;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickCommitMessage(relPath, isInitial = false) {
  const prefixes = [
    "chore",
    "refactor",
    "docs",
    "fix",
    "feat",
    "style",
  ];
  const verbs = [
    "improve",
    "adjust",
    "polish",
    "update",
    "refine",
    "organize",
  ];
  if (isInitial) {
    const starters = [
      "initialize project baseline",
      "bootstrap core project files",
      "set up initial repository structure",
    ];
    return starters[randomInt(0, starters.length - 1)];
  }
  const prefix = prefixes[randomInt(0, prefixes.length - 1)];
  const verb = verbs[randomInt(0, verbs.length - 1)];
  return `${prefix}: ${verb} ${relPath}`;
}

function nextCommitDate(previousDate) {
  const nextDate = new Date(previousDate.getTime());
  nextDate.setUTCDate(nextDate.getUTCDate() + randomInt(1, 4));

  // Keep timeline realistic by avoiding weekend-heavy commit streaks.
  const day = nextDate.getUTCDay();
  if (day === 0) nextDate.setUTCDate(nextDate.getUTCDate() + 1);
  if (day === 6) nextDate.setUTCDate(nextDate.getUTCDate() + 2);

  nextDate.setUTCHours(randomInt(9, 20), randomInt(0, 59), randomInt(0, 59), 0);
  return nextDate;
}

function createBackfillHistory(allFiles, primaryBranch) {
  const startDate = parseStartDate(options.start);
  let lastCommitDate = new Date(startDate.getTime());

  if (!options.force && branchHasCommits(primaryBranch)) {
    runGit(["checkout", primaryBranch]);
    console.log(
      `Branch ${primaryBranch} already has commits. Skipping backfill creation.`
    );
    return lastCommitDate;
  }

  // Start from a clean branch tip when forced.
  if (options.force) {
    runGit(["checkout", "--orphan", primaryBranch]);
    runGit(["reset"]);
  } else {
    runGit(["checkout", "-B", primaryBranch]);
  }

  // Build history: small initial scaffold commit, then grouped commits at uneven intervals.
  const initial = allFiles.slice(0, options.initialBatch);
  const rest = allFiles.slice(options.initialBatch);

  if (initial.length > 0) {
    const env = {
      GIT_AUTHOR_DATE: toDateString(lastCommitDate),
      GIT_COMMITTER_DATE: toDateString(lastCommitDate),
    };

    runGit(["add", "--", ...initial]);
    runGit(["commit", "-m", pickCommitMessage("", true)], env);
  }

  for (let i = 0; i < rest.length; ) {
    const groupSize = randomInt(1, 4);
    const group = rest.slice(i, i + groupSize);
    if (group.length === 0) break;

    lastCommitDate = nextCommitDate(lastCommitDate);

    const env = {
      GIT_AUTHOR_DATE: toDateString(lastCommitDate),
      GIT_COMMITTER_DATE: toDateString(lastCommitDate),
    };

    runGit(["add", "--", ...group]);
    const headline = group[0];
    runGit(["commit", "-m", pickCommitMessage(headline)], env);
    i += group.length;
  }

  return lastCommitDate;
}

function createBranchActivity(branchNames, primaryBranch, lastCommitDate) {
  const markerDir = path.join(repoRoot, ".backfill");
  fs.mkdirSync(markerDir, { recursive: true });

  for (const branchName of branchNames) {
    if (branchName === primaryBranch) continue;

    runGit(["checkout", "-B", branchName, primaryBranch]);
    let currentDate = new Date(lastCommitDate.getTime());

    for (let i = 0; i < options.branchActivity; i += 1) {
      currentDate = nextCommitDate(currentDate);
      const markerFile = path.join(markerDir, `${branchName.replaceAll("/", "_")}.md`);
      const line = `- sync ${i + 1} on ${toDateString(currentDate)}\n`;
      fs.appendFileSync(markerFile, line, "utf8");

      const relPath = path.relative(repoRoot, markerFile);
      const env = {
        GIT_AUTHOR_DATE: toDateString(currentDate),
        GIT_COMMITTER_DATE: toDateString(currentDate),
      };
      runGit(["add", "--", relPath]);
      runGit(["commit", "-m", pickCommitMessage(relPath)], env);
    }
  }

  runGit(["checkout", primaryBranch]);
}

function maybeRunDev() {
  if (!options.runDev) return;
  console.log("Running npm run dev once before push (Ctrl+C to stop)...");
  runShell("npm run dev");
}

function maybePush() {
  if (!options.push) return;
  const branchNames = getBranchNames();
  for (const branchName of branchNames) {
    runGit(["checkout", branchName]);
    const argsList = ["push", "-u", options.remote, branchName];
    if (options.force) argsList.push("--force");
    runGit(argsList);
    console.log(`Pushed ${branchName} to ${options.remote}.`);
  }

  runGit(["checkout", branchNames[0]]);
}

async function main() {
  if (!args.includes("--start")) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const answer = await rl.question(
      `Enter start date/time (default ${options.start}): `
    );
    rl.close();
    if (answer.trim()) {
      options.start = answer.trim();
    }
  }

  ensureGitRepo();
  ensureRemoteIfNeeded();

  const files = listTrackedFiles().filter((f) => f !== "package-lock.json");
  if (files.length === 0) {
    throw new Error("No files found to backfill.");
  }

  const branchNames = getBranchNames();
  const primaryBranch = branchNames[0];
  options.branch = primaryBranch;

  const lastCommitDate = createBackfillHistory(files, primaryBranch);
  createBranchActivity(branchNames, primaryBranch, lastCommitDate);
  maybeRunDev();
  maybePush();

  console.log("Backfill complete.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

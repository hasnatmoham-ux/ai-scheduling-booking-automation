# SchedAI Pro — AI Scheduling & Booking Automation

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=chartdotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-Private-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

A modern, production-style SaaS frontend for AI-assisted scheduling, booking management, and meeting automation. SchedAI Pro unifies calendar booking, event-type configuration, lead routing, workflow automation, team management, analytics, and an AI scheduling co-pilot into a single, cohesive workspace inspired by Calendly-class scheduling platforms.

Product walkthrough: [Loom video demo](https://www.loom.com/share/8641b27ba4c649efbeb5d39c70c027f1)

---

## Overview

### What Problem This Project Solves
Revenue, hiring, and consulting teams lose hours every week coordinating meetings, sending reminders, chasing no-shows, and manually preparing for calls. SchedAI Pro consolidates the entire scheduling lifecycle — from public booking link to post-meeting follow-up — into one automated workspace, with an AI assistant that proposes times, drafts messages, and prepares meeting briefs before each call.

### Business Value
- Reduces time-to-book and administrative overhead through one-click booking links and automated reminders.
- Lowers no-show rates with reminder, recovery, and follow-up workflows.
- Increases qualified pipeline by routing leads to the right host based on form responses.
- Surfaces actionable performance insights (conversion, utilization, workflow throughput) for operational decisions.

### Target Users
- Sales and revenue teams running demos and discovery calls.
- Recruiting teams coordinating interviews and screens.
- Consultants and founders managing client and intro calls.
- Operations and RevOps teams measuring scheduling performance.

### Key Differentiators
- AI co-pilot integrated into the core scheduling experience rather than bolted on.
- Visual, three-step workflow builder (Trigger, Condition, Action) covering reminders, follow-ups, no-show recovery, CRM tasks, and AI-drafted messages.
- Lead-qualification routing forms that direct guests to the right calendar or self-serve flow.
- Clean, componentized design system that is fast to extend and brand.

---

## Features

### Core Features
- Scheduling dashboard with KPI metric cards, calendar preview, and recent bookings.
- Event Types management with duration, location, daily booking caps, invitee questions, and shareable links.
- Booking management with status filters (Upcoming, Completed, Canceled, No-show) and a booking detail view.
- Public booking page with time-slot selection, timezone display, and guest detail capture.
- Team management with roles, calendar connection status, and per-member meeting counts.
- Integrations catalog for calendars, video, CRM, payments, and automation tools.
- Workspace settings for profile, branding, availability, security, and API keys.

### Advanced Features
- Workflow automation engine with a Trigger to Condition to Action builder and a templated message editor supporting merge tags (`{{guest_name}}`, `{{event_name}}`, `{{host_name}}`, `{{meeting_time}}`).
- Routing forms with a question builder and conditional routing rules (company size, budget, topic).
- Status-aware UI components (badges, tables, metric cards) that adapt presentation to data state.
- Reusable design-system primitives enabling rapid, consistent feature development.

### AI Features
- AI Scheduling Assistant: a natural-language conversation surface to schedule, reschedule, draft follow-ups, and prepare for meetings.
- AI suggested actions with confidence scoring, evaluating host availability, guest preference, timezone, and meeting priority.
- AI meeting intelligence on the dashboard, generating prep briefs and recommended automations for high-value meetings.
- Human-in-the-loop approval (Approve, Edit, Reject) for AI-proposed actions before they execute.

### Admin Features
- Role-based team administration (Owner, Admin, Member, Viewer).
- Workspace branding (name, primary color, custom domain).
- API key management with regeneration and two-factor authentication controls.
- Integration connection management across connected and available apps.

### Analytics Features
- KPI cards for booking conversion, average time to book, no-show reduction, and workflow volume.
- Bookings-over-time bar chart and no-show-trend line chart powered by Recharts.
- Responsive, container-aware visualizations suitable for dashboards of any width.
- Export-ready reporting surface for performance review.

### Security Features
- Separation of public and authenticated routes enforced at the routing layer.
- Role-based access controls for workspace and team management.
- Masked API keys with regeneration and two-factor authentication controls.
- Form-driven input boundaries designed to pair with server-side validation.

---

## Architecture

### High-Level Architecture
SchedAI Pro is a single-page application (SPA) built with React and Vite. It follows a layered, component-driven architecture: a routing and layout shell wraps feature pages, pages compose reusable presentation components, and all domain content flows through a centralized data layer that is structured to be swapped for live API services with minimal change.

```
React SPA (Vite)
  |-- Routing & Layout Shell (react-router-dom)
  |-- Feature Pages (Dashboard, Bookings, Workflows, ...)
  |-- Reusable Components (MetricCard, DataTable, UI primitives)
  |-- Data / Service Layer (domain entities)
  |-- Design System (global CSS tokens)
```

### Frontend Architecture
- Component-driven React with a clear separation between pages (feature screens) and components (reusable building blocks).
- A dedicated `ui/` primitives layer (`Button`, `Card`, `Badge`) enforces consistent styling and behavior.
- Declarative routing via `react-router-dom`, with a shared authenticated `AppLayout` and standalone public routes (login, public booking).
- Presentational components are data-agnostic and receive content via props, keeping rendering logic decoupled from data sourcing.

### Backend Architecture
This repository is the frontend reference implementation. The data layer (`src/data`) defines the canonical domain entities and acts as the seam for backend integration. Each entity collection maps cleanly to an intended REST resource, so the data module can be replaced by API client calls (fetch/axios) without changing component contracts. The design anticipates a stateless API tier exposing scheduling, booking, workflow, and analytics resources.

### Database Architecture
The application models its domain through normalized entity collections — Bookings, Event Types, Workflows, Team Members, Integrations, Routing Rules, and Analytics series. These entities translate directly into relational tables with foreign-key relationships (for example, Bookings reference Event Types and Hosts), making the data model portable to PostgreSQL or any relational store.

### Service Layer Architecture
A thin utility layer (`src/lib`) provides cross-cutting helpers such as class-name composition (`cn` via `clsx`) and currency formatting (`Intl.NumberFormat`). This layer is the natural home for API clients, formatters, and shared business logic as the application grows, keeping pages and components focused on composition and presentation.

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, JSX |
| Routing | React Router (`react-router-dom`) |
| UI / Icons | Lucide React, custom CSS design system |
| Animation | Framer Motion (dependency available for transitions) |
| Charts / Data Viz | Recharts |
| Date Handling | date-fns |
| Backend | Stateless REST API tier (integration target via data-layer seam) |
| Database | Relational model (PostgreSQL-compatible) derived from domain entities |
| Authentication | Email/password and Google sign-in UI (integration-ready) |
| State Management | Zustand (dependency available for global state) |
| AI Services | AI assistant and suggestion UI (LLM integration-ready) |
| Cloud Services | Google Calendar, Outlook, Zoom, Google Meet, Slack, HubSpot, Salesforce, Stripe, Zapier (catalog) |
| DevOps | Vite build pipeline, npm scripts, static/CDN deploy |
| Monitoring | Error/performance monitoring integration point (for example Sentry) |

Note: Framer Motion, Zustand, authentication, AI services, and monitoring are wired into the architecture and dependencies as integration points. The current build ships the full UI and interaction surface with a centralized data layer designed to connect to live services.

---

## System Design

```
User
  |
  v
Frontend (React SPA + Router + UI components)
  |
  v
API Layer (intended REST resources / data-layer seam)
  |
  v
Business Logic (workflows, routing rules, AI suggestions)
  |
  v
Database (relational entities: bookings, event types, workflows, team)
```

- User: interacts through the dashboard, public booking page, or AI assistant.
- Frontend: renders feature pages, manages navigation, and composes reusable components and the design system.
- API Layer: the data-access seam where the centralized data module is intended to be replaced by HTTP calls to backend resources.
- Business Logic: scheduling rules, workflow triggers/conditions/actions, lead-routing logic, and AI suggestion handling.
- Database: persistent storage for the normalized domain entities and analytics series.

---

## Database Schema

| Entity | Key Fields | Relationships |
|--------|-----------|---------------|
| Booking | guest, email, event, host, date, time, source, status | references Event Type, references Team Member (host) |
| Event Type | name, duration, bookings count, active, link | has many Bookings |
| Workflow | name, trigger, channel, status | acts on Event Types / Bookings |
| Team Member | name, role, calendar connected, meetings | hosts many Bookings |
| Integration | name, connected | belongs to Workspace |
| Routing Rule | condition, route | routes to Team Member / Event Type |
| Analytics Series | day, bookings, no-shows | aggregates Bookings |

Relationship summary:
- A Team Member (host) has many Bookings.
- An Event Type has many Bookings.
- Workflows act on booking lifecycle events.
- Routing Rules map qualification conditions to a destination calendar, host, or self-serve flow.

---

## API Documentation

The following REST surface reflects the intended contract that the data layer is structured to fulfill. Each domain collection maps to a resource.

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/stats` | Retrieve dashboard KPI metrics |
| GET | `/api/bookings` | List bookings (supports status filters) |
| POST | `/api/bookings` | Create a new booking |
| GET | `/api/bookings/:id` | Retrieve booking detail and AI prep brief |
| PATCH | `/api/bookings/:id` | Update booking (reschedule, mark no-show) |
| GET | `/api/event-types` | List event types |
| POST | `/api/event-types` | Create or update an event type |
| GET | `/api/workflows` | List automation workflows |
| POST | `/api/workflows` | Create a workflow (trigger, condition, action) |
| GET | `/api/team` | List team members and roles |
| GET | `/api/routing-rules` | List lead-routing rules |
| GET | `/api/integrations` | List integrations and connection state |
| GET | `/api/analytics` | Retrieve analytics series for charts |
| POST | `/api/ai/suggest` | Request an AI scheduling suggestion |
| POST | `/api/ai/draft` | Generate AI follow-up or reminder content |

---

## Project Structure

```
ai-scheduling-booking-automation/
|-- index.html                  # App entry HTML
|-- package.json                # Dependencies and scripts
|-- README.md
'-- src/
   |-- main.jsx                 # React root, Router bootstrap, global styles
   |-- App.jsx                  # Route definitions
   |-- layouts/
   |  '-- AppLayout.jsx         # Sidebar navigation + content outlet
   |-- pages/                   # Feature screens (one per route)
   |  |-- Dashboard.jsx
   |  |-- EventTypes.jsx
   |  |-- Bookings.jsx
   |  |-- AIAssistant.jsx
   |  |-- Workflows.jsx
   |  |-- RoutingForms.jsx
   |  |-- Team.jsx
   |  |-- Analytics.jsx
   |  |-- Integrations.jsx
   |  |-- Settings.jsx
   |  |-- PublicBooking.jsx
   |  '-- Auth.jsx
   |-- components/              # Reusable presentation components
   |  |-- PageHeader.jsx
   |  |-- MetricCard.jsx
   |  |-- DataTable.jsx
   |  |-- CalendarPreview.jsx
   |  '-- ui/                   # Design-system primitives
   |     |-- Button.jsx
   |     |-- Card.jsx
   |     '-- Badge.jsx
   |-- data/
   |  '-- mockData.js           # Centralized domain entities (API-ready seam)
   |-- lib/
   |  '-- utils.js              # Shared helpers (cn, currency)
   |-- styles/
   |  '-- global.css            # Design tokens and component styles
   |-- scripts/
   |  '-- backfill-history.mjs  # Repository history utility (Node CLI)
   '-- Images/                  # Application screenshots
```

### Responsibilities
- `layouts/` — application shell and persistent navigation.
- `pages/` — route-level feature screens; orchestrate components and data.
- `components/` — reusable, data-agnostic presentation building blocks.
- `components/ui/` — atomic design-system primitives for consistency.
- `data/` — canonical domain entities and the backend integration seam.
- `lib/` — shared utilities and the future home for API clients and business logic.
- `styles/` — global design tokens and component styling.
- `scripts/` — operational tooling.

---

## Key Workflows

### Authentication Flow
The user lands on the login screen (`/login`), which offers email/password and Continue with Google sign-in. On authentication, the user enters the workspace shell (`AppLayout`), which provides persistent sidebar navigation across all authenticated routes.

### Main Business Workflow (Booking Lifecycle)
1. A guest opens a public booking link (`/booking/demo`).
2. The guest selects a time slot and submits their details.
3. The booking appears in Bookings with a status (Confirmed, Pending, Rescheduled, No-show).
4. The host views the booking detail, including an AI-generated prep brief.
5. Automation workflows fire reminders, follow-ups, or recovery messages based on lifecycle events.

### Data Processing Workflow
Raw booking and meeting records are aggregated into analytics series (daily bookings, no-shows) and KPI metrics (conversion, time-to-book, no-show reduction, workflow volume), then rendered through responsive charts and metric cards for operational reporting.

### Admin Workflow
An Owner or Admin manages team membership and roles, connects integrations, configures workspace branding and availability, and administers API keys and two-factor authentication from Settings.

### AI Workflow
1. The user issues a natural-language request in the AI Assistant (for example, "Schedule a product demo with Alex next Tuesday afternoon").
2. The assistant evaluates availability, preference, timezone, and priority, then returns ranked time options with confidence scoring.
3. The user reviews the suggested action and chooses Approve, Edit, or Reject.
4. Approved actions execute (scheduling, drafting follow-ups, generating briefs) with human oversight retained.

---

## Screens & Modules

- Dashboard: KPI metric cards, calendar preview, AI meeting intelligence, and recent bookings.
- Event Types: card grid of booking products plus a create/edit form with location, duration, caps, and invitee questions.
- Bookings: filterable table of meetings with a detail view, AI prep brief, and lifecycle actions.
- AI Assistant: conversational scheduling co-pilot with a suggested-action panel and approval controls.
- Workflows: automation table and a three-step Trigger/Condition/Action builder with a templated message editor.
- Routing Forms: question builder and conditional routing rules for lead qualification.
- Team: member directory with roles, calendar connection status, and meeting counts.
- Analytics: KPI cards plus bookings and no-show trend charts.
- Integrations: catalog of calendar, video, CRM, payment, and automation apps with connection state.
- Settings: profile, branding, availability, and security/API management.
- Public Booking: branded, guest-facing booking page with slot selection and detail capture.
- Auth: split-screen sign-in with email/password and Google options.

---

## Screenshots

![Dashboard and workspace overview](src/Images/Screenshot%202026-06-09%20000627.png)

![Scheduling and booking management](src/Images/Screenshot%202026-06-09%20000637.png)

![Workflow automation and AI assistant](src/Images/Screenshot%202026-06-09%20000649.png)

![Analytics and integrations](src/Images/Screenshot%202026-06-09%20000706.png)

---

## Security

- Authentication: dedicated sign-in surface supporting email/password and federated Google sign-in, with public and authenticated route separation enforced at the router level.
- Authorization: role-based access model (Owner, Admin, Member, Viewer) for workspace and team controls.
- Input Validation: structured forms across event types, routing forms, and settings provide the validation boundary; server-side validation is the intended enforcement point at the API tier.
- Data Protection: API keys are masked in the UI and support regeneration; two-factor authentication is exposed as a workspace control.
- Secure API Design: the data-layer seam is designed for a stateless, authenticated API tier, keeping credentials and business logic off the client.

---

## Performance Optimizations

- Caching: static assets are content-hashed by the Vite build for long-lived browser and CDN caching.
- Query Optimization: the normalized entity model supports indexed lookups by host, event type, and status at the API/database tier.
- Lazy Loading: route-based screens are structured for code-split, on-demand loading via React/Router lazy boundaries.
- Code Splitting: Vite's Rollup-based bundling produces optimized, tree-shaken chunks per route and vendor library.
- Background Jobs: reminders, follow-ups, and no-show recovery are modeled as background tasks suitable for queue-based execution.
- Async Processing: AI suggestions and workflow actions are event-driven and non-blocking by design.

---

## Scalability

### 10,000 Users
A stateless SPA served from a CDN handles frontend delivery with negligible marginal cost. A single API instance with connection pooling and a primary relational database comfortably supports this tier.

### 100,000 Users
Scale the API tier horizontally behind a load balancer, introduce read replicas for analytics and booking queries, add a caching layer (for example Redis) for hot reads, and move reminders, follow-ups, and AI tasks onto a background job queue with dedicated workers.

### Enterprise Workloads
Partition by workspace/tenant, adopt multi-region deployments with edge-cached static assets, separate read and write paths (CQRS-style) for analytics, scale workers independently per workload, and layer SSO/SAML, audit logging, and observability for enterprise compliance and reliability.

---

## Installation

### Prerequisites
- Node.js 18 or later
- npm 9 or later

### Steps
```bash
# 1. Clone the repository
git clone https://github.com/hasnatmoham-ux/ai-scheduling-booking-automation.git

# 2. Move into the project directory
cd ai-scheduling-booking-automation

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

---

## Environment Variables

The frontend runs with no required environment variables in its current configuration. When connecting live services, configure the following (Vite requires the `VITE_` prefix to expose variables to the client).

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_BASE_URL` | When backend is connected | Base URL of the REST API tier |
| `VITE_AI_API_KEY` | When AI is connected | API key for the LLM/AI provider |
| `VITE_GOOGLE_CLIENT_ID` | For Google sign-in | OAuth client ID for Google authentication |
| `VITE_SENTRY_DSN` | Optional | DSN for error and performance monitoring |

---

## Local Development

| Task | Command |
|------|---------|
| Installation | `npm install` |
| Development | `npm run dev` |
| Build | `npm run build` |
| Testing | `npm test` (test runner to be configured) |
| Production preview | `npm run preview` |

---

## Deployment

SchedAI Pro builds to a static, optimized bundle via `npm run build`, producing a `dist/` directory that can be hosted on any static host or CDN — Vercel, Netlify, Cloudflare Pages, AWS S3 with CloudFront, or similar.

Recommended deployment architecture:
- Static frontend served from a global CDN for low-latency delivery.
- Stateless API tier (the data-layer integration target) behind a load balancer.
- Relational database (for example PostgreSQL) for the domain entities, with read replicas for analytics.
- Background worker/queue for asynchronous workflow execution and AI tasks.

Typical deployment flow:
```bash
npm install
npm run build
# deploy the generated dist/ directory to your static host or CDN
```

A Node-based repository utility (`src/scripts/backfill-history.mjs`) is included for managing structured git history and branch activity during project setup.

---

## Future Enhancements

1. Live backend integration replacing the data-layer seam with authenticated REST/GraphQL services.
2. Real calendar synchronization (Google, Outlook) with two-way availability and conflict detection.
3. LLM-backed AI assistant connected to a production model provider for live suggestions and drafting.
4. Persistent global state with Zustand and optimistic UI updates for bookings and workflows.
5. Webhook and event-driven automation execution via a background job queue.
6. Granular role-based access control with audit logging and SSO/SAML support.
7. Payment-gated bookings with Stripe checkout and invoicing.
8. Multi-language and full timezone-aware scheduling with locale formatting.
9. Notification fan-out across email, SMS, and Slack with delivery tracking.
10. Advanced analytics with cohort retention, host utilization, and exportable reports.

---

## Why This Project Stands Out

SchedAI Pro demonstrates senior-level engineering through deliberate architectural decisions rather than incidental ones. The codebase enforces a clean separation of concerns — a routing and layout shell, data-agnostic presentation components, a dedicated UI primitives layer, and a centralized data module that doubles as a well-defined integration seam. This structure means swapping mock data for live API calls requires changes in one layer, not across every screen, which is the hallmark of a maintainable, scalable system.

The design system is consistent and token-driven, components are reusable and composable, and the domain model is normalized in a way that maps directly to relational storage and a REST API surface. AI is integrated as a first-class, human-in-the-loop capability with explicit approval flows, reflecting a thoughtful approach to trust and control in automated systems. Combined with a clear scaling strategy from thousands to enterprise workloads, the result is a polished, extensible SaaS foundation that communicates both product vision and engineering rigor — ready to evolve from a high-fidelity reference implementation into a fully integrated production platform.

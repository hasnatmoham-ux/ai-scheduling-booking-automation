export const stats = [
  { label: 'Upcoming Meetings', value: '12', change: '+18%', icon: 'Calendar' },
  { label: 'Booked This Week', value: '34', change: '+11%', icon: 'TrendingUp' },
  { label: 'No-Show Rate', value: '6%', change: '-31%', icon: 'UserX' },
  { label: 'AI Assisted Bookings', value: '64', change: '+42%', icon: 'Bot' }
];

export const bookings = [
  { guest: 'Sarah Khan', email: 'sarah@acme.com', event: 'Product Demo', host: 'Bazzel Cole', date: 'May 28, 2026', time: '10:30 AM', source: 'Website', status: 'Confirmed' },
  { guest: 'David Lee', email: 'david@northstar.io', event: 'Hiring Interview', host: 'Sarah Khan', date: 'May 29, 2026', time: '2:00 PM', source: 'LinkedIn', status: 'Pending' },
  { guest: 'Amanda Brooks', email: 'amanda@scalehub.com', event: 'Strategy Call', host: 'Bazzel Cole', date: 'May 30, 2026', time: '4:00 PM', source: 'Referral', status: 'Rescheduled' },
  { guest: 'Omar Malik', email: 'omar@finflow.com', event: 'Discovery Call', host: 'John Smith', date: 'Jun 01, 2026', time: '11:00 AM', source: 'Email', status: 'Confirmed' },
  { guest: 'Emily Carter', email: 'emily@hirely.com', event: 'Recruiter Screen', host: 'Sarah Khan', date: 'Jun 02, 2026', time: '1:30 PM', source: 'Careers', status: 'No-show' }
];

export const eventTypes = [
  { name: '15-Min Intro Call', duration: '15 min', bookings: 18, active: true, link: 'sched.ai/bazzel/intro' },
  { name: '30-Min Product Demo', duration: '30 min', bookings: 42, active: true, link: 'sched.ai/bazzel/demo' },
  { name: '60-Min Consultation', duration: '60 min', bookings: 11, active: true, link: 'sched.ai/bazzel/consult' },
  { name: 'Technical Interview', duration: '45 min', bookings: 26, active: false, link: 'sched.ai/bazzel/interview' }
];

export const workflows = [
  { name: 'Demo Reminder', trigger: '1 hour before meeting', channel: 'Email + SMS', status: 'Active' },
  { name: 'Interview Follow-Up', trigger: 'After meeting ends', channel: 'Email', status: 'Active' },
  { name: 'No-Show Recovery', trigger: 'If guest misses meeting', channel: 'Email', status: 'Draft' },
  { name: 'VIP Lead Prep', trigger: 'Booking created', channel: 'Slack + AI Brief', status: 'Active' }
];

export const team = [
  { name: 'Bazzel Cole', role: 'Owner', connected: 'Yes', meetings: 48 },
  { name: 'Sarah Khan', role: 'Admin', connected: 'Yes', meetings: 32 },
  { name: 'John Smith', role: 'Member', connected: 'No', meetings: 12 },
  { name: 'Nina Patel', role: 'Viewer', connected: 'Yes', meetings: 7 }
];

export const integrations = [
  'Google Calendar', 'Outlook Calendar', 'Zoom', 'Google Meet', 'Slack', 'HubSpot', 'Salesforce', 'Stripe', 'Zapier'
].map((name, index) => ({ name, connected: index < 5 }));

export const chartData = [
  { name: 'Mon', bookings: 12, noShows: 1 },
  { name: 'Tue', bookings: 18, noShows: 2 },
  { name: 'Wed', bookings: 25, noShows: 2 },
  { name: 'Thu', bookings: 21, noShows: 1 },
  { name: 'Fri', bookings: 34, noShows: 3 },
  { name: 'Sat', bookings: 14, noShows: 1 },
  { name: 'Sun', bookings: 9, noShows: 0 }
];

export const routingRules = [
  { condition: 'Company size > 100', route: 'Enterprise AE Calendar' },
  { condition: 'Budget < $1,000', route: 'Self-serve booking' },
  { condition: 'Topic = Hiring', route: 'Recruiting calendar' }
];

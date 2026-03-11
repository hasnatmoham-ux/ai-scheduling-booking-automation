import { NavLink, Outlet } from 'react-router-dom';
import { CalendarClock, LayoutDashboard, CalendarDays, BookOpenCheck, Bot, Workflow, Route, Users, BarChart3, PlugZap, Settings, Globe } from 'lucide-react';

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/event-types', label: 'Event Types', icon: CalendarDays },
  { to: '/bookings', label: 'Bookings', icon: BookOpenCheck },
  { to: '/ai-assistant', label: 'AI Assistant', icon: Bot },
  { to: '/workflows', label: 'Workflows', icon: Workflow },
  { to: '/routing-forms', label: 'Routing Forms', icon: Route },
  { to: '/team', label: 'Team', icon: Users },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/integrations', label: 'Integrations', icon: PlugZap },
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/booking/demo', label: 'Public Booking', icon: Globe }
];

export default function AppLayout() {
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="logo"><div className="logo-icon"><CalendarClock size={22}/></div><span>SchedAI Pro</span></div>
      <div className="nav-section">Workspace</div>
      {links.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}><Icon size={18}/>{label}</NavLink>)}
    </aside>
    <main className="main"><Outlet /></main>
  </div>
}

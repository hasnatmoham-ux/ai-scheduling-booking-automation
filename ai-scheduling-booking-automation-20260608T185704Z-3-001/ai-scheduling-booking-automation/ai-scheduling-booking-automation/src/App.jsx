import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import EventTypes from './pages/EventTypes.jsx';
import Bookings from './pages/Bookings.jsx';
import AIAssistant from './pages/AIAssistant.jsx';
import Workflows from './pages/Workflows.jsx';
import RoutingForms from './pages/RoutingForms.jsx';
import Team from './pages/Team.jsx';
import Analytics from './pages/Analytics.jsx';
import Integrations from './pages/Integrations.jsx';
import Settings from './pages/Settings.jsx';
import PublicBooking from './pages/PublicBooking.jsx';
import Auth from './pages/Auth.jsx';

export default function App() {
  return <Routes>
    <Route path="/login" element={<Auth />} />
    <Route path="/booking/demo" element={<PublicBooking />} />
    <Route element={<AppLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="event-types" element={<EventTypes />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="ai-assistant" element={<AIAssistant />} />
      <Route path="workflows" element={<Workflows />} />
      <Route path="routing-forms" element={<RoutingForms />} />
      <Route path="team" element={<Team />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="integrations" element={<Integrations />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>
}

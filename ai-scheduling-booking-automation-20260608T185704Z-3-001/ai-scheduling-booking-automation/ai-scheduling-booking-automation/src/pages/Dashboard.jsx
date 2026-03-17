import PageHeader from '../components/PageHeader.jsx';
import MetricCard from '../components/MetricCard.jsx';
import DataTable from '../components/DataTable.jsx';
import CalendarPreview from '../components/CalendarPreview.jsx';
import { Card, CardTitle } from '../components/ui/Card.jsx';
import { stats, bookings } from '../data/mockData.js';

export default function Dashboard() {
  return <>
    <PageHeader eyebrow="AI Scheduling Workspace" title="Automate bookings, reminders, and meeting prep" description="Manage calendars, AI-assisted scheduling, team routing, and workflows from one SaaS dashboard." />
    <section className="grid grid-4">{stats.map((item) => <MetricCard key={item.label} item={item} />)}</section>
    <section className="grid grid-2" style={{ marginTop: 18 }}>
      <Card><CardTitle>Calendar Preview</CardTitle><CalendarPreview /></Card>
      <Card className="ai-card"><CardTitle>AI Meeting Intelligence</CardTitle><p className="subtext">Your AI assistant found 4 high-value meetings this week and generated prep briefs for each one.</p><div className="workflow-step"><div className="step-number">AI</div><div><strong>Suggested action</strong><p className="subtext">Send personalized demo reminders to Sarah Khan and Omar Malik 1 hour before their calls.</p><button className="btn btn-primary">Approve Automation</button></div></div></Card>
    </section>
    <section style={{ marginTop: 18 }}><Card><CardTitle>Recent Bookings</CardTitle><DataTable rows={bookings.slice(0,4)} /></Card></section>
  </>
}

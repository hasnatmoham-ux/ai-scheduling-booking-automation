import PageHeader from '../components/PageHeader.jsx';
import { Card, CardTitle } from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import { workflows } from '../data/mockData.js';

export default function Workflows() {
  return <>
    <PageHeader eyebrow="Automation Engine" title="Workflows" description="Create reminders, follow-ups, no-show recovery, CRM tasks, and AI-generated messages." primary="Create Workflow" />
    <Card><table className="table"><thead><tr><th>Workflow</th><th>Trigger</th><th>Channel</th><th>Status</th><th>Action</th></tr></thead><tbody>{workflows.map(w => <tr key={w.name}><td><strong>{w.name}</strong></td><td>{w.trigger}</td><td>{w.channel}</td><td><Badge>{w.status}</Badge></td><td><button className="btn btn-secondary">Edit</button></td></tr>)}</tbody></table></Card>
    <section className="grid grid-3" style={{ marginTop: 18 }}>
      <Card><CardTitle>1. Trigger</CardTitle><select className="select"><option>Before event starts</option><option>After event ends</option><option>Booking created</option><option>If guest no-shows</option></select></Card>
      <Card><CardTitle>2. Condition</CardTitle><select className="select"><option>Event type is Product Demo</option><option>Guest company size &gt; 50</option><option>Source is Website</option></select></Card>
      <Card><CardTitle>3. Action</CardTitle><select className="select"><option>Send email</option><option>Send SMS</option><option>Create CRM task</option><option>Ask AI to draft message</option></select></Card>
    </section>
    <Card style={{ marginTop: 18 }}><CardTitle>Message Editor</CardTitle><div className="form-row"><input className="input" defaultValue="Reminder: {{event_name}} starts soon"/><select className="select"><option>Email</option><option>SMS</option></select></div><textarea className="textarea" defaultValue={'Hi {{guest_name}},\n\nThis is a quick reminder that your {{event_name}} with {{host_name}} starts at {{meeting_time}}.\n\nSee you soon!'} /></Card>
  </>
}

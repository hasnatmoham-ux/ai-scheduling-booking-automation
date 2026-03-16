import PageHeader from '../components/PageHeader.jsx';
import DataTable from '../components/DataTable.jsx';
import { Card, CardTitle } from '../components/ui/Card.jsx';
import { bookings } from '../data/mockData.js';

export default function Bookings() {
  return <>
    <PageHeader eyebrow="Meeting Operations" title="Bookings" description="Track upcoming, completed, canceled, rescheduled, and no-show meetings." primary="New Booking" />
    <Card><div className="top-actions" style={{ marginBottom: 16 }}><button className="btn btn-ghost">Upcoming</button><button className="btn btn-secondary">Completed</button><button className="btn btn-secondary">Canceled</button><button className="btn btn-secondary">No-show</button></div><DataTable rows={bookings} /></Card>
    <section className="grid grid-2" style={{ marginTop: 18 }}><Card><CardTitle>Booking Detail Drawer Mock</CardTitle><p><strong>Guest:</strong> Sarah Khan</p><p><strong>AI Prep:</strong> Sarah is evaluating scheduling automation for a 140-person SaaS team. Mention workflow automation, routing, and CRM sync.</p><p><strong>Timeline:</strong> Booked → Reminder sent → AI brief generated</p></Card><Card><CardTitle>Actions</CardTitle><button className="btn btn-primary">Send Follow-Up</button> <button className="btn btn-secondary">Reschedule</button> <button className="btn btn-secondary">Mark No-show</button></Card></section>
  </>
}

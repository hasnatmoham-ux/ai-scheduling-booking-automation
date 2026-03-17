import PageHeader from '../components/PageHeader.jsx';
import { Card, CardTitle } from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import { eventTypes } from '../data/mockData.js';
import { Copy, MoreHorizontal } from 'lucide-react';

export default function EventTypes() {
  return <>
    <PageHeader eyebrow="Scheduling Products" title="Event Types" description="Create booking links for demos, interviews, consultations, and intro calls." />
    <section className="grid grid-4">
      {eventTypes.map((event) => <Card className="event-card" key={event.name}>
        <div className="event-head"><CardTitle>{event.name}</CardTitle><MoreHorizontal size={18}/></div>
        <p className="subtext">Duration: <strong>{event.duration}</strong> · Bookings: <strong>{event.bookings}</strong></p>
        <Badge>{event.active ? 'Active' : 'Inactive'}</Badge>
        <div className="copy-link">{event.link}</div>
        <div className="top-actions"><Button variant="secondary"><Copy size={16}/> Copy</Button><Button>Edit</Button></div>
      </Card>)}
    </section>
    <section style={{ marginTop: 18 }}><Card><CardTitle>Create / Edit Event Type</CardTitle><div className="form-row"><div><label className="label">Event name</label><input className="input" defaultValue="30-Min Product Demo" /></div><div><label className="label">Duration</label><select className="select"><option>30 minutes</option><option>45 minutes</option><option>60 minutes</option></select></div></div><div className="form-row"><div><label className="label">Location</label><select className="select"><option>Google Meet</option><option>Zoom</option><option>Phone Call</option></select></div><div><label className="label">Max bookings per day</label><input className="input" defaultValue="8" /></div></div><label className="label">Invitee questions</label><textarea className="textarea" defaultValue={'Name\nEmail\nCompany\nWhat would you like to discuss?'} /></Card></section>
  </>
}

import PageHeader from '../components/PageHeader.jsx';
import { Card } from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import { team } from '../data/mockData.js';

export default function Team() {
  return <>
    <PageHeader eyebrow="Workspace Access" title="Team Management" description="Invite members, assign roles, control calendars, and manage round-robin scheduling." primary="Invite Member" />
    <Card><table className="table"><thead><tr><th>Name</th><th>Role</th><th>Calendar Connected</th><th>Meetings</th><th>Actions</th></tr></thead><tbody>{team.map(m => <tr key={m.name}><td><strong>{m.name}</strong></td><td>{m.role}</td><td><Badge>{m.connected}</Badge></td><td>{m.meetings}</td><td><button className="btn btn-secondary">Change Role</button></td></tr>)}</tbody></table></Card>
  </>
}

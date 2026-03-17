import PageHeader from '../components/PageHeader.jsx';
import { Card, CardTitle } from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import { integrations } from '../data/mockData.js';
import { PlugZap } from 'lucide-react';

export default function Integrations() {
  return <>
    <PageHeader eyebrow="Connected Apps" title="Integrations" description="Connect calendars, video tools, CRM systems, payments, and automation platforms." primary="Add Integration" />
    <section className="grid grid-3">{integrations.map(app => <Card key={app.name}><div className="integration"><div style={{ display: 'flex', gap: 12, alignItems: 'center' }}><div className="icon-pill"><PlugZap size={20}/></div><div><CardTitle>{app.name}</CardTitle><Badge>{app.connected ? 'Connected' : 'Not Connected'}</Badge></div></div><button className="btn btn-secondary">{app.connected ? 'Settings' : 'Connect'}</button></div></Card>)}</section>
  </>
}

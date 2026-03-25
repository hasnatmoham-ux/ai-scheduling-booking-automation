import PageHeader from '../components/PageHeader.jsx';
import { Card, CardTitle } from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';

export default function Settings() {
  return <>
    <PageHeader eyebrow="Workspace Controls" title="Settings" description="Manage profile, branding, availability, notifications, billing, security, and API keys." primary="Save Changes" />
    <section className="grid grid-2">
      <Card><CardTitle>Profile</CardTitle><div className="form-row"><div><label className="label">Full name</label><input className="input" defaultValue="Bazzel Cole"/></div><div><label className="label">Work email</label><input className="input" defaultValue="bazzel@schedai.com"/></div></div><label className="label">Role</label><select className="select"><option>Founder</option><option>Sales</option><option>Recruiter</option><option>Consultant</option></select></Card>
      <Card><CardTitle>Workspace Branding</CardTitle><div className="form-row"><div><label className="label">Workspace name</label><input className="input" defaultValue="SchedAI Pro"/></div><div><label className="label">Primary color</label><input className="input" defaultValue="#6D5DFB"/></div></div><label className="label">Custom domain</label><input className="input" defaultValue="book.mycompany.com"/></Card>
      <Card><CardTitle>Availability</CardTitle><div className="form-row"><input className="input" defaultValue="Monday - Friday"/><input className="input" defaultValue="9:00 AM - 5:00 PM"/></div><div className="form-row"><select className="select"><option>America/New_York</option><option>Asia/Karachi</option></select><input className="input" defaultValue="15 min buffer"/></div></Card>
      <Card><CardTitle>Security & API</CardTitle><label className="label">API Key</label><input className="input" defaultValue="sk_live_schedai_********"/><div className="top-actions" style={{ marginTop: 14 }}><Button variant="secondary">Regenerate</Button><Button>Enable 2FA</Button></div></Card>
    </section>
  </>
}

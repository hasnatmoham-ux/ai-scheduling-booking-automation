import PageHeader from '../components/PageHeader.jsx';
import { Card, CardTitle } from '../components/ui/Card.jsx';
import { routingRules } from '../data/mockData.js';

export default function RoutingForms() {
  return <>
    <PageHeader eyebrow="Lead Qualification" title="Routing Forms" description="Qualify guests first, then route them to the right booking page, team member, or self-serve flow." primary="Publish Form" />
    <section className="grid grid-2">
      <Card><CardTitle>Form Builder</CardTitle><div className="form-row"><div><label className="label">Question</label><input className="input" defaultValue="What is your company size?" /></div><div><label className="label">Answer type</label><select className="select"><option>Dropdown</option><option>Text</option><option>Radio</option><option>Number</option></select></div></div><textarea className="textarea" defaultValue={'1-10\n11-50\n51-100\n100+'}/><div className="top-actions" style={{ marginTop: 14 }}><button className="btn btn-secondary">Add Question</button><button className="btn btn-primary">Preview Form</button></div></Card>
      <Card><CardTitle>Routing Rules</CardTitle>{routingRules.map((rule, i) => <div className="workflow-step" key={rule.condition}><div className="step-number">{i+1}</div><div><strong>{rule.condition}</strong><p className="subtext">Route to: {rule.route}</p></div></div>)}<button className="btn btn-primary" style={{ marginTop: 14 }}>Add Rule</button></Card>
    </section>
  </>
}

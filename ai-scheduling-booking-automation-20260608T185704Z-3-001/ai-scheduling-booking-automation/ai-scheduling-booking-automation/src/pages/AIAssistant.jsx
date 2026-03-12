import PageHeader from '../components/PageHeader.jsx';
import { Card, CardTitle } from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import { Sparkles, CheckCircle2, XCircle, Pencil } from 'lucide-react';

export default function AIAssistant() {
  return <>
    <PageHeader eyebrow="AI Co-Pilot" title="AI Scheduling Assistant" description="Use natural language to schedule, reschedule, draft follow-ups, and prepare for meetings." primary="New AI Task" />
    <section className="chat">
      <Card className="chat-box">
        <CardTitle>Conversation</CardTitle>
        <div className="messages">
          <div className="message user">Schedule a product demo with Alex next Tuesday afternoon.</div>
          <div className="message ai">I found three available slots next Tuesday: 1:30 PM, 2:00 PM, and 4:00 PM. The highest-confidence option is 2:00 PM based on both calendars.</div>
          <div className="message user">Draft a follow-up for yesterday's customer calls.</div>
          <div className="message ai">Generated 3 personalized follow-ups using meeting type, guest company, and notes. Approval is required before sending.</div>
        </div>
        <div className="top-actions"><input className="input" placeholder="Ask AI to schedule, reschedule, or draft..."/><Button><Sparkles size={16}/> Send</Button></div>
      </Card>
      <Card className="ai-card">
        <CardTitle>Suggested Action</CardTitle>
        <p><strong>Meeting:</strong> Product Demo with Alex Morgan</p>
        <p><strong>Suggested time:</strong> May 29, 2026, 2:00 PM</p>
        <p><strong>Confidence:</strong> 92%</p>
        <p className="subtext">AI checked host availability, guest preference, timezone, and meeting priority.</p>
        <div className="grid" style={{ marginTop: 16 }}>
          <Button><CheckCircle2 size={16}/> Approve</Button>
          <Button variant="secondary"><Pencil size={16}/> Edit</Button>
          <Button variant="secondary"><XCircle size={16}/> Reject</Button>
        </div>
      </Card>
    </section>
  </>
}

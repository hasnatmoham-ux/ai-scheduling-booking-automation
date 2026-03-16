import Button from '../components/ui/Button.jsx';
import { CalendarClock, Sparkles } from 'lucide-react';

export default function Auth() {
  return <div className="hero-auth"><section className="auth-art"><div className="logo"><div className="logo-icon"><CalendarClock size={22}/></div><span>SchedAI Pro</span></div><h1>AI-powered scheduling for modern revenue, hiring, and consulting teams.</h1><p style={{ color: '#cbd5e1', maxWidth: 520 }}>Create booking links, route leads, automate reminders, and let AI prepare every meeting before it happens.</p></section><section className="auth-form"><div className="eyebrow">Welcome back</div><h1>Sign in to your workspace</h1><p className="subtext">Continue managing your AI scheduling automation dashboard.</p><label className="label">Email</label><input className="input" defaultValue="bazzel@schedai.com"/><label className="label" style={{ marginTop: 14 }}>Password</label><input className="input" type="password" defaultValue="password"/><div className="grid" style={{ marginTop: 18 }}><Button>Sign In</Button><Button variant="secondary"><Sparkles size={16}/> Continue with Google</Button></div></section></div>
}

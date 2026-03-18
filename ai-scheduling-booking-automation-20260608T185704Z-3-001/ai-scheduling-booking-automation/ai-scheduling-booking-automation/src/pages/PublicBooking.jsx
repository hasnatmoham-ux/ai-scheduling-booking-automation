import { CalendarClock, Clock, Video, CheckCircle2 } from 'lucide-react';

export default function PublicBooking() {
  const slots = ['9:00 AM','10:30 AM','1:00 PM','2:00 PM','3:30 PM','4:00 PM'];
  return <div className="public-page"><div className="booking-shell">
    <aside className="booking-info"><div className="logo"><div className="logo-icon"><CalendarClock size={22}/></div><span>SchedAI Pro</span></div><h1>30-Min Product Demo</h1><p style={{ color: '#cbd5e1' }}>Book a personalized demo and see how AI scheduling can automate your team workflows.</p><p><Clock size={16}/> 30 minutes</p><p><Video size={16}/> Google Meet</p><p><CheckCircle2 size={16}/> AI prep brief included</p></aside>
    <main className="booking-main"><h2>Select a time</h2><p className="subtext">Timezone: America/New_York</p><div className="time-slots">{slots.map(s => <button key={s} className="time-slot">{s}</button>)}</div><h3>Your details</h3><div className="form-row"><input className="input" placeholder="Full name"/><input className="input" placeholder="Email address"/></div><input className="input" placeholder="Company"/><textarea className="textarea" style={{ marginTop: 14 }} placeholder="What would you like to discuss?"/><button className="btn btn-primary" style={{ marginTop: 14 }}>Confirm Booking</button></main>
  </div></div>
}

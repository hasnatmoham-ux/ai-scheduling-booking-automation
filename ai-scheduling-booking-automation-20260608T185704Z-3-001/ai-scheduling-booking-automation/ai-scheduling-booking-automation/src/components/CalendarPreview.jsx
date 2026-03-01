const days = Array.from({ length: 28 }, (_, i) => i + 1);
export default function CalendarPreview() {
  return <div className="calendar-grid">{days.map((day) => <div className="day" key={day}><span>May {day}</span>{[3,7,10,14,18,23,26].includes(day) && <div className="slot">Demo 2:00 PM</div>}{[5,12,20].includes(day) && <div className="slot">Interview</div>}</div>)}</div>
}

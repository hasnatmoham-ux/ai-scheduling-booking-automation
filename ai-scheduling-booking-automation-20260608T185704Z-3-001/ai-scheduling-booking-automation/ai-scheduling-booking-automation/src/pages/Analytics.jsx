import PageHeader from '../components/PageHeader.jsx';
import { Card, CardTitle } from '../components/ui/Card.jsx';
import MetricCard from '../components/MetricCard.jsx';
import { chartData } from '../data/mockData.js';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const analyticsStats = [
  { label: 'Booking Conversion', value: '42%', change: '+8%', icon: 'TrendingUp' },
  { label: 'Avg Time to Book', value: '1.8m', change: '-22%', icon: 'Calendar' },
  { label: 'No-show Reduction', value: '31%', change: '+6%', icon: 'UserX' },
  { label: 'Workflow Sent', value: '148', change: '+19%', icon: 'Bot' }
];

export default function Analytics() {
  return <>
    <PageHeader eyebrow="Performance Insights" title="Analytics" description="Measure bookings, conversion, no-shows, team utilization, and workflow performance." primary="Export Report" />
    <section className="grid grid-4">{analyticsStats.map(item => <MetricCard key={item.label} item={item}/>)}</section>
    <section className="grid grid-2" style={{ marginTop: 18 }}>
      <Card><CardTitle>Bookings Over Time</CardTitle><div style={{ height: 320 }}><ResponsiveContainer width="100%" height="100%"><BarChart data={chartData}><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="bookings" fill="#6d5dfb" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer></div></Card>
      <Card><CardTitle>No-show Trend</CardTitle><div style={{ height: 320 }}><ResponsiveContainer width="100%" height="100%"><LineChart data={chartData}><XAxis dataKey="name"/><YAxis/><Tooltip/><Line type="monotone" dataKey="noShows" stroke="#ef4444" strokeWidth={3}/></LineChart></ResponsiveContainer></div></Card>
    </section>
  </>
}

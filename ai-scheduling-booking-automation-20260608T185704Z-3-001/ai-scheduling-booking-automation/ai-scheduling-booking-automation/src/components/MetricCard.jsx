import { Calendar, TrendingUp, UserX, Bot } from 'lucide-react';
import { Card } from './ui/Card.jsx';
const iconMap = { Calendar, TrendingUp, UserX, Bot };
export default function MetricCard({ item }) {
  const Icon = iconMap[item.icon] || Calendar;
  return <Card><div className="metric"><div><small>{item.label}</small><strong>{item.value}</strong><small>{item.change} vs last week</small></div><div className="icon-pill"><Icon size={22}/></div></div></Card>
}

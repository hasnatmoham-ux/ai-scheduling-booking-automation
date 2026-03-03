import Button from './ui/Button.jsx';
import { Plus, Sparkles } from 'lucide-react';

export default function PageHeader({ eyebrow, title, description, primary = 'Create Event Type' }) {
  return <div className="topbar">
    <div>
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <div className="subtext">{description}</div>
    </div>
    <div className="top-actions">
      <Button variant="secondary"><Sparkles size={17}/> Ask AI</Button>
      <Button><Plus size={17}/> {primary}</Button>
    </div>
  </div>
}

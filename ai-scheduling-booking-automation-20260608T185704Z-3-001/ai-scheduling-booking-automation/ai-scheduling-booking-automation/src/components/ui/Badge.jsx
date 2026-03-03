export default function Badge({ children }) {
  const text = String(children).toLowerCase();
  const type = text.includes('confirm') || text.includes('active') || text.includes('yes') ? 'success' : text.includes('pending') || text.includes('draft') || text.includes('rescheduled') ? 'warning' : text.includes('no-show') || text.includes('no') ? 'error' : 'neutral';
  return <span className={`badge ${type}`}>{children}</span>;
}

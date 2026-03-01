import Badge from './ui/Badge.jsx';
export default function DataTable({ rows }) {
  return <table className="table">
    <thead><tr><th>Guest</th><th>Event</th><th>Host</th><th>Date/Time</th><th>Source</th><th>Status</th><th>Action</th></tr></thead>
    <tbody>{rows.map((r) => <tr key={r.email}>
      <td><strong>{r.guest}</strong><br/><small>{r.email}</small></td>
      <td>{r.event}</td><td>{r.host}</td><td>{r.date}<br/><small>{r.time}</small></td><td>{r.source}</td><td><Badge>{r.status}</Badge></td><td><button className="btn btn-secondary">Details</button></td>
    </tr>)}</tbody>
  </table>
}

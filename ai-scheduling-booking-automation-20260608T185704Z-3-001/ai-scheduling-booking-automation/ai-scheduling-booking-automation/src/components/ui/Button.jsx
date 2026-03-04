export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const cls = variant === 'secondary' ? 'btn btn-secondary' : variant === 'ghost' ? 'btn btn-ghost' : 'btn btn-primary';
  return <button className={`${cls} ${className}`} {...props}>{children}</button>;
}

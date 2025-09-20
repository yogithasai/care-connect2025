export default function SectionCard({ title, children, className = "" }) {
  return (
    <div className={`border rounded-lg p-5 bg-white shadow-sm ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
      {children}
    </div>
  );
}




export default function ReportCard({ title, description }) {
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700 mt-1">{description}</p>
      <button className="mt-3 px-3 py-1 rounded bg-blue-600 text-white">View Report</button>
    </div>
  );
}



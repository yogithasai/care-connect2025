export default function NotificationCard({ items = [] }) {
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="text-lg font-semibold">Notifications</h3>
      {items.length === 0 ? (
        <p className="text-gray-700 mt-1">No notifications.</p>
      ) : (
        <ul className="list-disc pl-5 text-gray-700 mt-2">
          {items.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}



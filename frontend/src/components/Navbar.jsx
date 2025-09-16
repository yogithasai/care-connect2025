import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">CareConnect</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

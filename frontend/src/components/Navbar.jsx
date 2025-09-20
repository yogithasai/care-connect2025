import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">CareConnect</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to={user ? (user.role === "Doctor" ? "/doctor" : user.role === "Hospital" ? "/hospital" : "/patient") : "/dashboard"}>Dashboard</Link>
        {!user && <Link to="/login">Login</Link>}
        {user && (
          <>
            <span className="opacity-80">{user.role}</span>
            <button onClick={handleLogout} className="bg-white text-blue-600 px-2 py-1 rounded">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RoleRoute({ allow }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;
  if (!user) return <Navigate to="/login" replace />;
  if (Array.isArray(allow) ? !allow.includes(user.role) : user.role !== allow) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />;
}



import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";
import { AuthProvider } from "./context/AuthContext";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import HospitalDashboard from "./pages/HospitalDashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route element={<ProtectedRoute />}> 
            <Route element={<RoleRoute allow="Patient" />}> 
              <Route path="/patient" element={<PatientDashboard />} />
              <Route path="/patient-dashboard" element={<PatientDashboard />} />
            </Route>
            <Route element={<RoleRoute allow="Doctor" />}> 
              <Route path="/doctor" element={<DoctorDashboard />} />
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            </Route>
            <Route element={<RoleRoute allow="Hospital" />}> 
              <Route path="/hospital" element={<HospitalDashboard />} />
              <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

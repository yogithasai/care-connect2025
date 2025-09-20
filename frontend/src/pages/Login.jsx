import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [role, setRole] = useState("Patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(role, { email });
    if (role === "Doctor") navigate("/doctor");
    else if (role === "Hospital") navigate("/hospital");
    else navigate("/patient");
  };
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-4 border rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded mb-4">
          <option>Patient</option>
          <option>Doctor</option>
          <option>Hospital</option>
        </select>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="w-full p-2 border rounded mb-4"/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-2 border rounded mb-4"/>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
      <Footer />
    </>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-20 p-4 border rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <select className="w-full p-2 border rounded mb-4">
          <option>Patient</option>
          <option>Doctor</option>
          <option>Hospital</option>
        </select>
        <input type="text" placeholder="Email" className="w-full p-2 border rounded mb-4"/>
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4"/>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </div>
      <Footer />
    </>
  );
}

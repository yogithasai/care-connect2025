import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoCall from "../components/VideoCall";

export default function DoctorDashboard() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-4">Doctor Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2">Assigned Patients</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>John Doe - Hypertension</li>
              <li>Mary Smith - Diabetes</li>
              <li>Alex Lee - Asthma</li>
            </ul>
          </div>
          <div className="border rounded p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2">Telemedicine</h2>
            <VideoCall />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}



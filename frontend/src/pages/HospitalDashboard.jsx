import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";
import BackgroundGradient from "../components/BackgroundGradient";

export default function HospitalDashboard() {
  return (
    <>
      <Navbar />
      <BackgroundGradient />
      <AnimatedPage>
        <div className="max-w-6xl mx-auto mt-8 p-4">
          <h1 className="text-3xl font-bold mb-4">Hospital Dashboard</h1>
          <div className="grid md:grid-cols-3 gap-4">
            <AnimatedCard>
              <div className="border rounded p-4 bg-white">
                <h2 className="text-xl font-semibold mb-2">Manage Doctors</h2>
                <p className="text-gray-700">Add/remove doctors and assign departments.</p>
              </div>
            </AnimatedCard>
            <AnimatedCard>
              <div className="border rounded p-4 bg-white">
                <h2 className="text-xl font-semibold mb-2">Manage Patients</h2>
                <p className="text-gray-700">View patient intake and triage queues.</p>
              </div>
            </AnimatedCard>
            <AnimatedCard>
              <div className="border rounded p-4 bg-white">
                <h2 className="text-xl font-semibold mb-2">Insights</h2>
                <p className="text-gray-700">Occupancy, readmission risk, and throughput KPIs.</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedPage>
      <Footer />
    </>
  );
}



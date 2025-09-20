import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbox from "../components/Chatbox";
import { useAuth } from "../context/AuthContext";
import VoiceAssistant from "../components/VoiceAssistant";

export default function Dashboard() {
  const { user } = useAuth();
  const title = user?.role ? `${user.role} Dashboard` : "Dashboard";
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-4">Here you can view reports, track health insights, and chat with your AI assistant.</p>
        <div className="grid grid-cols-1 gap-4">
          <section className="border rounded p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-700">Role-aware content placeholder.</p>
          </section>
          <section className="border rounded p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2">AI Assistant</h2>
            <Chatbox />
          </section>
          <VoiceAssistant />
        </div>
      </div>
      <Footer />
    </>
  );
}


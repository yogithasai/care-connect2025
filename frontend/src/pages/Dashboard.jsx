import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbox from "../components/Chatbox";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Here you can view reports, track health insights, and chat with your AI assistant.</p>
        <Chatbox />
      </div>
      <Footer />
    </>
  );
}

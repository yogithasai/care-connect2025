import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Welcome to CareConnect</h1>
        <p className="mt-4 text-lg text-gray-600">Your AI-powered healthcare assistant.</p>
      </div>
      <Footer />
    </>
  );
}

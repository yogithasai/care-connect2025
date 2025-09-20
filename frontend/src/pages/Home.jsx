import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedPage from "../components/AnimatedPage";
import BackgroundGradient from "../components/BackgroundGradient";
import Container from "../components/Container";
import { motion } from "framer-motion";

<motion.button
  whileHover={{ scale: 1.08, boxShadow: "0px 0px 8px rgba(7, 95, 160, 0.3)" }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  style={{
    padding: "10px 18px",
    borderRadius: "4px",
    background: "#115e9d",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }}
>
  Get Started
</motion.button>

export default function Home() {
  return (
    <>
      <Navbar />
      <BackgroundGradient />
      <AnimatedPage>
        <Container>
          <div className="text-center mt-20 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Welcome to CareConnect</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Your AI-powered healthcare assistant.</p>
            <div className="mt-8">
              <a href="/login" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:shadow-md transition">Get Started</a>
            </div>
          </div>
        </Container>
      </AnimatedPage>
      <Footer />
    </>
  );
}

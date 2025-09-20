import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbox from "../components/Chatbox";
import ReportCard from "../components/ReportCard";
import RiskScoreCard from "../components/RiskScoreCard";
import NotificationCard from "../components/NotificationCard";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";
import BackgroundGradient from "../components/BackgroundGradient";
import { motion } from "framer-motion";



export default function PatientDashboard() {
  return (
    <>
      <Navbar />
      <BackgroundGradient />
      <AnimatedPage>
        <div className="max-w-6xl mx-auto mt-8 p-4">
          <h1 className="text-3xl font-bold mb-4">Patient Dashboard</h1>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <AnimatedCard><ReportCard title="Latest Report" description="Your most recent lab results." /></AnimatedCard>
            <AnimatedCard><RiskScoreCard score={72} trend="increasing" /></AnimatedCard>
            <AnimatedCard><NotificationCard items={["Schedule follow-up", "Take medication A"]} /></AnimatedCard>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <AnimatedCard>
              <div className="border rounded p-4 bg-white">
                <h2 className="text-xl font-semibold mb-2">Health Summary</h2>
                <p className="text-gray-700">Summary placeholder content.</p>
              </div>
            </AnimatedCard>
            <AnimatedCard>
              <div className="border rounded p-4 bg-white">
                <h2 className="text-xl font-semibold mb-2">AI Assistant</h2>
                <Chatbox />
              </div>
            </AnimatedCard>
          </div>
        </div>
        
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  <ReportCard />
</motion.div>
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <RiskScoreCard />
</motion.div>
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <NotificationCard />
</motion.div>

      </AnimatedPage>
      <Footer />
    </>
  );
}



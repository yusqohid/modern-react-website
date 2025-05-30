import "./App.css";
import CompanyLogo from "./components/CompanyLogo.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import Hero from "./components/Hero.jsx";
import MonitorSection from "./components/MonitorSection.jsx";
import Navbar from "./components/Navbar.jsx";
import PricingSection from "./components/PricingSection.jsx";
import PurposeSection from "./components/PurposeSection.jsx";
import ScheduleSection from "./components/ScheduleSection.jsx";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
      </div>
    </main>
  );
}

export default App;

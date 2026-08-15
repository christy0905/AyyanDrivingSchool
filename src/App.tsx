import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import InCarDriving from "@/sections/InCarDriving";
import Services from "@/sections/Services";
import Courses from "@/sections/Courses";
import WhyChooseUs from "@/sections/WhyChooseUs";
import HowItWorks from "@/sections/HowItWorks";
import TrainingTopics from "@/sections/TrainingTopics";
import Gallery from "@/sections/Gallery";
import Instructors from "@/sections/Instructors";
import Testimonials from "@/sections/Testimonials";
import Stats from "@/sections/Stats";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import FinalCTA from "@/sections/FinalCTA";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <InCarDriving />
        <Services />
        <Courses />
        <WhyChooseUs />
        <HowItWorks />
        <TrainingTopics />
        <Gallery />
        <Instructors />
        <Testimonials />
        <Stats />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

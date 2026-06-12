import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications"; // 1. Import Section
import Timeline from "./components/Timeline";
import ProjectMap from "./components/ProjectMap";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#090d16] min-h-screen selection:bg-amber-500/30 selection:text-amber-200 antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications /> {/* 2. Insert directly under your Skills Core */}
      <Timeline />
      <ProjectMap />
      <Contact />
    </div>
  );
}

export default App;
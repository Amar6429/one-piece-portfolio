// src/components/Navbar.jsx
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#070a13]/40 border-b border-slate-900/50 py-4 px-8 md:px-16 flex justify-between items-center">
      <div className="text-xl font-black tracking-wider text-white font-mono">
        <span className="text-amber-500">⚓</span> AMAR SURUSHE
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-slate-400">
        <Link to="about" smooth={true} className="hover:text-amber-400 cursor-pointer transition">Know Your Captain</Link>
        <Link to="skills" smooth={true} className="hover:text-amber-400 cursor-pointer transition">Abilities</Link>
        <Link to="projects" smooth={true} className="hover:text-amber-400 cursor-pointer transition">Grand Line Map</Link>
        <Link to="contact" smooth={true} className="hover:text-amber-400 cursor-pointer transition">Log Anchor</Link>
      </div>

      <a href="https://drive.google.com/file/d/1P_DA5bqqycHaO4w-3K9i7ZHPvoL4AAkj/view?usp=drive_link" className="border border-amber-500/30 bg-amber-500/5 text-amber-400 hover:bg-amber-500 hover:text-slate-950 px-4 py-2 rounded-lg text-xs font-mono tracking-wider font-bold transition duration-300">
        Bounty Resume
      </a>
    </nav>
  );
}

export default Navbar;
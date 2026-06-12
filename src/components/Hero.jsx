// src/components/Hero.jsx
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import profileImage from "../assets/your-photo.jpeg";


function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#0b1329] via-[#090d16] to-[#05070f] flex items-center">

      {/* Premium Tech Canvas Textures */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />



      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 md:px-16 grid lg:grid-cols-12 gap-12 items-center">

        {/* Left: Premium Engineering Branding */}
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-900/30 text-blue-400 font-mono text-xs tracking-wider uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            Sailing the Web Ecosystem
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4"
          >
            Amar Surushe
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold font-mono text-amber-500 mb-6"
          >
            Software Engineer | Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl text-slate-400 text-sm md:text-base leading-relaxed mb-10"
          >
            Building scalable full-stack web applications using React, Node.js and MongoDB while exploring AI and cybersecurity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group bg-amber-500 text-slate-950 px-6 py-3 rounded-xl font-bold font-mono text-sm flex items-center gap-2 hover:bg-amber-400 transition-all shadow-[0_4px_20px_rgba(245,158,11,0.15)]"
            >
              Logbook Entries <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://drive.google.com/file/d/1P_DA5bqqycHaO4w-3K9i7ZHPvoL4AAkj/view?usp=drive_link"
              className="border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 px-6 py-3 rounded-xl font-bold font-mono text-sm flex items-center gap-2 hover:bg-slate-900/40 transition-all"
            >
              🏴‍☠️ Bounty Resume
              Download  <FiDownload />
            </a>
          </motion.div>
        </div>

        {/* Right: Premium Identity Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 p-3 bg-slate-950/80 border border-slate-800/80 rounded-[2rem] backdrop-blur-md max-w-[340px] w-full shadow-[0_25px_60px_rgba(0,0,0,0.7)] hover:border-amber-500/20 transition-all duration-500 overflow-hidden"
          >
            {/* Image Box Container */}
            <div className="relative rounded-[1.7rem] overflow-hidden aspect-[4/5] bg-slate-900 border border-slate-800/50">
              <img
                src={profileImage}
                alt="Amar Surushe Portrait"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              {/* Dynamic Overlay Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

              {/* Functional Tech Corners Brackets */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-amber-500/40 group-hover:border-amber-400 transition-colors" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-amber-500/40 group-hover:border-amber-400 transition-colors" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-amber-500/40 group-hover:border-amber-400 transition-colors" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-amber-500/40 group-hover:border-amber-400 transition-colors" />
            </div>

            {/* Micro Monospace Info Footnote */}
            <div className="px-4 pt-4 pb-2 flex items-center justify-between font-mono text-left">
              <div>
                <span className="text-[9px] text-slate-500 uppercase tracking-wider block">Log Anchor</span>
                <span className="text-xs font-bold text-slate-400">AMAR_SURUSHE.SYS</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-slate-500 uppercase tracking-wider block">Rank Assignment</span>
                <span className="text-xs font-bold text-amber-500 group-hover:text-amber-400 transition-colors">CAPTAIN / DEV</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Sleek Monospace Scroll Track */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 font-mono text-[10px] tracking-[0.2em] z-20">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="w-[2px] h-10 bg-slate-800/80" />
          ENTER GRAND LINE
        </motion.div>
      </div>

    </section>
  );
}

export default Hero;
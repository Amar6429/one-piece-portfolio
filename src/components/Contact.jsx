import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from "react-icons/fi";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#090d16] to-[#04060a] text-slate-100 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Subtle background glow representing the sunrise at the end of the sea voyage */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-amber-500 font-mono tracking-widest text-sm uppercase mb-3">
            ⚓ Final Destination
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Drop Anchor & Connect
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
            Whether you are looking to recruit a forward-thinking Full-Stack Developer, discuss full-stack applications, or talk system architecture—let's start a conversation.
          </p>
        </motion.div>

        {/* High-End Connect Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-20"
        >
          {/* Email Card */}
          <a
            href="mailto:amarsurushe2019@gmail.com" 
            className="group bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex flex-col items-center justify-center hover:border-amber-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl text-amber-500 mb-4 group-hover:scale-110 transition-transform">
              <FiMail />
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Email</span>
            <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors flex items-center gap-1">
              Email <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all text-amber-500" />
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/amar-surushe" 
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex flex-col items-center justify-center hover:border-blue-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <FiLinkedin />
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">LinkedIn</span>
            <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors flex items-center gap-1">
              LinkedIn <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all text-blue-400" />
            </span>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Amar6429"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex flex-col items-center justify-center hover:border-purple-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <FiGithub />
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Repositories</span>
            <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors flex items-center gap-1">
             GitHub <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all text-purple-400" />
            </span>
          </a>
        </motion.div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-slate-800/60 mb-8" />

        {/* Minimal Footer Block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} Amar Surushe. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Sailing the Web Ecosystem</span>
            <span className="text-amber-500 animate-pulse">⚓</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
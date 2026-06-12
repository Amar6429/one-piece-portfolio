// src/components/ProjectMap.jsx
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projectLogs = [

  {
    id: 1,
    sector: "Log 04 /URL Shortening Service",
    name: "LinkSnap – URL Shortening Service",
    tagline: "RESTful URL Shortening Service Built for Speed and Simplicity.",
    description: "A full-stack URL shortening platform that enables users to create, manage, update, delete, and monitor shortened URLs through a RESTful API with a modern React dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "React","REST API","Axios"], 
    links: { github: "https://github.com/Amar6429/url-shortener"}
  },
   {
    id: 2,
    sector: "Log 03 / Productivity Tools",
    name: "Terminal Roast",
    tagline: "Context-Aware VS Code Extension Ecosystem",
    description: "Published a responsive VS Code development engine asset playing algorithmic audio feedback hooks directly inside active terminals whenever localized script deployments execute failures.",
    tech: ["VS Code Extension API", "Node.js", "JSON Schemas", "Event Hooks"],
    links: { github: "https://github.com/Amar6429/terminal-roast", live: "https://marketplace.visualstudio.com/items?itemName=Amar-Surushe.terminal-roaster" }
  },
  {
    id: 3,
    sector: "Log 02 / AI & Neural Integration",
    name: "Leaf Disease Detection Network",
    tagline: "Computer Vision Crop Diagnosis Pipeline",
    description: "Engineered an intelligent agricultural diagnostic platform matching MERN web frontends against custom trained TensorFlow/Flask diagnostic endpoints hosted securely via remote APIs.",
    tech: ["MERN Stack", "TensorFlow", "Flask API", "Kaggle Dataset Processing"],
    links: { github: "#", live: "#" }
  }
];

function ProjectMap() {
  return (
    <section id="projects" className="py-24 bg-[#05070f] text-slate-200 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-20 text-left">
          <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">Voyage Roadmap</p>
          <h2 className="text-4xl font-black text-white tracking-tight">The Grand Line System Logs</h2>
        </div>

        {/* Master Timeline Track */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {projectLogs.map((log, idx) => (
            <motion.div 
              key={log.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Custom Track Anchor Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full border-2 border-amber-500 bg-[#05070f] group-hover:bg-amber-400 transition-all z-20 shadow-[0_0_12px_rgba(245,158,11,0.2)]" />

              <div className="bg-slate-900/20 border border-slate-800/60 rounded-2xl p-6 md:p-8 hover:bg-slate-900/40 hover:border-slate-700/60 transition-all duration-300 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-amber-500 tracking-widest uppercase block mb-2">{log.sector}</span>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{log.name}</h3>
                <p className="text-xs text-slate-500 italic mb-4 font-medium">{log.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-3xl">{log.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {log.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono bg-blue-950/20 border border-blue-900/30 text-blue-400 px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>

                <div className="border-t border-slate-800/60 pt-4 flex items-center gap-6">
                  <a href={log.links.github} className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"><FiGithub /> 💻 Source Code</a>
                  <a href={log.links.live} className="flex items-center gap-2 text-xs font-mono text-amber-500 hover:text-amber-400 transition-colors"><FiExternalLink />  Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectMap;
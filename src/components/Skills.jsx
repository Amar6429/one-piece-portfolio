// src/components/Skills.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaravel, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiExpress, SiTailwindcss, SiFirebase } from "react-icons/si";

const abilities = [
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiJavascript />, name: "JavaScript (ES6+)" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <FaLaravel />, name: "Laravel" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiFirebase />, name: "Firebase Architecture" },
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#05070f] text-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">Technical Core</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">System Arsenal & Abilities</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {abilities.map((ability, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, borderColor: "rgba(245, 158, 11, 0.3)" }}
              className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-200 backdrop-blur-sm group"
            >
              <div className="text-3xl text-slate-500 group-hover:text-amber-400 transition-colors duration-200 mb-3">
                {ability.icon}
              </div>
              <span className="text-sm font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors">
                {ability.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
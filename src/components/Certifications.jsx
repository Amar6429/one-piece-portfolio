import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { certificationData } from "../data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#05070f] text-slate-200 relative border-t border-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">Verified Logs</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">The Bounty Board <span className="text-slate-500 font-light">/ Credentials</span></h2>
        </div>

        {/* Modern Certifications Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(245, 158, 11, 0.2)" }}
              className="bg-slate-900/20 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Badge Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-center justify-center text-amber-500 text-lg group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                    <FiAward />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">{cert.date}</span>
                </div>

                {/* Credential Meta Data */}
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                  Issued by: <span className="text-slate-300 font-sans font-semibold">{cert.issuer}</span>
                </p>

                {/* Dynamic Framework Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-mono bg-slate-900/80 border border-slate-850 text-slate-400 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Secure Live Verification Link */}
              <div className="border-t border-slate-850 pt-4">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Verify Credential <FiExternalLink className="text-sm text-amber-500" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;
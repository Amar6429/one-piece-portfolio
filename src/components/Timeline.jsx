import { motion } from "framer-motion";
import timeline from "../data/timeline";

function Timeline() {
  return (
    <section
      id="journey"
      className="min-h-screen bg-slate-900 text-white py-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Heading */}

        <div className="text-center mb-12">
          <p className="text-yellow-400 uppercase tracking-[5px] text-sm">
            Captain's Log
          </p>

          <h2 className="text-5xl font-bold mt-2">
            📖 Captain's Journal
          </h2>

          <p className="text-slate-400 mt-4">
            "A captain is defined not by the seas he sails, but by the lessons each voyage teaches."
          </p>
        </div>

        {/* Journal */}

        <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">

          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-8 ${
                index !== timeline.length - 1
                  ? "border-b border-slate-700"
                  : ""
              }`}
            >
              <div className="flex justify-between items-center mb-3">

                <h3 className="text-yellow-400 font-bold text-lg">
                  ⚓ {item.log}
                </h3>

                <span className="text-sm text-slate-400">
                  {item.year}
                </span>

              </div>

              <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
                {item.sea}
              </p>

              <h4 className="text-2xl font-semibold mb-3">
                {item.title}
              </h4>

              <p className="text-slate-300 leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}

export default Timeline;
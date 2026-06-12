import { motion } from "framer-motion";

function SkillCard({ icon, name }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -10,
      }}
      className="bg-slate-800 rounded-3xl p-8 text-center cursor-pointer shadow-xl"
    >
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white">
        {name}
      </h3>
    </motion.div>
  );
}

export default SkillCard;
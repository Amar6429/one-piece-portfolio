import { motion } from "framer-motion";
import profileImage from "../assets/your-photo.jpeg";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex items-center py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          ⚓ Know Your Captain
        </motion.h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800 p-8 rounded-3xl shadow-xl"
          >
            <div className="w-32 h-32 rounded-full  flex items-center justify-center text-5xl mx-auto mb-6">
              <img
                src={profileImage}
                alt="Amar Surushe Portrait"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>

            <h3 className="text-3xl font-bold text-center mb-4">
              Amar Surushe
            </h3>

            <p className="text-center text-slate-300 leading-8">
              B.Tech Information Technology student passionate
              about Web Development, React, Cybersecurity,
              and AI. I enjoy building projects that solve
              real-world problems and improve user experience.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-yellow-400 text-black p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-6">
              Crew Stats
            </h3>

            <div className="space-y-4 text-lg">

              <div>
                ⚓ Role: Full-Stack Developer
              </div>

              <div>
                ⚓ Speciality: React & JavaScript
              </div>

              <div>
                ⚓ Mission: Build Amazing Web Apps
              </div>

              <div>
                ⚓ Exploring: Cybersecurity & AI
              </div>

              <div>
                ⚓ Current Goal: Software Developer
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
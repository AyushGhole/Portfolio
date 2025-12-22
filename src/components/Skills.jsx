// src/components/Skills.jsx

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaExchangeAlt, 
  FaPython // ✅ For REST APIs
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiC,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "C", icon: <SiC className="text-blue-500" /> },
    { name: "Java (DSA)", icon: <FaJava className="text-red-600" /> },
    { name: "REST API’s", icon: <FaExchangeAlt className="text-indigo-600" /> },
    { name: "MERN Stack", icon: <FaDatabase className="text-purple-500" /> },
    { name: "Python", icon: <FaPython  className="text-purple-500" /> },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-[#050507] via-[#050816] to-[#020617] text-white overflow-hidden">
      {/* Soft background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-16 w-80 h-80 bg-purple-600 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-indigo-500 blur-[140px]" />
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
          Skills & Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12 text-center text-sm md:text-base text-indigo-100/80">
          From front-end interactions to back-end architecture, these are the
          core technologies I use to ship scalable, production-ready products.
        </motion.p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="w-full max-w-[130px] rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-indigo-900/30 px-3 py-4 flex flex-col items-center space-y-2 backdrop-blur-xl">
              <div className="text-4xl md:text-5xl">{skill.icon}</div>
              <p className="text-xs md:text-sm font-medium text-center text-indigo-50/90">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

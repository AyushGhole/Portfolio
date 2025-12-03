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
  FaExchangeAlt, // ✅ For REST APIs
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
  ];

  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center">
          Skills & Tech Stack
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center space-y-2">
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-sm font-medium text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

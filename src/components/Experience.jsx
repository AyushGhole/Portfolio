// src/components/Experience.jsx
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Systemic Altruism",
      date: "Mar 2025 - Jun 2025",
      description:
        "Developed real-time chat features using React, Node.js, and Socket.IO, including audio message recording & playback. Built organization and channel management interfaces, implemented file uploads and integrated MongoDB for structured data management. Ensured responsive and modern UI using Tailwind CSS and shadcn/ui.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Sockets",
        "WebRTC",
      ],
      logo: "sa.jpg",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-4 bg-gradient-to-b from-black via-indigo-950 to-black text-white overflow-hidden">
      {/* 🔹 Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/grid.svg')] bg-cover"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-extrabold mb-16 
            bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Experience
        </motion.h2>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group">
              {/* Outer glowing layer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Glass Card */}
              <div
                className="relative p-8 md:p-10 rounded-2xl 
                bg-black/40 backdrop-blur-xl shadow-2xl 
                ring-1 ring-white/10 hover:scale-[1.01] 
                transition-all duration-500">
                {/* Top Row */}
                <div className="flex items-start gap-6 mb-6">
                  {/* Company Logo */}
                  <img
                    src={exp.logo}
                    className="w-20 h-20 rounded-xl object-cover shadow-lg ring-2 ring-indigo-500/40"
                    alt=""
                  />

                  {/* Title + Info */}
                  <div>
                    <h3 className="text-3xl font-bold">{exp.role}</h3>
                    <p className="text-indigo-400 text-lg font-medium mt-1">
                      {exp.company} — {exp.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full 
                      bg-indigo-700/40 text-indigo-200 
                      ring-1 ring-indigo-400/20 backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/Experience.jsx
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Systemic Altruism, San Francisco, USA(Remote)",
      date: "Mar 2025 - Jun 2025",
      description: [
        "Architected a real-time chat application using Socket.IO and React, supporting 500+ concurrent WebSocket connections with sub-100ms latency.",
        "Implemented role-based access control (RBAC) with secure JWT authentication, managing permissions across users, channels, and organizations.",
        "Built a scalable media pipeline for images and audio with automatic validation, compression, and CDN-based delivery.",
        "Optimized MongoDB performance using indexing + query optimization, reducing average API latency from 200ms to 80ms.",
        "Developed end-to-end organization and channel management features including search, filter, and full CRUD operations.",
        "Improved system reliability through error boundaries, structured logging, and automatic retry mechanisms across microservices.",
      ],
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
    {
      role: "Full Stack Developer",
      company: "Sortwind Pvt Ltd, Ghaziabad, India",
      date: "Jul 2025 – Oct 2025",
      description: [
        "Developed production-ready full-stack modules using MERN stack, serving 1000+ concurrent users with 99.9% uptime.",
        "Built RESTful APIs with JWT authentication, input validation, and structured routing using Node.js/Express, reducing unauthorized access attempts by 100%.",
        "Designed optimized MongoDB schemas with proper indexing, improving query performance by 40% for chat history retrieval.",
        "Implemented end-to-end testing with Jest and Postman, achieving 85%+ code coverage and reducing production bugs by 60%.",
        "Collaborated in Agile code reviews and debugging sessions, improving codebase quality and system stability across deployment pipelines.",
      ],
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Jest",
        "REST APIs",
      ],
      logo: "sort.JPG", // Add your company logo here
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
                <ul className="text-gray-300 leading-relaxed mb-6 space-y-3 text-lg list-disc list-inside">
                  {exp.description.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}>
                      {point}
                    </motion.li>
                  ))}
                </ul>

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

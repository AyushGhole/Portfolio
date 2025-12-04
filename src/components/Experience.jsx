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
      role: "Full Stack Developer Intern",
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
      className="relative py-24 px-4 bg-gradient-to-b from-black via-[#020617] to-black text-white overflow-hidden">
      {/* Subtle Grid / Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/grid.svg')] bg-cover"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-600 blur-[140px] opacity-40"></div>
      <div className="absolute bottom-[-5rem] right-0 w-80 h-80 bg-purple-700 blur-[160px] opacity-40"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300">
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12 text-center text-sm md:text-base text-indigo-100/80">
          Hands-on experience building and scaling real-world products with the
          MERN stack, websockets, and cloud-ready architectures.
        </motion.p>

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
              <div className="relative p-6 md:p-8 rounded-2xl bg-black/50 backdrop-blur-2xl shadow-2xl ring-1 ring-white/10 hover:scale-[1.01] transition-all duration-500">
                {/* Top Row */}
                <div className="flex items-start gap-4 md:gap-6 mb-5 md:mb-6">
                  {/* Company Logo */}
                  <img
                    src={exp.logo}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shadow-lg ring-2 ring-indigo-500/40"
                    alt=""
                  />

                  {/* Title + Info */}
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                      {exp.role}
                    </h3>
                    <p className="text-indigo-300 text-sm md:text-base font-medium mt-1">
                      {exp.company} — {exp.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <ul className="text-indigo-50/90 leading-relaxed mb-5 md:mb-6 space-y-2 md:space-y-3 text-sm md:text-base list-disc list-inside">
                  {exp.description.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}>
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs md:text-sm rounded-full bg-indigo-700/40 text-indigo-100 ring-1 ring-indigo-400/30 backdrop-blur-sm">
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

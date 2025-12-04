// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  const paragraphs = [
    "Hi! I’m Ayush Ghole, ",
    "A Full-Stack Developer with 6+ months of experience building scalable MERN applications and real-time systems using WebRTC. Optimized database performance by 40%, implemented secure JWT/RBAC authentication, and delivered production features supporting 1000+ concurrent users.",
    "Skilled in REST APIs, microservices, React/Tailwind UI, and automated testing (85%+ coverage).",
    "Strong academic record with 9.29 CGPA and a passion for creating reliable, user-centric products at scale.",
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-white overflow-hidden">
      {/* floating gradient highlights behind card */}
      <div className="absolute -top-24 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-500 via-pink-500 to-purple-500 rounded-full opacity-25 blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[-6rem] right-0 w-96 h-96 bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-400 rounded-full opacity-20 blur-3xl -z-10 animate-pulse-slow" />

      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 opacity-70 blur-lg" />
            <motion.img
              src="phto.jpg"
              alt="Ayush Ghole"
              className="relative rounded-full w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover shadow-2xl ring-2 ring-indigo-400/60"
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            />
          </div>
        </motion.div>

        {/* Glassy Neon Card */}
        <motion.div
          className="flex-1 bg-white/5 backdrop-blur-2xl px-6 py-7 md:px-8 md:py-9 rounded-3xl shadow-[0_0_80px_rgba(79,70,229,0.45)] ring-1 ring-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-300 via-sky-300 to-pink-300 text-transparent bg-clip-text"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}>
            About Me
          </motion.h2>

          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className={`text-sm md:text-base mb-3 leading-relaxed ${
                i === 0 ? "font-semibold text-indigo-100" : "text-indigo-50/85"
              }`}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}>
              {i === 0 ? "Hi! I’m Ayush Ghole" : text}
            </motion.p>
          ))}

          {/* Call-to-Action Button */}
          <motion.a
            href="#contact"
            className="inline-block mt-5 px-7 py-3 text-sm md:text-base font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-900/40 hover:shadow-pink-700/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}>
            Let’s Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

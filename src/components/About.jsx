// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  const paragraphs = [
    "Hi! I’m ",
    "a passionate and driven Full-Stack Developer with a knack for building efficient, user-friendly web applications.",
    "I enjoy transforming ideas into real-life products that make a difference. With a strong foundation in React, Node.js, and modern JavaScript frameworks, I love solving challenging problems and continually expanding my skill set.",
    "Apart from coding, I enjoy contributing to open-source projects, collaborating with diverse teams, and staying up-to-date with the latest industry trends. My goal is to create impactful digital experiences that help people and businesses grow.",
    "Let’s connect and build something amazing together!",
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-indigo-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Optional floating gradient highlights behind card */}
      <div className="absolute top-0 left-1/4 w-78 h-78 bg-gradient-to-tr from-indigo-500 via-pink-500 to-purple-500 rounded-full opacity-20 filter blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-400 rounded-full opacity-20 filter blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="container mx-auto  max-w-5xl flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.img
          src="phto.jpg"
          alt="Ayush Ghole"
          className="rounded-full w-84 h-84 object-cover shadow-2xl ring-4 ring-indigo-500/50"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100, duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Glassy Neon Card */}
        <motion.div
          className="bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-xl ring-1 ring-indigo-400/50 hover:shadow-indigo-500/60 hover:scale-105 transition-transform duration-500 flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}>
          <motion.h2
            className="text-4xl font-bold mb-4 text-indigo-400 drop-shadow-md relative inline-block"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}>
            About Me
            <span className="absolute left-0 -bottom-1 w-16 h-1 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 rounded-full animate-pulse-slow"></span>
          </motion.h2>

          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className={`text-lg mb-3 text-gray-200 ${
                i === 0
                  ? "font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 animate-text"
                  : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}>
              {i === 0 ? "Hi! I’m Ayush Ghole" : text}
            </motion.p>
          ))}

          {/* Call-to-Action Button */}
          <motion.a
            href="#contact"
            className="inline-block mt-4 px-6 py-3 font-semibold text-white bg-indigo-500 rounded-lg shadow-lg hover:shadow-indigo-400/60 hover:bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 transition-all duration-500"
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

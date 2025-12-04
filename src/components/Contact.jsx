// src/components/Contact.jsx

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-[#020617] via-[#020617] to-black text-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-20 left-1/3 w-72 h-72 bg-indigo-500 blur-[120px]" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-600 blur-[140px]" />
      </div>

      <div className="relative container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl px-6 py-10 md:px-10 md:py-12 shadow-[0_0_80px_rgba(79,70,229,0.45)] text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-300 via-sky-300 to-pink-300 text-transparent bg-clip-text">
            Let’s Connect
          </h2>

          <p className="mb-8 text-sm md:text-base text-indigo-100/80">
            Open to full-time roles, internships and impactful projects in web
            development and software engineering. If you think I’d be a good
            fit, let’s connect.
          </p>

          {/* Social icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:ayushghole@gmail.com"
              className="text-3xl text-indigo-300 hover:text-white transition-colors duration-200"
              aria-label="Email">
              <FaEnvelope />
            </a>

            <a
              href="https://www.linkedin.com/in/ayush-ghole-0b4391262/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-indigo-300 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn">
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/ayushghole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-indigo-300 hover:text-white transition-colors duration-200"
              aria-label="GitHub">
              <FaGithub />
            </a>
          </div>

          {/* Email button */}
          <a
            href="mailto:ayushghole@gmail.com"
            className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-indigo-900/40 hover:shadow-pink-700/50 transition-all duration-300">
            Email Me
          </a>

          <p className="mt-4 text-xs md:text-sm text-indigo-100/70">
            or write to{" "}
            <span className="underline decoration-indigo-300">
              ayushghole@gmail.com
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

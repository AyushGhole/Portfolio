// src/components/Hero.jsx
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import ThreeBackground from "./ThreeBackground"; // your 3D background

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center text-center px-6 py-8 pt-32 overflow-hidden bg-[#050507] text-white">
      {/* 3D background scene */}
      <ThreeBackground />

      {/* Soft cinematic grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Cinematic spotlight */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1100px] h-[1100px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_70%)] blur-[120px]" />
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute -top-60 -left-60 w-[480px] h-[480px] bg-fuchsia-600/20 blur-[150px] rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-60 -right-60 w-[520px] h-[520px] bg-indigo-500/20 blur-[160px] rounded-full animate-pulse-slow"></div>

      {/* Transparent futuristic frame */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative backdrop-blur-3xl bg-white/3 border border-white/10 px-14 py-16 rounded-[2.5rem] shadow-[0_0_150px_rgba(124,58,237,0.25)] max-w-5xl w-full hover:shadow-[0_0_200px_rgba(99,102,241,0.35)] transition-shadow duration-500">
        {/* Single-line name */}
        <h1 className="text-[3rem] md:text-[4.5rem] font-extrabold tracking-tight mb-8 leading-[1.1]">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#F472B6] bg-clip-text text-transparent">
            Ayush Ghole
          </span>
        </h1>
        {/* Typed subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-indigo-100/90 mb-14 font-normal leading-relaxed">
          <ReactTyped
            strings={[
              "Full Stack Developer • Software Engineering ",
              "Crafting Scalable Systems & High-Performance Interfaces",
              "Electronics & Computer Science Student",
              "Ex-Intern @ Systemic Altruism And @ SortWind Pvt Ltd.",
              "Specialized in MERN • Web Architecture • Cloud Deployments",
              "Engineering Clean UI • Stable Systems • Precise Experiences",
            ]}
            typeSpeed={58}
            backSpeed={36}
            loop
          />
        </motion.div>
        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.07, y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block px-12 py-3.5 font-semibold text-lg rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-800/40 hover:shadow-pink-600/50 transition-all duration-300 animate-glow">
          Contact Me
        </motion.a>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.07, y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block px-10 m-3 py-3.5 font-semibold text-lg rounded-full border-2 border-indigo-500 text-indigo-400 hover:text-white hover:shadow-pink-600/50 transition-all duration-300 animate-glow">
          View Projects
        </motion.a>
      </motion.div>

      {/* Bottom fading */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050507] to-transparent"></div>
    </section>
  );
}

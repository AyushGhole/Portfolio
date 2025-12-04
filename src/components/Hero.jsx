// src/components/Hero.jsx
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import ThreeBackground from "./ThreeBackground"; // your 3D background

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-6 py-8 pt-24 md:pt-28 overflow-hidden bg-[#050507] text-white flex items-center">
      {/* Soft cinematic grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none -z-20"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Cinematic spotlight */}
      <div className="absolute inset-0 flex items-center justify-center -z-30">
        <div className="w-[1100px] h-[1100px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_70%)] blur-[120px]" />
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute -top-60 -left-60 w-[480px] h-[480px] bg-fuchsia-600/20 blur-[150px] rounded-full animate-pulse-slow -z-30"></div>
      <div className="absolute -bottom-60 -right-60 w-[520px] h-[520px] bg-indigo-500/20 blur-[160px] rounded-full animate-pulse-slow -z-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight md:whitespace-nowrap">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#F472B6] bg-clip-text text-transparent">
              Ayush Ghole
            </span>
          </h1>
          <div className="text-sm md:text-xl text-indigo-100/90 max-w-xl mx-auto md:mx-0">
            <ReactTyped
              strings={[
                "Full Stack Developer • MERN • Web Architecture",
                "Building real-time, scalable products end-to-end",
                "Engineering clean UI and robust backend systems",
                "Electronic & Computer Science Engineer", 
                "Ex Intern @Systemic Altruism & @SortWind Pvt Ltd.",
              ]}
              typeSpeed={55}
              backSpeed={32}
              loop
            />
          </div>
        </motion.div>

        {/* 3D Earth on the right */}
        <div className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
          <div className="relative w-full h-full">
            <ThreeBackground />
          </div>
        </div>
      </div>

      {/* Bottom fading */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050507] to-transparent"></div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, link, tech }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        group block rounded-xl overflow-hidden
        bg-[#0d0d0d] border border-purple-900/20
        shadow-[0_0_20px_rgba(100,0,255,0.15)]
        hover:shadow-[0_0_35px_rgba(160,0,255,0.45)]
        transition-all duration-500
        w-full max-w-sm mx-auto
      ">
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Shine overlay */}
        <div
          className="
          absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-purple-500/10
          opacity-0 group-hover:opacity-100 transition-all duration-700
        "
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 leading-relaxed">
          {description}
        </p>
        <p className="text-xs text-purple-300/80 font-medium tracking-wide">
          {tech}
        </p>
      </div>
    </motion.a>
  );
}

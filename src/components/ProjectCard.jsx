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
      whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        group block rounded-2xl overflow-hidden
        bg-white/5 border border-white/10
        shadow-[0_0_40px_rgba(15,23,42,0.8)]
        hover:shadow-[0_0_70px_rgba(79,70,229,0.8)]
        backdrop-blur-2xl
        transition-all duration-500
        w-full max-w-sm mx-auto
      ">
      {/* IMAGE */}
      <div className="relative h-52 md:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

        {/* Gradient overlay */}
        <div
          className="
          absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
        "
        />

        {/* Shine sweep */}
        <div
          className="
          pointer-events-none absolute inset-0
          translate-x-[-120%] group-hover:translate-x-[120%]
          bg-gradient-to-tr from-transparent via-white/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-all duration-[900ms] ease-out
        "
        />

        {/* Corner label */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-black/60 text-indigo-200 border border-white/20">
          Featured
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 md:p-6 space-y-3">
        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-indigo-100/80 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] md:text-xs text-indigo-200/90 font-medium tracking-wide line-clamp-1">
            {tech}
          </span>
          <span className="text-[11px] md:text-xs text-sky-300 flex items-center gap-1">
            View Live
            <span className="inline-block translate-y-[1px]">↗</span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

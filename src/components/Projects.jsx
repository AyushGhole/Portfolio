// src/components/Projects.jsx

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  const projects = [
    {
      title: "Wonderlust",
      description:
        "A dynamic travel accommodation platform like Airbnb smooth booking experience.",
      image: "wonderlust.png",
      link: "https://wonderlust-in.onrender.com/listing",
      tech: "React, Tailwind CSS, MERN (MVC Architecture)",
    },
    {
      title: "MeetCall",
      description:
        "A modern video calling webapp designed for seamless, real-time communication with WebRTC.",
      image: "meetcall.png",
      link: "https://meetvideocall.onrender.com/",
      tech: "Socket.IO, WebRTC, MERN, Tailwind, MUI",
    },
    {
      title: "PayWay.in",
      description:
        "PayWay is a MERN stack payment app with OTP-secure transactions and a responsive dashboard.",
      image: "payway.png",
      link: "https://payway-r2pg.onrender.com/",
      tech: "React, MERN, Tailwind, MUI ,MVC Architecture",
    },
    {
      title: "Zerodha",
      description:
        "Stock investment platform with real-time market data and professional UI.",
      image: "zerodha.png",
      link: "https://zerodha-frontend-h6my.onrender.com/",
      tech: "React, MERN, Tailwind, MUI ,MVC Architecture",
    },
    {
      title: "ChatApp",
      description:
        "Real-time chat application using MERN & Socket.io with secure auth, instant messaging.",
      image: "chatapp.png",
      link: "https://sytemicaltruism.onrender.com/",
      tech: "Sockets, MERN, Tailwind CSS",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-gray-200 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute w-80 h-80 bg-purple-600 blur-[140px] top-0 -left-10" />
        <div className="absolute w-80 h-80 bg-blue-600 blur-[160px] bottom-0 right-0" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 text-transparent bg-clip-text">
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12 text-center text-sm md:text-base text-indigo-100/80">
          Production-grade work spanning real-time communication, payments, and
          scalable web platforms built with the MERN stack.
        </motion.p>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev text-gray-400 hover:text-white" />
        <div className="swiper-button-next text-gray-400 hover:text-white" />

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={35}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <ProjectCard {...project} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

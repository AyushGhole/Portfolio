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
        "A payment gateway like Razorpay + virtual banking with account system & transactions.",
      image: "payway.png",
      link: "https://payway-in.onrender.com/main",
      tech: "React, MERN, MVC Architecture",
    },
    {
      title: "Zerodha",
      description:
        "Stock investment platform with real-time market data and professional UI.",
      image: "zerodha.png",
      link: "https://zerodha-frontend-h6my.onrender.com/",
      tech: "MERN, Tailwind CSS",
    },
    {
      title: "ChatApp",
      description:
        "Real-time chat application using MERN & Socket.io with secure auth, instant messaging.",
      image: "chatapp.png",
      link: "https://sytemicaltruism.onrender.com/",
      tech: "Sockets, MERN, Tailwind",
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative py-24
        bg-gradient-to-b from-[#0A0A0F] via-[#0F0F17] to-[#0A0A0F]
        text-gray-200 overflow-hidden
      ">
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute w-72 h-72 bg-purple-600 blur-[130px] top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-blue-600 blur-[150px] bottom-10 right-10"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Projects
        </motion.h2>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev text-gray-300 hover:text-white"></div>
        <div className="swiper-button-next text-gray-300 hover:text-white"></div>

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
                transition={{ duration: 0.5, delay: index * 0.15 }}
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

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  Sparkles,
  Download,
  Code2,
  Server,
  Database,
} from "lucide-react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import type { Project, Contact } from "@/types/portfolio";
import CustomCursor from "./CustomCursor";
import ParticleBackground from "./ParticleBackground";
import FloatingGradient from "./FloatingGradient";
import SectionTitle from "./SectionTitle";

interface HomepageProps {
  projects: Project[];
  skills: string[];
  contact: Contact;
}

export default function Homepage({ projects, skills, contact }: HomepageProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden md:cursor-none selection:bg-cyan-400 selection:text-black">
      <CustomCursor />
      <ParticleBackground />
      <FloatingGradient />

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-[9999]"
      />

      <section className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 md:px-20 py-16 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 border border-zinc-800 px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-xl">
              <Sparkles size={16} />
              <span className="text-sm text-zinc-300">{contact.role}</span>
            </div>

            <h1 className="text-center lg:text-left text-5xl sm:text-6xl md:text-8xl font-black leading-none tracking-tight">
              Bharath
              <span className="block text-cyan-400">Vishnu</span>
            </h1>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-4 rounded-2xl bg-cyan-400 text-black font-semibold flex items-center gap-2"
              >
                View Projects <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/BBharathVishnu.pdf"
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-4 rounded-2xl border border-zinc-700 bg-zinc-900/50 backdrop-blur-xl flex items-center gap-2"
              >
                Resume <Download size={18} />
              </motion.a>

              <div className="flex items-center gap-3 sm:gap-5 pt-4 flex-wrap justify-center lg:justify-start">
                <motion.a
                  whileHover={{ y: -5 }}
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-3 sm:p-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex items-center gap-2 hover:border-cyan-400 transition-all"
                >
                  <FaGithub size={18} />
                  GitHub
                </motion.a>

                <motion.a
                  whileHover={{ y: -5 }}
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-3 sm:p-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex items-center gap-2 hover:border-cyan-400 transition-all"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </motion.a>

                <motion.a
                  whileHover={{ y: -5 }}
                  href={`mailto:${contact.email}`}
                  className="px-4 sm:px-5 py-3 sm:p-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex items-center gap-2 hover:border-cyan-400 transition-all"
                >
                  <Mail size={18} />
                  Email
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-cyan-400/20 blur-[120px] rounded-full" />

            <motion.div
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-[260px] h-[360px] sm:w-[300px] sm:h-[420px] md:w-[340px] md:h-[480px] rounded-[32px] md:rounded-[40px] overflow-hidden border border-zinc-800 shadow-2xl"
            >
              <img
                src="/Bharath_side.jpg"
                alt="Bharath Vishnu"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Code2, title: "Frontend", text: "React, Next.js, Tailwind" },
            {
              icon: Server,
              title: "Backend",
              text: "Spring Boot, Node.js, FastAPI",
            },
            {
              icon: Database,
              title: "Database",
              text: "PostgreSQL, Redis, Firebase",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="border border-zinc-800 rounded-[28px] md:rounded-[30px] p-6 md:p-8 bg-zinc-900/40 backdrop-blur-xl"
              >
                <Icon className="text-cyan-400 mb-5" size={32} />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 md:px-20 py-20 md:py-32">
        <SectionTitle
          title="About Me"
          subtitle="Building performant applications with immersive user experiences and scalable architecture."
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto border border-zinc-800 rounded-[30px] md:rounded-[40px] p-6 sm:p-10 md:p-16 bg-zinc-900/40 backdrop-blur-2xl"
        >
          <p className="text-zinc-300 text-base sm:text-lg text-center md:text-2xl leading-relaxed">
            B.Tech CSE 2025 Graduate
          </p>
          <p className="text-zinc-300 text-base sm:text-lg text-center md:text-2xl leading-relaxed">
            Building scalable software solutions—from modern user interfaces to
            resilient backend systems—for real-world business challenges.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 md:px-20 py-20 md:py-32">
        <SectionTitle title="Skills" subtitle="" />

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-5">
          {skills.map((skill, index) => (
            <motion.button
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border transition-all duration-300 bg-zinc-900/40 border-zinc-800 text-zinc-300 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 text-sm sm:text-base"
            >
              {skill}
            </motion.button>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="relative z-10 px-4 sm:px-6 md:px-20 py-20 md:py-32"
      >
        <SectionTitle title="Featured Projects" subtitle="" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-[28px] md:rounded-[35px] border border-zinc-800 bg-zinc-900/40 backdrop-blur-2xl p-6 md:p-8"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-400/10 to-purple-500/10" />

              <div className="relative z-10">
                <div className="h-44 sm:h-56 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 mb-8 overflow-hidden relative">
                  <motion.div
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),transparent_50%)]"
                  />
                </div>

                <div className="flex items-center justify-between mb-5 gap-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {project.title}
                  </h3>

                  {project.link ? (
                    <a href={project.link} target="_blank">
                      <ExternalLink className="text-zinc-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                    </a>
                  ) : (
                    <ExternalLink className="text-zinc-700 shrink-0" />
                  )}
                </div>

                <p className="text-zinc-400 leading-relaxed text-base sm:text-lg mb-8">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 sm:px-4 py-2 rounded-full bg-black/40 border border-zinc-700 text-xs sm:text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 md:px-20 py-20 md:py-32">
        <SectionTitle title="Experience" subtitle="" />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-zinc-800 rounded-[28px] md:rounded-[35px] p-6 sm:p-10 bg-zinc-900/40 backdrop-blur-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Tata Consultancy Services
                </h3>
                <p className="text-cyan-400 text-lg uppercase">
                  System Engineer
                </p>
              </div>

              <span className="text-zinc-500">2025 - Present</span>
            </div>

            <ul className="space-y-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
              <li>
                • Developed reusable React.js components and integrated them
                with backend APIs thus handling asynchronous data rendering.
              </li>
              <li>
                • Implemented REStful API endpoints for backend services using
                SpringBoot and FastAPI
              </li>
              <li>
                • Designed scalable ingestion and classification systems for
                enterprise Agentic AI automation workflows.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 md:px-20 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center border border-zinc-800 rounded-[30px] md:rounded-[40px] p-6 sm:p-10 md:p-16 bg-zinc-900/40 backdrop-blur-2xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8">
            Let's Build
            <span className="block text-cyan-400">Something Great</span>
          </h2>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-cyan-400 text-black font-semibold text-lg w-full sm:w-auto"
          >
            Get In Touch <ArrowRight />
          </motion.a>
        </motion.div>
      </section>

      <footer className="relative z-10 py-10 px-4 text-center text-zinc-500 border-t border-zinc-900 text-sm sm:text-base">
        © 2026 Bharath Vishnu.
      </footer>
    </main>
  );
}
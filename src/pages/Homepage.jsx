import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import Bharathimage from "../assets/Bharath_side.jpg";
const projects = [
  {
    title: 'Distributed Log Ingestion & Detection System',
    desc: 'High-throughput distributed logging platform with anomaly detection, analytics, Spring Boot backend and React dashboard.',
    tech: ['Spring Boot', 'PostgreSQL', 'React', 'Python'],
  },
  {
    title: 'Inventory Management System',
    desc: 'Enterprise inventory system with Redis caching, validation, analytics and Dockerized deployment.',
    tech: ['Java', 'Redis', 'Docker', 'React'],
  },
  {
    title: 'Task Queue System',
    desc: 'Asynchronous task processing engine using Node.js and Redis with scalable worker architecture.',
    tech: ['Node.js', 'Redis', 'React'],
  },
  {
    title: 'Underwater Image Enhancement GAN',
    desc: 'GAN-based underwater enhancement model improving clarity and image restoration accuracy.',
    tech: ['TensorFlow', 'Python', 'GAN'],
  },
];

const skills = [
  'React.js',
  'Next.js',
  'Spring Boot',
  'Node.js',
  'PostgreSQL',
  'Redis',
  'Docker',
  'TensorFlow',
  'Java',
  'Python',
  'FastAPI',
  'Firebase',
];

function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(45)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 1.5,
          }}
          animate={{
            y: [null, -1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
          style={{
            width: Math.random() * 5 + 2,
            height: Math.random() * 5 + 2,
          }}
        />
      ))}
    </div>
  );
}

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-10 h-10 rounded-full border border-cyan-400 bg-cyan-400/10 backdrop-blur-xl pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
    />
  );
}

function FloatingGradient() {
  return (
    <>
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full z-0" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full z-0" />
    </>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        {title}
      </motion.h2>
      <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

export default function Homepage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [activeSkill, setActiveSkill] = useState('React.js');

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden cursor-none selection:bg-cyan-400 selection:text-black">
      <CustomCursor />
      <ParticleBackground />
      <FloatingGradient />

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-[9999]"
      />

      <section className="relative z-10 min-h-screen flex items-center px-6 md:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 border border-zinc-800 px-4 py-2 rounded-full bg-zinc-900/40 backdrop-blur-xl">
              <Sparkles size={16} />
              <span className="text-sm text-zinc-300">System Engineer @ TCS</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
              Bharath
              <span className="block text-cyan-400">Vishnu</span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Full Stack Engineer crafting immersive digital experiences with React,
              Spring Boot and modern system architecture. Focused on solving problems along and building scalable solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-7 py-4 rounded-2xl bg-cyan-400 text-black font-semibold flex items-center gap-2"
              >
                View Projects <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:bharathvb1204@gmail.com"
                className="px-7 py-4 rounded-2xl border border-zinc-700 bg-zinc-900/40 backdrop-blur-xl"
              >
                Contact Me
              </motion.a>
            </div>

            <div className="flex items-center gap-5 pt-4">
              <motion.a whileHover={{ y: -5 }} href="https://github.com/BharathVishnu" className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                Github
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://linkedin.com/in/b-bharath-vishnu" className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                Linkedin
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="mailto:bharathvb1204@gmail.com" className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                Mail
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-cyan-400/20 blur-[120px] rounded-full" />

            <motion.div
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative w-[340px] h-[480px] rounded-[40px] overflow-hidden border border-zinc-800 shadow-2xl"
            >
              <img
                src={Bharathimage}
                alt="Bharath"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-20 py-32">
        <SectionTitle
          title="About Me"
          subtitle="Building performant applications with immersive user experiences and scalable architecture."
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto border border-zinc-800 rounded-[40px] p-10 md:p-16 bg-zinc-900/40 backdrop-blur-2xl"
        >
          <p className="text-zinc-300 text-lg md:text-2xl leading-relaxed">
            I am a passionate full stack engineer currently working at Tata Consultancy Services.
            My expertise lies in building modern frontend interfaces with React.js,Next.js and scalable backend systems using Spring Boot,FastAPI, Node.js.
            I enjoy creating visually immersive interfaces that combine engineering precision with premium design aesthetics.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 px-6 md:px-20 py-32">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I use to build scalable and immersive products."
        />

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => (
            <motion.button
              key={skill}
              onMouseEnter={() => setActiveSkill(skill)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`px-6 py-4 rounded-2xl border transition-all duration-300 ${
                activeSkill === skill
                  ? 'bg-cyan-400 text-black border-cyan-400'
                  : 'bg-zinc-900/40 border-zinc-800 text-zinc-300'
              }`}
            >
              {skill}
            </motion.button>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 px-6 md:px-20 py-32">
        <SectionTitle
          title="Featured Projects"
          subtitle="A collection of scalable systems and immersive interfaces crafted with modern technologies."
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, rotateX: 5, rotateY: 5 }}
              className="group relative overflow-hidden rounded-[35px] border border-zinc-800 bg-zinc-900/40 backdrop-blur-2xl p-8"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-400/10 to-purple-500/10" />

              <div className="relative z-10">
                <div className="h-64 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 mb-8 overflow-hidden relative">
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),transparent_50%)]"
                  />
                </div>

                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <ExternalLink className="text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-zinc-400 leading-relaxed text-lg mb-8">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-black/40 border border-zinc-700 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-20 py-32">
        <SectionTitle
          title="Experience"
          subtitle="Professional experience building scalable enterprise systems."
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border border-zinc-800 rounded-[35px] p-10 bg-zinc-900/40 backdrop-blur-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h3 className="text-3xl font-bold">Tata Consultancy Services</h3>
                <p className="text-cyan-400 text-lg">System Engineer</p>
              </div>

              <span className="text-zinc-500">2025 - Present</span>
            </div>

            <ul className="space-y-5 text-zinc-400 text-lg leading-relaxed">
              <li>• Developed reusable React.js frontend components for enterprise banking systems.</li>
              <li>• Built high-throughput Spring Boot backend services and REST APIs.</li>
              <li>• Designed scalable ingestion and classification systems for enterprise workflows.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-20 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto text-center border border-zinc-800 rounded-[40px] p-16 bg-zinc-900/40 backdrop-blur-2xl"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Let's Build
            <span className="block text-cyan-400">Something Great</span>
          </h2>

          <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-10">
            Open to building modern full stack applications, immersive frontend experiences and scalable backend systems.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:bharathvb1204@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-cyan-400 text-black font-semibold text-lg"
          >
            Get In Touch <ArrowRight />
          </motion.a>
        </motion.div>
      </section>

      <footer className="relative z-10 py-10 text-center text-zinc-500 border-t border-zinc-900">
        © 2026 Bharath Vishnu
      </footer>
    </div>
  );
}

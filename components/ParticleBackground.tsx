import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
  size: number;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 1.5,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      size: Math.random() * 5 + 2,
    }));

    setParticles(generated);
  }, []);
    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/10"
          initial={{ x: p.x, y: p.y, scale: p.scale }}
          animate={{ y: [p.y, -1000], opacity: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
}
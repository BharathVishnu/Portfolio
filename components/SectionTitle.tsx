import { motion, useScroll, useTransform } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>

      <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}
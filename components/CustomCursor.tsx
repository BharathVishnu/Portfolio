import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed w-10 h-10 rounded-full border border-cyan-400 bg-cyan-400/10 backdrop-blur-xl pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
    />
  );
}
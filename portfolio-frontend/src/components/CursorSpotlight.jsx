import React, { useEffect, useRef } from 'react';

// Halo lumineux qui suit la souris (desktop uniquement)
export default function CursorSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return;

    let frame = null;
    const handleMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.background =
            `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(0, 212, 255, 0.07), transparent 80%)`;
        }
        frame = null;
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 transition-[background] duration-300" />;
}

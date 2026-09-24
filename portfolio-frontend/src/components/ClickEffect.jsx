import React, { useEffect, useState } from 'react';

// Onde lumineuse à l'endroit de chaque clic
export default function ClickEffect() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let id = 0;
    const handleClick = (e) => {
      const ripple = { id: id++, x: e.clientX, y: e.clientY };
      setRipples((r) => [...r, ripple]);
      setTimeout(() => setRipples((r) => r.filter((item) => item.id !== ripple.id)), 700);
    };
    window.addEventListener('pointerdown', handleClick);
    return () => window.removeEventListener('pointerdown', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden="true">
      {ripples.map((r) => (
        <span key={r.id} className="click-ripple" style={{ left: r.x, top: r.y }} />
      ))}
    </div>
  );
}

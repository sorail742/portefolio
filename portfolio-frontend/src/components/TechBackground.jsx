import React, { useEffect, useRef } from 'react';

// Fond animé : constellation de particules reliées qui réagit à la souris,
// posée sur des halos de couleur qui dérivent lentement.
const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    const LINK_DISTANCE = 140;
    const MOUSE_RADIUS = 180;
    let particles = [];
    let width = 0;
    let height = 0;
    let animationFrameId;

    const createParticles = () => {
      // Densité adaptée à la taille de l'écran (moins de particules sur mobile)
      const count = Math.min(110, Math.floor((width * height) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        green: Math.random() < 0.2,
      }));
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        // Légère répulsion autour de la souris
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * 0.6;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.green ? 'rgba(34, 197, 94, 0.8)' : 'rgba(0, 212, 255, 0.8)';
        ctx.fill();
      }

      // Liens entre particules proches
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.18 * (1 - dist / LINK_DISTANCE)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // Liens vers la souris
        const p = particles[i];
        const mDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (mDist < MOUSE_RADIUS) {
          ctx.strokeStyle = `rgba(34, 197, 94, ${0.35 * (1 - mDist / MOUSE_RADIUS)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      if (!reduceMotion && !document.hidden) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    // Met l'animation en pause quand l'onglet n'est pas visible
    const handleVisibility = () => {
      cancelAnimationFrame(animationFrameId);
      if (!document.hidden) draw();
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibility);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#050b14] overflow-hidden" aria-hidden="true">
      {/* Halos de couleur qui dérivent lentement */}
      <div className="aurora-blob absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] bg-cyan-500/[0.12] rounded-full blur-[120px]" />
      <div className="aurora-blob aurora-delay-1 absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/[0.10] rounded-full blur-[120px]" />
      <div className="aurora-blob aurora-delay-2 absolute top-[40%] left-[45%] w-[30vw] h-[30vw] bg-emerald-500/[0.06] rounded-full blur-[100px]" />
      {/* Grille discrète */}
      <div className="absolute inset-0 bg-pattern-grid opacity-60" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
      {/* Vignette pour garder le texte lisible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(1,3,10,0.7)_100%)]" />
    </div>
  );
};

export default TechBackground;

import React, { useEffect, useRef } from 'react';

const FluidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Create multiple overlapping glowing orbs
      const drawOrb = (xOffset, yOffset, size, color, speedOffset) => {
        const x = centerX + Math.sin(time + speedOffset) * xOffset;
        const y = centerY + Math.cos(time + speedOffset) * yOffset;
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      };

      ctx.globalCompositeOperation = 'screen';
      
      // Giant glowing orbs that drift slowly
      drawOrb(400, 300, 600, 'rgba(0, 212, 255, 0.15)', 0);      // Cyan
      drawOrb(200, 400, 700, 'rgba(34, 197, 94, 0.12)', 2);      // Green
      drawOrb(-300, -200, 500, 'rgba(56, 189, 248, 0.1)', 4);    // Light Blue
      drawOrb(-100, 300, 800, 'rgba(16, 185, 129, 0.1)', 1);     // Emerald

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#0a0f1e] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default FluidBackground;

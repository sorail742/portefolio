import React, { useEffect, useRef } from 'react';

const TechBackground = () => {
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

    const drawHUD = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      const centerX = canvas.width * 0.15; // Set circles to the left
      const centerY = canvas.height / 2;

      // Base styles
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.6)';
      ctx.lineWidth = 1;

      // 1. Draw spinning concentric circles (HUD)
      const drawCircle = (radius, dashArray, speed, color, width = 1) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(time * speed);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        if (dashArray) ctx.setLineDash(dashArray);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.restore();
      };

      // Inner circles
      drawCircle(80, [5, 15], 2, 'rgba(0, 212, 255, 0.9)', 2);
      drawCircle(120, [40, 20, 10, 20], -1, 'rgba(34, 197, 94, 0.8)', 1.5);
      drawCircle(180, null, 0.5, 'rgba(0, 212, 255, 0.3)', 1);
      drawCircle(220, [2, 6], 1.5, 'rgba(0, 212, 255, 0.7)', 3);
      drawCircle(300, [100, 50, 20, 50], -0.8, 'rgba(34, 197, 94, 0.5)', 1);
      drawCircle(450, [1, 10], 0.3, 'rgba(0, 212, 255, 0.2)', 10);

      // 2. Draw Circuit lines extending to the right
      ctx.setLineDash([]);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.4)';

      const drawCircuitLine = (startY, lengths, staticDot = false) => {
        ctx.beginPath();
        let currentX = centerX + 180;
        let currentY = centerY + startY;

        ctx.moveTo(currentX, currentY);

        lengths.forEach((seg, i) => {
          if (i % 2 === 0) {
            currentX += seg;
          } else {
            currentY += seg;
          }
          ctx.lineTo(currentX, currentY);
        });

        ctx.stroke();

        // Draw node dot at the end
        if (staticDot) {
          ctx.beginPath();
          ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(34, 197, 94, 0.8)'; // green dots
          ctx.fill();
        }

        // Draw animated data packet
        const totalLength = lengths.reduce((a, b) => Math.abs(a) + Math.abs(b), 0);
        const progress = (time * 100) % totalLength;
        // Simple representation of data moving along the line for visual flavor
      };

      // Draw several intersecting circuit lines
      drawCircuitLine(-100, [150, -50, 200, 0, 100], true);
      drawCircuitLine(50, [200, 80, 150, -20, 300], true);
      drawCircuitLine(-200, [100, 100, 400], true);
      drawCircuitLine(150, [300, -100, 250], true);
      drawCircuitLine(250, [100, 50, 150, -100, 200], true);
      drawCircuitLine(0, [500, 0, 200], true);

      // Hexagon grids subtly in the background
      ctx.globalAlpha = 0.05;
      for (let i = 0; i < canvas.width; i += 100) {
        for (let j = 0; j < canvas.height; j += 100) {
          // just subtle grid
          ctx.strokeRect(i, j, 100, 100);
        }
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(drawHUD);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawHUD();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-to-br from-[#0a2540] via-[#0a1526] to-[#030816] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60"
      />
      {/* Cyan vibrant glow at the top left to match the HUD rings, and bottom right for depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default TechBackground;

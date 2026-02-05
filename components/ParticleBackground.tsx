
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let time = 0;
    let animationFrameId: number;

    // Gradient Mesh Logic
    const draw = () => {
        ctx.clearRect(0, 0, width, height);
        
        // Background Base
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#f8fafc'); // Slate 50
        gradient.addColorStop(1, '#e2e8f0'); // Slate 200
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = 'rgba(37, 99, 235, 0.08)'; // Very faint blue
        ctx.lineWidth = 1;

        // Draw flowing lines (Topography)
        const lines = 20;
        const step = height / lines;

        for(let i = 0; i < lines; i++) {
            ctx.beginPath();
            for(let x = 0; x <= width; x += 50) {
                // Sine wave calculation
                const y = (i * step) + 
                          Math.sin((x * 0.002) + (time * 0.002) + (i * 0.5)) * 50 +
                          Math.cos((x * 0.003) + (time * 0.001)) * 30;
                
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        time++;
        
        // OPTIMIZATION: Only loop on Desktop (> 768px)
        // On Mobile, we draw once (immobilized) to save battery/CPU
        if (width > 768) {
            animationFrameId = requestAnimationFrame(draw);
        }
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Redraw once on resize to fit new screen
      cancelAnimationFrame(animationFrameId);
      draw(); 
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 w-full h-full pointer-events-none" />;
};

export default ParticleBackground;

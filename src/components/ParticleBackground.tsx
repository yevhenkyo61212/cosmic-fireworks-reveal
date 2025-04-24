
import React, { useEffect, useRef } from 'react';

class AuroraParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  colorIdx: number;
  targetColorIdx: number;
  colorTransitionSpeed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 4.5; // Increased vertical movement
    this.size = Math.random() * 120 + 50; // Much larger particles
    this.alpha = Math.random() * 0.4 + 0.1; // Lower opacity
    
    // Aurora colors
    const auroraColors = [
      'rgba(156, 39, 176, 0.7)', // purple
      'rgba(233, 30, 99, 0.7)',  // pink
      'rgba(63, 81, 181, 0.7)',  // dark blue
      'rgba(0, 188, 212, 0.7)',  // cyan
      'rgba(76, 175, 80, 0.7)',  // green
    ];
    
    this.colorIdx = Math.floor(Math.random() * auroraColors.length);
    this.targetColorIdx = this.colorIdx;
    this.colorTransitionSpeed = 0.01;
    this.color = auroraColors[this.colorIdx];
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    
    // Create gradient for each particle
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size
    );
    
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.globalAlpha = this.alpha;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;
    
    // Slow wave-like motion
    this.vx += (Math.random() - 0.5) * 0.1;
    this.vy += (Math.random() - 0.5) * 0.1;
    
    // Constrain velocities
    this.vx = Math.max(-2, Math.min(2, this.vx));
    this.vy = Math.max(-4, Math.min(4, this.vy));
    
    // Slowly transition to new colors
    const auroraColors = [
      'rgba(156, 39, 176, 0.7)', // purple
      'rgba(233, 30, 99, 0.7)',  // pink
      'rgba(63, 81, 181, 0.7)',  // dark blue
      'rgba(0, 188, 212, 0.7)',  // cyan
      'rgba(76, 175, 80, 0.7)',  // green
    ];
    
    // Occasionally change target color
    if (Math.random() < 0.01) {
      this.targetColorIdx = Math.floor(Math.random() * auroraColors.length);
    }

    // Transition to the target color
    this.color = auroraColors[this.colorIdx];
    
    // Ensure particles stay within bounds with soft edges
    if (this.x < -this.size) this.x = width + this.size;
    if (this.x > width + this.size) this.x = -this.size;
    if (this.y < -this.size) this.y = height + this.size;
    if (this.y > height + this.size) this.y = -this.size;
  }
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: AuroraParticle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0; // Clear on resize
      createAuroraParticles();
    };

    const createAuroraParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000); // Fewer but larger particles
      for (let i = 0; i < particleCount; i++) {
        particles.push(
          new AuroraParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
    };

    const animate = () => {
      // Semi-transparent clear for trailing effect
      ctx.fillStyle = 'rgba(18, 14, 30, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, #120e1e 0%, #1f1133 100%)' }}
    />
  );
};

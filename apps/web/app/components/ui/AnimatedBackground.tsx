"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  // Initialize particles
  useEffect(() => {
    const checkMobile = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 0;
      setIsMobile(w < 768);
      setWindowWidth(w);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Create particles
    const particleCount = isMobile ? 30 : 60;
    const newParticles: Particle[] = [];
    
    const colors = [
      'rgba(17, 27, 115, 0.6)', // primary blue
      'rgba(255, 185, 21, 0.6)', // accent gold
      'rgba(59, 130, 246, 0.4)', // blue
      'rgba(245, 158, 11, 0.4)', // amber
    ];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        size: Math.random() * (isMobile ? 2 : 3) + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    
    setParticles(newParticles);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const h = typeof window !== 'undefined' ? window.innerHeight : 800;
      canvas.width = w;
      canvas.height = h;
      setWindowWidth(w);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(17, 27, 115, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((particle, index) => {
        // Update particle position
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;

        // Bounce off edges
        if (newX < 0 || newX > canvas.width) {
          particle.speedX *= -1;
          newX = Math.max(0, Math.min(canvas.width, newX));
        }
        if (newY < 0 || newY > canvas.height) {
          particle.speedY *= -1;
          newY = Math.max(0, Math.min(canvas.height, newY));
        }

        // Mouse interaction
        const dx = mousePosition.x - newX;
        const dy = mousePosition.y - newY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 100 * 0.5;
          newX -= Math.cos(angle) * force;
          newY -= Math.sin(angle) * force;
        }

        // Update particle
        setParticles(prev => {
          const updated = [...prev];
          updated[index] = { ...particle, x: newX, y: newY };
          return updated;
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(newX, newY, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, mousePosition]);

  return (
    <>
      {/* Canvas for particle system */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
      />
      {/* Subtle grid pattern overlay (keep) */}
      <div
        className="fixed inset-0 -z-10 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #111B73 1px, transparent 1px),
                           linear-gradient(to bottom, #111B73 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </>
  );
}
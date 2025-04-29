import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions to match window
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle settings
    const particlesArray = [];
    const numberOfParticles = 120;
    // Silver/Gray themed color palette
    const colors = ['#D1D5DB', '#9CA3AF', '#6B7280', '#4B5563', '#FFFFFF'];

    // Create particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.8 + 0.3; // Size between 0.3 and 2.1
        this.speedX = Math.random() * 0.4 - 0.2; // -0.2 to 0.2
        this.speedY = Math.random() * 0.4 - 0.2; // -0.2 to 0.2
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.4 + 0.1; // 0.1 to 0.5
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const init = () => {
      particlesArray.length = 0; // Clear array
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    init();

    // Draw lines between particles
    const connect = () => {
      const maxDistance = 130;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = '#9CA3AF'; // Silver-400
            ctx.globalAlpha = opacity * 0.15; // Make lines subtle
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Subtle pulse effect for particles
    let pulseAngle = 0;
    const updatePulse = () => {
      pulseAngle += 0.02;
      const pulse = Math.sin(pulseAngle) * 0.1 + 0.9; // 0.8 to 1.0
      
      particlesArray.forEach(particle => {
        particle.size *= pulse;
        particle.draw();
        particle.size /= pulse;
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Slightly fade previous frame
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      
      connect();
      updatePulse();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle mouse interactions
    const mouse = {
      x: undefined,
      y: undefined,
      radius: 150
    };

    function handleMouseMove(event) {
      mouse.x = event.x;
      mouse.y = event.y;
      
      // Create ripple effect
      const ripple = new Particle();
      ripple.x = mouse.x;
      ripple.y = mouse.y;
      ripple.size = 1;
      ripple.opacity = 0.3;
      ripple.color = '#FFFFFF';
      particlesArray.push(ripple);
      
      // Limit particle count
      if (particlesArray.length > numberOfParticles + 20) {
        particlesArray.splice(0, particlesArray.length - numberOfParticles);
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ 
        background: 'radial-gradient(circle, rgba(17,24,39,1) 0%, rgba(0,0,0,1) 100%)',
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;
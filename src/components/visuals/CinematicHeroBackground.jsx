import React, { useEffect, useRef } from 'react';

export default function CinematicHeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let prefersReducedMotion = false;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      prefersReducedMotion = true;
    }

    let width = 0;
    let height = 0;
    let dpr = 1;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // ==========================================
    // 1. FLOOR NEON RING & TRAVELING COMETS
    // ==========================================
    const comets = [
      { angle: 0.2, speed: 0.009, length: 0.45, color: '#FF7957', size: 4.5 },
      { angle: 2.1, speed: 0.007, length: 0.38, color: '#FF6248', size: 3.8 },
      { angle: 4.3, speed: 0.011, length: 0.52, color: '#FFA07A', size: 5.0 },
    ];

    // ==========================================
    // 2. DIAGONAL ARCHITECTURAL LASER BEAMS
    // ==========================================
    const laserTracks = [
      { startX: -0.05, startY: 0.05, angle: Math.PI * 0.20, length: 0.75, pulse: 0.1, speed: 0.005, width: 2.0 },
      { startX: 0.12, startY: -0.02, angle: Math.PI * 0.22, length: 0.85, pulse: 0.5, speed: 0.004, width: 2.5 },
      { startX: 0.28, startY: -0.05, angle: Math.PI * 0.24, length: 0.70, pulse: 0.8, speed: 0.006, width: 1.8 },
      { startX: 0.72, startY: -0.04, angle: Math.PI * 0.76, length: 0.75, pulse: 0.3, speed: 0.005, width: 2.2 },
      { startX: 0.88, startY: 0.02, angle: Math.PI * 0.74, length: 0.80, pulse: 0.7, speed: 0.004, width: 2.5 },
      { startX: 1.05, startY: 0.08, angle: Math.PI * 0.72, length: 0.85, pulse: 0.9, speed: 0.0045, width: 2.0 },
    ];

    // ==========================================
    // 3. PERSPECTIVE GRID LINES IN CEILING/WALLS
    // ==========================================
    const gridAnglesLeft = [
      Math.PI * 0.12,
      Math.PI * 0.16,
      Math.PI * 0.21,
      Math.PI * 0.27,
      Math.PI * 0.33,
    ];
    const gridAnglesRight = [
      Math.PI * 0.67,
      Math.PI * 0.73,
      Math.PI * 0.79,
      Math.PI * 0.84,
      Math.PI * 0.88,
    ];

    // ==========================================
    // 4. FLOATING AMBIENT EMBERS / SPARKS
    // ==========================================
    const particleCount = 55;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * 1.2 - 0.1,
        y: 0.55 + Math.random() * 0.42,
        vx: (Math.random() - 0.5) * 0.0004,
        vy: -0.0005 - Math.random() * 0.001,
        size: 1.0 + Math.random() * 2.2,
        alpha: 0.2 + Math.random() * 0.7,
        maxLife: 180 + Math.random() * 250,
        life: Math.random() * 250,
        swaySpeed: 0.015 + Math.random() * 0.025,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    // ==========================================
    // MAIN RENDER LOOP
    // ==========================================
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Core Coordinates
      const floorHorizonY = height * 0.60;
      const vanishingX = width * 0.56;
      const vanishingY = height * 0.46;

      const ringCenterX = width * 0.52;
      const ringCenterY = height * 0.78;
      const ringRadiusX = width * 0.58;
      const ringRadiusY = height * 0.22;

      // ----------------------------------------------------
      // A. WET SPECULAR FLOOR GRADIENT
      // ----------------------------------------------------
      const floorGrad = ctx.createLinearGradient(0, floorHorizonY, 0, height);
      floorGrad.addColorStop(0, 'rgba(12, 18, 28, 0.95)');
      floorGrad.addColorStop(0.25, 'rgba(7, 12, 19, 0.98)');
      floorGrad.addColorStop(0.65, 'rgba(4, 7, 12, 0.99)');
      floorGrad.addColorStop(1, 'rgba(2, 4, 7, 1.0)');
      ctx.fillStyle = floorGrad;
      ctx.fillRect(0, floorHorizonY, width, height - floorHorizonY);

      // Floor Specular Orange Reflection Pools
      const floorSheen = ctx.createRadialGradient(
        ringCenterX, ringCenterY, 30,
        ringCenterX, ringCenterY, ringRadiusX * 0.95
      );
      floorSheen.addColorStop(0, 'rgba(255, 98, 72, 0.22)');
      floorSheen.addColorStop(0.3, 'rgba(255, 121, 87, 0.12)');
      floorSheen.addColorStop(0.65, 'rgba(255, 98, 72, 0.04)');
      floorSheen.addColorStop(1, 'transparent');
      ctx.fillStyle = floorSheen;
      ctx.beginPath();
      ctx.ellipse(ringCenterX, ringCenterY, ringRadiusX, ringRadiusY * 1.5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Horizontal Floor Sheen Grid Lines (wet glossy perspective)
      for (let i = 1; i <= 8; i++) {
        const lineY = floorHorizonY + Math.pow(i / 8, 1.7) * (height - floorHorizonY);
        const lineAlpha = (i / 8) * 0.14;
        ctx.strokeStyle = `rgba(255, 121, 87, ${lineAlpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(width, lineY);
        ctx.stroke();
      }

      // Vertical Floor Perspective Light Reflections (receding streaks)
      for (let i = -6; i <= 6; i++) {
        const bottomX = ringCenterX + (i / 6) * (width * 0.65);
        ctx.strokeStyle = 'rgba(255, 98, 72, 0.07)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(vanishingX, floorHorizonY);
        ctx.lineTo(bottomX, height);
        ctx.stroke();
      }

      // ----------------------------------------------------
      // B. UPPER ARCHITECTURAL PERSPECTIVE GRID LINES
      // ----------------------------------------------------
      ctx.save();
      ctx.lineWidth = 1;
      gridAnglesLeft.forEach((ang) => {
        const rayLen = Math.hypot(width, height) * 0.8;
        const endX = vanishingX - Math.cos(ang) * rayLen;
        const endY = vanishingY - Math.sin(ang) * rayLen;
        ctx.strokeStyle = 'rgba(255, 98, 72, 0.18)';
        ctx.beginPath();
        ctx.moveTo(vanishingX, vanishingY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });

      gridAnglesRight.forEach((ang) => {
        const rayLen = Math.hypot(width, height) * 0.8;
        const endX = vanishingX + Math.cos(ang) * rayLen;
        const endY = vanishingY - Math.sin(ang) * rayLen;
        ctx.strokeStyle = 'rgba(255, 98, 72, 0.18)';
        ctx.beginPath();
        ctx.moveTo(vanishingX, vanishingY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });
      ctx.restore();

      // ----------------------------------------------------
      // C. DIAGONAL LASER BEAMS & STREAMING PHOTONS
      // ----------------------------------------------------
      laserTracks.forEach((track) => {
        if (!prefersReducedMotion) {
          track.pulse = (track.pulse + track.speed) % 1;
        }

        const startX = track.startX * width;
        const startY = track.startY * height;
        const rayLen = track.length * Math.hypot(width, height);
        const endX = startX + Math.cos(track.angle) * rayLen;
        const endY = startY + Math.sin(track.angle) * rayLen;

        // Faint laser track line
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 98, 72, 0.18)';
        ctx.lineWidth = track.width;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Traveling laser photon pulse
        const pulseProgress = track.pulse;
        const pulseHeadX = startX + Math.cos(track.angle) * (rayLen * pulseProgress);
        const pulseHeadY = startY + Math.sin(track.angle) * (rayLen * pulseProgress);
        const pulseTailLen = 120;
        const pulseTailX = pulseHeadX - Math.cos(track.angle) * pulseTailLen;
        const pulseTailY = pulseHeadY - Math.sin(track.angle) * pulseTailLen;

        const pulseGrad = ctx.createLinearGradient(pulseTailX, pulseTailY, pulseHeadX, pulseHeadY);
        pulseGrad.addColorStop(0, 'transparent');
        pulseGrad.addColorStop(0.6, 'rgba(255, 98, 72, 0.7)');
        pulseGrad.addColorStop(1, 'rgba(255, 245, 230, 0.98)');

        ctx.strokeStyle = pulseGrad;
        ctx.lineWidth = track.width * 2.2;
        ctx.shadowColor = '#FF6248';
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.moveTo(pulseTailX, pulseTailY);
        ctx.lineTo(pulseHeadX, pulseHeadY);
        ctx.stroke();
        ctx.restore();
      });

      // ----------------------------------------------------
      // D. HORIZON LASER LINE & CENTRAL FLARE
      // ----------------------------------------------------
      ctx.save();
      const horizonGrad = ctx.createLinearGradient(0, 0, width, 0);
      horizonGrad.addColorStop(0, 'transparent');
      horizonGrad.addColorStop(0.2, 'rgba(255, 98, 72, 0.25)');
      horizonGrad.addColorStop(0.5, 'rgba(255, 180, 140, 0.95)');
      horizonGrad.addColorStop(0.8, 'rgba(255, 98, 72, 0.3)');
      horizonGrad.addColorStop(1, 'transparent');

      ctx.strokeStyle = horizonGrad;
      ctx.lineWidth = 2.2;
      ctx.shadowColor = '#FF6248';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.moveTo(0, floorHorizonY);
      ctx.lineTo(width, floorHorizonY);
      ctx.stroke();

      // Horizon Lens Flare Core at Vanishing Point
      const flareGrad = ctx.createRadialGradient(vanishingX, floorHorizonY, 0, vanishingX, floorHorizonY, 180);
      flareGrad.addColorStop(0, 'rgba(255, 220, 190, 0.85)');
      flareGrad.addColorStop(0.3, 'rgba(255, 98, 72, 0.4)');
      flareGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = flareGrad;
      ctx.beginPath();
      ctx.arc(vanishingX, floorHorizonY, 180, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // ----------------------------------------------------
      // E. THE GIANT GLOWING FLOOR NEON RING (IMAGE 02 TARGET)
      // ----------------------------------------------------
      ctx.save();
      // Pass 1: Broad Diffuse Ambient Bloom
      ctx.beginPath();
      ctx.ellipse(ringCenterX, ringCenterY, ringRadiusX, ringRadiusY, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 98, 72, 0.25)';
      ctx.lineWidth = 32;
      ctx.shadowColor = '#FF6248';
      ctx.shadowBlur = 55;
      ctx.stroke();

      // Pass 2: Intense Neon Mid-Ring
      ctx.beginPath();
      ctx.ellipse(ringCenterX, ringCenterY, ringRadiusX, ringRadiusY, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 121, 87, 0.85)';
      ctx.lineWidth = 5.5;
      ctx.shadowColor = '#FF7957';
      ctx.shadowBlur = 25;
      ctx.stroke();

      // Pass 3: Blazing Laser Core
      ctx.beginPath();
      ctx.ellipse(ringCenterX, ringCenterY, ringRadiusX, ringRadiusY, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 245, 230, 1.0)';
      ctx.lineWidth = 2.0;
      ctx.shadowColor = '#FFFFFF';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();

      // ----------------------------------------------------
      // F. TRAVELING COMETS ALONG THE FLOOR RING
      // ----------------------------------------------------
      if (!prefersReducedMotion) {
        comets.forEach((comet) => {
          comet.angle = (comet.angle + comet.speed) % (Math.PI * 2);

          const segments = 22;
          for (let s = 0; s < segments; s++) {
            const segFraction = s / segments;
            const a1 = comet.angle - comet.length * (1 - segFraction);
            const a2 = comet.angle - comet.length * (1 - (s + 1) / segments);

            const x1 = ringCenterX + Math.cos(a1) * ringRadiusX;
            const y1 = ringCenterY + Math.sin(a1) * ringRadiusY;
            const x2 = ringCenterX + Math.cos(a2) * ringRadiusX;
            const y2 = ringCenterY + Math.sin(a2) * ringRadiusY;

            ctx.save();
            ctx.strokeStyle = comet.color;
            ctx.globalAlpha = Math.pow(segFraction, 1.6) * 0.95;
            ctx.lineWidth = 2.0 + segFraction * comet.size;
            ctx.shadowColor = '#FF6248';
            ctx.shadowBlur = 10 + segFraction * 18;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.restore();
          }

          // Comet Head: Brilliant White Core
          const headX = ringCenterX + Math.cos(comet.angle) * ringRadiusX;
          const headY = ringCenterY + Math.sin(comet.angle) * ringRadiusY;

          ctx.save();
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#FFA07A';
          ctx.shadowBlur = 18;
          ctx.beginPath();
          ctx.arc(headX, headY, comet.size * 0.9, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }

      // ----------------------------------------------------
      // G. FLOATING WARM EMBERS / SPARKS
      // ----------------------------------------------------
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.life += 1;
          p.y += p.vy;
          p.x += p.vx + Math.sin(time * p.swaySpeed + p.swayOffset) * 0.0004;

          if (p.life > p.maxLife || p.y < 0.20) {
            p.life = 0;
            p.x = Math.random() * 1.2 - 0.1;
            p.y = 0.62 + Math.random() * 0.35;
          }
        }

        const px = p.x * width;
        const py = p.y * height;
        const lifeRatio = p.life / p.maxLife;
        const currentAlpha = p.alpha * Math.sin(lifeRatio * Math.PI);

        ctx.save();
        ctx.fillStyle = '#FFA285';
        ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
        ctx.shadowColor = '#FF6248';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Deep Atmospheric Dark Base Canvas (Visible at z-0) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-0"
      />

      {/* 2. Top-Center Volumetric Orange Atmospheric Aura */}
      <div 
        className="absolute top-[16%] left-[58%] -translate-x-1/2 w-[700px] sm:w-[900px] h-[520px] rounded-full blur-[140px] opacity-45 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(circle, rgba(255,98,72,0.5) 0%, rgba(255,121,87,0.22) 45%, transparent 75%)',
          animation: 'pulse 5s ease-in-out infinite'
        }}
      />

      {/* 3. Glowing Curved Portal Arc Loop wrapping behind the browser */}
      <svg 
        className="absolute top-[5%] left-[45%] w-[720px] h-[640px] -translate-x-1/2 pointer-events-none opacity-90 hidden sm:block z-[1]" 
        viewBox="0 0 720 640" 
        fill="none"
      >
        <defs>
          <linearGradient id="portalArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7957" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#FF6248" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#FFA07A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF6248" stopOpacity="0" />
          </linearGradient>
          <filter id="arcGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 680 540 C 680 200, 520 40, 260 60 C 150 70, 70 130, 20 220"
          stroke="url(#portalArcGrad)"
          strokeWidth="4"
          fill="none"
          filter="url(#arcGlow)"
        />
      </svg>

      {/* 4. Left Architectural Monolith Pillar Silhouette with glowing edge */}
      <svg
        className="absolute top-0 left-0 w-[260px] lg:w-[380px] h-[65%] pointer-events-none opacity-50 z-[1]"
        viewBox="0 0 380 500"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="monolithLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#04060A" stopOpacity="0.98" />
            <stop offset="85%" stopColor="#0A111B" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#101826" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <polygon points="0,0 280,0 200,500 0,500" fill="url(#monolithLeft)" />
        <line x1="280" y1="0" x2="200" y2="500" stroke="#FF6248" strokeWidth="2" strokeOpacity="0.6" filter="drop-shadow(0 0 8px #FF6248)" />
      </svg>

      {/* 5. Right Architectural Monolith Pillar Silhouette */}
      <svg
        className="absolute top-0 right-0 w-[240px] lg:w-[350px] h-[65%] pointer-events-none opacity-45 z-[1]"
        viewBox="0 0 350 500"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="monolithRight" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#04060A" stopOpacity="0.98" />
            <stop offset="85%" stopColor="#0A111B" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#101826" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <polygon points="70,0 350,0 350,500 150,500" fill="url(#monolithRight)" />
        <line x1="70" y1="0" x2="150" y2="500" stroke="#FF7957" strokeWidth="2" strokeOpacity="0.55" filter="drop-shadow(0 0 8px #FF6248)" />
      </svg>

      {/* 6. Foreground Jagged Obsidian Rocks with Blazing Orange Rim Lighting (Bottom Left) */}
      <div className="absolute -bottom-2 -left-4 w-[300px] sm:w-[420px] h-[170px] pointer-events-none z-[3]">
        <svg viewBox="0 0 420 170" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="rockBodyLeft" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#020305" />
              <stop offset="50%" stopColor="#080D15" />
              <stop offset="85%" stopColor="#121A26" />
              <stop offset="100%" stopColor="#1A2433" />
            </linearGradient>
            <linearGradient id="rockFacetLeft" x1="20%" y1="100%" x2="70%" y2="0%">
              <stop offset="0%" stopColor="#040609" />
              <stop offset="60%" stopColor="#0E1520" />
              <stop offset="100%" stopColor="#1F2A3B" />
            </linearGradient>
            <linearGradient id="rockRimLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6248" stopOpacity="0.3" />
              <stop offset="35%" stopColor="#FF7957" stopOpacity="1.0" />
              <stop offset="75%" stopColor="#FFA07A" stopOpacity="1.0" />
              <stop offset="100%" stopColor="#FF6248" stopOpacity="0.2" />
            </linearGradient>
            <filter id="rockGlowLeft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Main Rock Mass */}
          <polygon
            points="0,170 0,80 50,92 100,55 145,68 190,32 240,75 290,48 345,90 390,110 420,170"
            fill="url(#rockBodyLeft)"
          />

          {/* Realistic 3D Facets & Crags */}
          <polygon points="100,55 145,68 190,32 155,95 105,120" fill="url(#rockFacetLeft)" opacity="0.8" />
          <polygon points="190,32 240,75 290,48 245,115 180,105" fill="url(#rockFacetLeft)" opacity="0.7" />
          <polygon points="290,48 345,90 390,110 320,140" fill="url(#rockFacetLeft)" opacity="0.6" />

          {/* Internal Crevice Shadows */}
          <line x1="145" y1="68" x2="155" y2="95" stroke="#010203" strokeWidth="2" />
          <line x1="190" y1="32" x2="180" y2="105" stroke="#010203" strokeWidth="2.5" />
          <line x1="240" y1="75" x2="245" y2="115" stroke="#010203" strokeWidth="2" />

          {/* Blazing Glowing Rim Light Line along Top Crest */}
          <polyline
            points="0,80 50,92 100,55 145,68 190,32 240,75 290,48 345,90 390,110 420,170"
            stroke="url(#rockRimLeft)"
            strokeWidth="3.2"
            fill="none"
            filter="url(#rockGlowLeft)"
          />
        </svg>
      </div>

      {/* 7. Foreground Jagged Obsidian Rocks with Blazing Orange Rim Lighting (Bottom Right) */}
      <div className="absolute -bottom-2 -right-4 w-[280px] sm:w-[400px] h-[165px] pointer-events-none z-[3]">
        <svg viewBox="0 0 400 165" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="rockBodyRight" x1="100%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#020305" />
              <stop offset="50%" stopColor="#080D15" />
              <stop offset="85%" stopColor="#121A26" />
              <stop offset="100%" stopColor="#1A2433" />
            </linearGradient>
            <linearGradient id="rockFacetRight" x1="80%" y1="100%" x2="30%" y2="0%">
              <stop offset="0%" stopColor="#040609" />
              <stop offset="60%" stopColor="#0E1520" />
              <stop offset="100%" stopColor="#1F2A3B" />
            </linearGradient>
            <linearGradient id="rockRimRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FF6248" stopOpacity="0.3" />
              <stop offset="40%" stopColor="#FF7957" stopOpacity="1.0" />
              <stop offset="80%" stopColor="#FFA07A" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FF6248" stopOpacity="0.2" />
            </linearGradient>
            <filter id="rockGlowRight" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Main Rock Mass */}
          <polygon
            points="400,165 400,75 350,85 305,48 255,62 210,30 160,70 110,45 60,82 25,100 0,165"
            fill="url(#rockBodyRight)"
          />

          {/* Realistic 3D Facets */}
          <polygon points="305,48 255,62 210,30 245,95 295,115" fill="url(#rockFacetRight)" opacity="0.8" />
          <polygon points="210,30 160,70 110,45 155,110 220,100" fill="url(#rockFacetRight)" opacity="0.7" />
          <polygon points="110,45 60,82 25,100 80,135" fill="url(#rockFacetRight)" opacity="0.6" />

          {/* Internal Crevice Shadows */}
          <line x1="255" y1="62" x2="245" y2="95" stroke="#010203" strokeWidth="2" />
          <line x1="210" y1="30" x2="220" y2="100" stroke="#010203" strokeWidth="2.5" />
          <line x1="160" y1="70" x2="155" y2="110" stroke="#010203" strokeWidth="2" />

          {/* Blazing Glowing Rim Light Line along Top Crest */}
          <polyline
            points="400,75 350,85 305,48 255,62 210,30 160,70 110,45 60,82 25,100 0,165"
            stroke="url(#rockRimRight)"
            strokeWidth="3.2"
            fill="none"
            filter="url(#rockGlowRight)"
          />
        </svg>
      </div>
    </div>
  );
}

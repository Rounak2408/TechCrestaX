import React from 'react';

/**
 * LightTrails
 * Elegant curved sweeping coral-orange light trails, glowing orbital paths,
 * moving photon particles, and subtle section boundary light lines that flow continuously
 * down across the page, creating an unbroken cinematic visual experience.
 */
export default function LightTrails({ intensity = 'default' }) {
  const opacityMap = {
    hero: 1.0,
    home: 0.85,
    portfolio: 0.60,
    services: 0.65,
    about: 0.60,
    pricing: 0.35,
    faq: 0.30,
    contact: 0.75,
    insights: 0.45,
    privacy: 0.20,
    default: 0.55,
  };

  const currentOpacity = opacityMap[intensity] || opacityMap.default;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 ease-out select-none"
      style={{ opacity: currentOpacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 2800"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full will-change-transform"
      >
        <defs>
          {/* Coral Energy Gradient 1 */}
          <linearGradient id="trailGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF7957" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#FF6248" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#FF7957" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFA07A" stopOpacity="0.1" />
          </linearGradient>

          {/* Coral Energy Gradient 2 */}
          <linearGradient id="trailGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA07A" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#FF6248" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#FF7957" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FF6248" stopOpacity="0.2" />
          </linearGradient>

          {/* Amber Energy Gradient 3 */}
          <linearGradient id="trailGrad3" x1="100%" y1="20%" x2="0%" y2="80%">
            <stop offset="0%" stopColor="#FFB627" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#FF7957" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF6248" stopOpacity="0.1" />
          </linearGradient>

          {/* Boundary Laser Gradient */}
          <linearGradient id="boundaryLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6248" stopOpacity="0" />
            <stop offset="30%" stopColor="#FF7957" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FFA07A" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#FF6248" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF6248" stopOpacity="0" />
          </linearGradient>

          {/* Neon Glow Filters */}
          <filter id="trailGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="pulseGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="orbitalGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ============================================================
            1. THIN GLOWING ORANGE ORBITAL CURVES (Upper & Mid Atmosphere)
            ============================================================ */}
        {/* Upper Orbital Ellipse */}
        <ellipse
          cx="720"
          cy="480"
          rx="580"
          ry="280"
          stroke="url(#trailGrad1)"
          strokeWidth="1.2"
          strokeDasharray="8 16"
          className="opacity-20"
          filter="url(#orbitalGlow)"
        />

        {/* Mid-Page Orbital Ellipse */}
        <ellipse
          cx="680"
          cy="1580"
          rx="660"
          ry="320"
          stroke="url(#trailGrad2)"
          strokeWidth="1.2"
          strokeDasharray="10 20"
          className="opacity-15"
          filter="url(#orbitalGlow)"
        />

        {/* Lower Orbital Ellipse (Near Pricing & Footer) */}
        <ellipse
          cx="760"
          cy="2420"
          rx="620"
          ry="300"
          stroke="url(#trailGrad3)"
          strokeWidth="1.0"
          strokeDasharray="6 14"
          className="opacity-15"
          filter="url(#orbitalGlow)"
        />

        {/* ============================================================
            2. SECTION BOUNDARY LASER LIGHT TRAILS
            ============================================================ */}
        {/* Boundary 1: Upper Section Divider */}
        <path
          d="M 0 760 Q 720 740 1440 760"
          stroke="url(#boundaryLaserGrad)"
          strokeWidth="1"
          strokeOpacity="0.35"
        />
        <path
          d="M 0 760 Q 720 740 1440 760"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          className="animate-trail-flow-1"
          style={{ strokeDasharray: '120 1800', filter: 'url(#pulseGlow)' }}
        />

        {/* Boundary 2: Mid-Section Divider */}
        <path
          d="M 0 1680 Q 720 1700 1440 1680"
          stroke="url(#boundaryLaserGrad)"
          strokeWidth="1"
          strokeOpacity="0.25"
        />
        <path
          d="M 0 1680 Q 720 1700 1440 1680"
          stroke="#FFA07A"
          strokeWidth="2.0"
          className="animate-trail-flow-2"
          style={{ strokeDasharray: '150 1900', filter: 'url(#pulseGlow)' }}
        />

        {/* ============================================================
            TRAIL 1: Top-Right through Mid-Left (Cascading across Hero & Portfolio)
            ============================================================ */}
        {/* Ambient Bloom Line */}
        <path
          d="M 1400 120 C 1100 480, 500 650, 80 1100"
          stroke="url(#trailGrad1)"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="opacity-30"
          filter="url(#trailGlow)"
        />
        {/* Moving Laser Energy Pulse */}
        <path
          d="M 1400 120 C 1100 480, 500 650, 80 1100"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="round"
          className="animate-trail-flow-1"
          style={{
            strokeDasharray: '180 1800',
            filter: 'url(#pulseGlow)',
          }}
        />

        {/* ============================================================
            TRAIL 2: Mid-Left crossing to Lower-Right (Connecting Services & Process)
            ============================================================ */}
        {/* Ambient Bloom Line */}
        <path
          d="M 60 1050 C 450 1450, 1150 1620, 1380 2050"
          stroke="url(#trailGrad2)"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="opacity-25"
          filter="url(#trailGlow)"
        />
        {/* Moving Laser Energy Pulse */}
        <path
          d="M 60 1050 C 450 1450, 1150 1620, 1380 2050"
          stroke="#FFA07A"
          strokeWidth="3.0"
          strokeLinecap="round"
          className="animate-trail-flow-2"
          style={{
            strokeDasharray: '220 2000',
            filter: 'url(#pulseGlow)',
          }}
        />

        {/* ============================================================
            TRAIL 3: Lower-Right across to Footer (Connecting Pricing & Closing CTA)
            ============================================================ */}
        {/* Ambient Bloom Line */}
        <path
          d="M 1390 2000 C 1050 2350, 350 2480, 80 2750"
          stroke="url(#trailGrad3)"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="opacity-25"
          filter="url(#trailGlow)"
        />
        {/* Moving Laser Energy Pulse */}
        <path
          d="M 1390 2000 C 1050 2350, 350 2480, 80 2750"
          stroke="#FF7957"
          strokeWidth="2.8"
          strokeLinecap="round"
          className="animate-trail-flow-3"
          style={{
            strokeDasharray: '160 1700',
            filter: 'url(#pulseGlow)',
          }}
        />
      </svg>
    </div>
  );
}

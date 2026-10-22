import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

export default function ConnectedNodes3D({ className = "" }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    { id: 1, cx: 35, cy: 30, r: 5, label: "SEO Index" },
    { id: 2, cx: 70, cy: 22, r: 6, label: "Core Vitals" },
    { id: 3, cx: 85, cy: 60, r: 5, label: "Conversion Funnel" },
    { id: 4, cx: 50, cy: 75, r: 7, label: "Neural Schema" },
    { id: 5, cx: 20, cy: 65, r: 5, label: "Edge CDN" },
    { id: 6, cx: 50, cy: 45, r: 8, label: "TechCrestaX Hub" },
  ];

  const links = [
    { from: 6, to: 1 },
    { from: 6, to: 2 },
    { from: 6, to: 3 },
    { from: 6, to: 4 },
    { from: 6, to: 5 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 4, to: 5 },
  ];

  return (
    <div className={`relative bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-lg shadow-slate-200/40 dark:shadow-none overflow-hidden ${className}`}>
      {/* Top Banner */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F7DCE5] text-[#96405d] flex items-center justify-center">
            <Share2 className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-slate-900 dark:text-white">Connected Growth Architecture</span>
        </div>
        <span className="text-[11px] font-mono text-[#96405d] dark:text-[#f7dce5] bg-[#F7DCE5]/50 dark:bg-[#F7DCE5]/20 px-2 py-0.5 rounded-full border border-[#F7DCE5]">
          Real-Time Synced
        </span>
      </div>

      {/* SVG Network Graph */}
      <div className="relative aspect-[16/10] w-full flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full select-none">
          {/* Grid lines */}
          <line x1="0" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="2,2" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="2,2" />

          {/* Links */}
          {links.map((link, idx) => {
            const start = nodes.find(n => n.id === link.from);
            const end = nodes.find(n => n.id === link.to);
            const isHighlighted = hoveredNode === link.from || hoveredNode === link.to;
            return (
              <line
                key={idx}
                x1={start.cx}
                y1={start.cy}
                x2={end.cx}
                y2={end.cy}
                stroke={isHighlighted ? "#96405d" : "#cbd5e1"}
                strokeWidth={isHighlighted ? "1.5" : "0.8"}
                strokeDasharray={idx % 2 === 0 ? "none" : "2,2"}
                className="transition-colors duration-300"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isCenter = node.id === 6;
            const isHovered = hoveredNode === node.id;
            return (
              <g
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                {/* Glow ring */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r + (isHovered ? 4 : 2)}
                  fill={isCenter ? "#F7DCE5" : "#e89db1"}
                  opacity={isHovered ? 0.35 : 0.15}
                  className="transition-all duration-300"
                />
                {/* Main circle */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill={isCenter ? "#0f172a" : "#ffffff"}
                  stroke={isCenter ? "#F7DCE5" : "#334155"}
                  strokeWidth={isCenter ? "1.5" : "1"}
                  className="transition-transform duration-200"
                />
                {/* Inner dot */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={isCenter ? 2.5 : 1.5}
                  fill={isCenter ? "#F7DCE5" : "#96405d"}
                />
                {/* Label text */}
                <text
                  x={node.cx}
                  y={node.cy + node.r + 4}
                  textAnchor="middle"
                  className={`text-[3.2px] font-mono font-medium ${
                    isHovered ? 'fill-slate-900 dark:fill-white font-bold' : 'fill-slate-500 dark:fill-slate-400'
                  }`}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
        <span>Continuous telemetry sync</span>
        <span className="text-[#96405d] dark:text-[#f7dce5] font-semibold">100% Reachability</span>
      </div>
    </div>
  );
}

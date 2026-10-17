import React, { useState } from 'react';
import { Layers, Terminal, Activity, Database, CheckCircle2 } from 'lucide-react';

export default function LayeredAppWindow({
  title = "SaaS Fleet & Operations Controller",
  endpoint = "api.v2/fleet/telemetry",
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative perspective-container group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-hidden="true"
    >
      <div
        className="w-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-transform duration-500 ease-out preserve-3d"
        style={{
          transform: isHovered
            ? 'rotateX(-4deg) rotateY(4deg) translateY(-6px)'
            : 'rotateX(0deg) rotateY(0deg) translateY(0px)',
        }}
      >
        {/* App Top Bar */}
        <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-200">
              {title}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
            v2.4.0 • Production
          </span>
        </div>

        {/* App Body Grid */}
        <div className="p-5 bg-gradient-to-b from-slate-50/50 dark:from-slate-900/60 to-white dark:to-slate-950 grid grid-cols-12 gap-3">
          {/* Mini Sidebar */}
          <div className="col-span-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 space-y-2">
            <div className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 px-1">Navigation</div>
            <div className="h-6 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-medium flex items-center px-2 gap-1.5">
              <Activity className="w-3 h-3 text-emerald-400 dark:text-emerald-600" />
              <span>Overview</span>
            </div>
            <div className="h-6 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-[11px] flex items-center px-2 gap-1.5">
              <Database className="w-3 h-3 text-slate-400" />
              <span>Clusters</span>
            </div>
            <div className="h-6 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-[11px] flex items-center px-2 gap-1.5">
              <Terminal className="w-3 h-3 text-slate-400" />
              <span>Logs</span>
            </div>
          </div>

          {/* Main Dashboard Panel */}
          <div className="col-span-9 space-y-3">
            {/* Metric Banner */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block">Throughput</span>
                <span className="text-base font-bold text-slate-900 dark:text-white font-mono">14,820 req/s</span>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block">Sync Latency</span>
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">18ms</span>
              </div>
            </div>

            {/* Code / API Endpoint Bar */}
            <div className="bg-slate-900 text-slate-200 rounded-xl p-3 font-mono text-xs flex items-center justify-between">
              <div className="flex items-center gap-2 truncate">
                <span className="text-emerald-400 font-bold">GET</span>
                <span className="text-slate-300 truncate">{endpoint}</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-1.5 py-0.5 rounded shrink-0">
                200 OK
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

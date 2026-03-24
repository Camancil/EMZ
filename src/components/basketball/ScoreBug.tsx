import React from "react";

export default function ScoreBug() {
  return (
    <div className="hidden md:flex items-center gap-2 rounded-full border border-[rgba(255,90,31,0.45)] bg-[rgba(255,255,255,0.02)] px-4 py-2">
      <span className="text-[11px] font-display tracking-wide text-chalk/90">
        ÑUÑOA
      </span>
      <span className="text-[11px] font-mono text-gray-400">|</span>
      <span className="text-[11px] font-display tracking-wide text-chalk/90">
        LIVE
      </span>
      <span
        className="inline-block h-2.5 w-2.5 rounded-full bg-orange"
        style={{ animation: "score-pulse 1.2s ease-in-out infinite" }}
        aria-hidden="true"
      />
    </div>
  );
}


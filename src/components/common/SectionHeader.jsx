import React from "react";

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-8 sm:mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-mono tracking-wider uppercase border border-white/10 bg-white/[0.04] text-sky-400 backdrop-blur-md ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base md:text-lg text-neutral-400 font-sans leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}


import React from "react";

interface ArchitecturalElementsProps {
  variant?: "wireframe" | "minimal-interior";
  className?: string;
}

export function ArchitecturalElements({
  variant = "wireframe",
  className = "",
}: ArchitecturalElementsProps) {
  if (variant === "minimal-interior") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={"/1.png"}
          alt="Minimal interior with architectural lighting"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={"/2.png"}
        alt="Architectural engineering wireframes and line drawings"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// Decorative wireframe SVG component for backgrounds
export function WireframeBg({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid lines */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Architectural wireframe elements */}
      <g stroke="currentColor" fill="none" strokeWidth="1" opacity="0.15">
        {/* Building outline */}
        <path d="M100 500 L100 200 L200 150 L300 200 L300 500" />
        <path d="M400 500 L400 180 L550 120 L700 180 L700 500" />

        {/* Interior structure lines */}
        <line x1="150" y1="200" x2="150" y2="500" opacity="0.3" />
        <line x1="250" y1="200" x2="250" y2="500" opacity="0.3" />
        <line x1="100" y1="300" x2="300" y2="300" opacity="0.3" />
        <line x1="100" y1="400" x2="300" y2="400" opacity="0.3" />

        {/* Second building details */}
        <line x1="475" y1="180" x2="475" y2="500" opacity="0.3" />
        <line x1="625" y1="180" x2="625" y2="500" opacity="0.3" />
        <line x1="400" y1="280" x2="700" y2="280" opacity="0.3" />
        <line x1="400" y1="380" x2="700" y2="380" opacity="0.3" />

        {/* Foundation lines */}
        <line
          x1="50"
          y1="500"
          x2="750"
          y2="500"
          strokeWidth="2"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

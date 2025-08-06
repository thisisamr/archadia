import React from "react";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  variant = "full",
  className = "",
  size = "md",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  };

  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  if (variant === "icon") {
    return (
      <div
        className={`${sizeClasses[size]} ${className} flex items-center justify-center`}
      >
        <div className="relative">
          {/* Refined architectural logo with clean lines */}
          <svg
            viewBox="0 0 48 48"
            className={`${sizeClasses[size]} text-primary`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {/* Clean geometric structure representing building/architecture */}
            <path
              d="M12 40 L12 20 L24 8 L36 20 L36 40"
              strokeLinejoin="miter"
            />

            {/* Foundation lines */}
            <line x1="8" y1="40" x2="40" y2="40" />
            <line x1="10" y1="42" x2="38" y2="42" />

            {/* Interior structure lines */}
            <line x1="18" y1="20" x2="18" y2="40" opacity="0.6" />
            <line x1="30" y1="20" x2="30" y2="40" opacity="0.6" />
            <line x1="12" y1="28" x2="36" y2="28" opacity="0.4" />

            {/* Refined peak detail */}
            <circle cx="24" cy="8" r="1" fill="currentColor" />

            {/* Subtle architectural details */}
            <rect
              x="20"
              y="32"
              width="8"
              height="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          className={`${sizeClasses[size]} text-primary`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 40 L12 20 L24 8 L36 20 L36 40" strokeLinejoin="miter" />
          <line x1="8" y1="40" x2="40" y2="40" />
          <line x1="10" y1="42" x2="38" y2="42" />
          <line x1="18" y1="20" x2="18" y2="40" opacity="0.6" />
          <line x1="30" y1="20" x2="30" y2="40" opacity="0.6" />
          <line x1="12" y1="28" x2="36" y2="28" opacity="0.4" />
          <circle cx="24" cy="8" r="1" fill="currentColor" />
          <rect
            x="20"
            y="32"
            width="8"
            height="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.7"
          />
        </svg>
      </div>
      <span
        className={`${textSizeClasses[size]} tracking-widest font-light text-primary`}
      >
        ARCHADIA
      </span>
    </div>
  );
}

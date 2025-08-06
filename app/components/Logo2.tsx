export interface ArchadiaLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function ArchadiaLogo({
  width = 380,
  height = 100,
  className = "",
}: ArchadiaLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Premium gold gradient */}
        <linearGradient id="premiumGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="25%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FDB931" />
          <stop offset="75%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>

        {/* Subtle copper accent */}
        <linearGradient id="copperAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CD7F32" />
          <stop offset="50%" stopColor="#D2691E" />
          <stop offset="100%" stopColor="#A0522D" />
        </linearGradient>
      </defs>

      {/* Geometric "A" Symbol */}
      <g transform="translate(20, 20)">
        {/* Outer triangle */}
        <path
          d="M30 50 L50 10 L70 50"
          stroke="url(#premiumGold)"
          strokeWidth="1.8"
          fill="none"
          strokeLinejoin="miter"
          strokeLinecap="round"
        />

        {/* Second triangle layer */}
        <path
          d="M32 47 L50 13 L68 47"
          stroke="url(#premiumGold)"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="miter"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Third triangle layer */}
        <path
          d="M34 44 L50 16 L66 44"
          stroke="url(#premiumGold)"
          strokeWidth="1.3"
          fill="none"
          strokeLinejoin="miter"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Fourth triangle layer */}
        <path
          d="M36 41 L50 19 L64 41"
          stroke="url(#premiumGold)"
          strokeWidth="1.1"
          fill="none"
          strokeLinejoin="miter"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Innermost triangle */}
        <path
          d="M38 38 L50 22 L62 38"
          stroke="url(#premiumGold)"
          strokeWidth="1"
          fill="none"
          strokeLinejoin="miter"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Horizontal crossbar for "A" */}
        <line
          x1="41"
          y1="35"
          x2="59"
          y2="35"
          stroke="url(#premiumGold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Subtle architectural accent lines */}
        <line
          x1="25"
          y1="55"
          x2="75"
          y2="55"
          stroke="url(#premiumGold)"
          strokeWidth="0.5"
          opacity="0.3"
        />

        {/* Corner accent marks */}
        <path
          d="M47 8 L50 5 L53 8"
          stroke="url(#copperAccent)"
          strokeWidth="1"
          fill="none"
          strokeLinejoin="miter"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      {/* ARCHADIA wordmark */}
      <g transform="translate(110, 25)">
        <text
          x="0"
          y="35"
          fill="url(#premiumGold)"
          fontSize="32"
          fontFamily="ui-serif, Georgia, serif"
          fontWeight="300"
          letterSpacing="0.15em"
        >
          ARCHADIA
        </text>

        {/* Subtle tagline */}
        <text
          x="2"
          y="50"
          fill="url(#premiumGold)"
          fontSize="9"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="400"
          letterSpacing="0.3em"
          opacity="0.7"
        >
          INTERIOR DESIGN
        </text>
      </g>

      {/* Decorative elements */}
      <g transform="translate(110, 25)">
        {/* Small decorative lines */}
        <line
          x1="0"
          y1="20"
          x2="20"
          y2="20"
          stroke="url(#premiumGold)"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <line
          x1="0"
          y1="55"
          x2="140"
          y2="55"
          stroke="url(#premiumGold)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

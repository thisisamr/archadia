export function ArchadiaLogo({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="premiumGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="25%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FDB931" />
          <stop offset="75%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="copperAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CD7F32" />
          <stop offset="50%" stopColor="#D2691E" />
          <stop offset="100%" stopColor="#A0522D" />
        </linearGradient>
      </defs>

      {/* Logo Symbol */}
      <g>
        <path
          d="M50 50 L70 10 L90 50"
          stroke="url(#premiumGold)"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="miter"
        />
        <path
          d="M52 47 L70 13 L88 47"
          stroke="url(#premiumGold)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M54 44 L70 16 L86 44"
          stroke="url(#premiumGold)"
          strokeWidth="1.3"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M56 41 L70 19 L84 41"
          stroke="url(#premiumGold)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M58 38 L70 22 L82 38"
          stroke="url(#premiumGold)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
        <line
          x1="61"
          y1="35"
          x2="79"
          y2="35"
          stroke="url(#premiumGold)"
          strokeWidth="1.5"
          opacity="0.9"
        />
        <line
          x1="45"
          y1="55"
          x2="95"
          y2="55"
          stroke="url(#premiumGold)"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <path
          d="M67 8 L70 5 L73 8"
          stroke="url(#copperAccent)"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Wordmark */}
      <g>
        <text
          x="120"
          y="45"
          fill="url(#premiumGold)"
          fontSize="32"
          fontFamily="ui-serif, Georgia, serif"
          fontWeight="300"
          letterSpacing="0.15em"
        >
          ARCHADIA
        </text>
        <text
          x="122"
          y="60"
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

      {/* Decorative lines */}
      <line
        x1="120"
        y1="30"
        x2="140"
        y2="30"
        stroke="url(#premiumGold)"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <line
        x1="120"
        y1="65"
        x2="260"
        y2="65"
        stroke="url(#premiumGold)"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );
}

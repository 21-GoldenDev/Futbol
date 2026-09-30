type LogoProps = {
  className?: string;
  variant?: "header" | "mark";
};

function Crown() {
  return (
    <g fill="#e8b923">
      <path d="M8 22 12.5 7.5 20 16 28 4l8 12 7.5-8.5L48 22H8Z" />
      <rect x="8" y="21" width="40" height="4.5" rx="1" />
      <circle cx="12.5" cy="8.5" r="2.4" />
      <circle cx="28" cy="5" r="2.6" />
      <circle cx="43.5" cy="8.5" r="2.4" />
    </g>
  );
}

export default function Logo({ className = "", variant = "header" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 320 270"
        className={`block overflow-visible ${className}`}
        role="img"
        aria-label="G7 Futbol Training"
      >
        <g transform="translate(132 10) scale(1.15)">
          <Crown />
        </g>
        <text
          x="160"
          y="175"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="var(--font-oswald), Oswald, sans-serif"
          fontSize="108"
          fontWeight="700"
          fontStyle="italic"
          letterSpacing="-4"
        >
          G<tspan fill="#e8b923">7</tspan>
        </text>
        <text
          x="160"
          y="230"
          textAnchor="middle"
          fill="#f2f2f2"
          fontFamily="var(--font-oswald), Oswald, sans-serif"
          fontSize="15"
          letterSpacing="7"
        >
          FUTBOL TRAINING
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 248 68"
      className={`block h-11 w-auto overflow-visible sm:h-12 ${className}`}
      role="img"
      aria-label="G7 Futbol Training"
    >
      <g transform="translate(42 2) scale(0.7)">
        <Crown />
      </g>
      <text
        x="16"
        y="56"
        fill="#ffffff"
        fontFamily="var(--font-oswald), Oswald, sans-serif"
        fontSize="34"
        fontWeight="700"
        fontStyle="italic"
        letterSpacing="-1.5"
      >
        G<tspan fill="#e8b923">7</tspan>
      </text>
      <text
        x="98"
        y="34"
        fill="#ffffff"
        fontFamily="var(--font-oswald), Oswald, sans-serif"
        fontSize="11"
        letterSpacing="3.2"
      >
        FUTBOL
      </text>
      <text
        x="98"
        y="50"
        fill="#e8b923"
        fontFamily="var(--font-oswald), Oswald, sans-serif"
        fontSize="11"
        letterSpacing="2.4"
      >
        TRAINING
      </text>
    </svg>
  );
}

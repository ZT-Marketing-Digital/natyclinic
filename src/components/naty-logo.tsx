/* Faithful port of naty.app's own header/footer logo mark (dark-context "white" variant). */
export function NatyLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Secretária Naty"
      role="img"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 63.8071 5.60147 76.3071 14.6447 85.3553L0 100H20H50ZM50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20C33.4315 20 20 33.4315 20 50C20 58.2843 23.3579 65.7843 28.7868 71.2132L20 80H50Z"
        fill="white"
      />
      <path
        d="M35 55C35 55 40 65 50 65C60 65 65 55 65 55"
        stroke="white"
        strokeWidth={8}
        strokeLinecap="round"
      />
      <g transform="translate(120, 20)">
        <text
          x="0"
          y="15"
          fill="white"
          className="uppercase"
          style={{ fontFamily: "Gilroy", fontWeight: 500, fontSize: 16, letterSpacing: "0.1em", opacity: 0.75 }}
        >
          SECRETÁRIA
        </text>
        <text x="0" y="65" fill="white" style={{ fontFamily: "Gilroy", fontWeight: 700, fontSize: 60 }}>
          naty
        </text>
      </g>
    </svg>
  );
}

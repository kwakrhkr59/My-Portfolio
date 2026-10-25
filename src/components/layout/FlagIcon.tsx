// 이모지 국기는 Windows 에서 "KR" / "US" 글자로 보이므로 SVG 로 직접 그린다.
// 실제 국기 비율(3:2)을 따르고, 크기는 className 으로 정한다.
type FlagProps = { className?: string };

const FLAG_VIEWBOX = "0 0 30 20";

// 건(☰) 리(☲) 감(☵) 곤(☷): S = 이어진 효, B = 끊어진 효
const TRIGRAM_DISTANCE = 10.2;
const trigram = (pattern: string, rotate: number) => (
  <g transform={`rotate(${rotate} 15 10)`} fill="#1a1a1a">
    {pattern.split("").map((kind, i) => {
      const y = 10 - TRIGRAM_DISTANCE - 1.9 + i * 1.5;
      return kind === "S" ? (
        <rect key={i} x="13" y={y} width="4" height="0.8" />
      ) : (
        <g key={i}>
          <rect x="13" y={y} width="1.75" height="0.8" />
          <rect x="15.25" y={y} width="1.75" height="0.8" />
        </g>
      );
    })}
  </g>
);

export function FlagKR({ className }: FlagProps) {
  return (
    <svg viewBox={FLAG_VIEWBOX} className={className} aria-hidden>
      <rect width="30" height="20" fill="#fff" />
      <g transform="rotate(-33.7 15 10)">
        <path d="M10 10a5 5 0 0 1 10 0z" fill="#cd2e3a" />
        <path d="M20 10a5 5 0 0 1-10 0z" fill="#0047a0" />
        <circle cx="12.5" cy="10" r="2.5" fill="#0047a0" />
        <circle cx="17.5" cy="10" r="2.5" fill="#cd2e3a" />
      </g>
      {trigram("SSS", -56.3)}
      {trigram("SBS", 56.3)}
      {trigram("BSB", 236.3)}
      {trigram("BBB", 123.7)}
    </svg>
  );
}

const STRIPE = 20 / 13;
const STARS = [0, 1, 2, 3].flatMap((row) =>
  Array.from({ length: row % 2 === 0 ? 3 : 2 }, (_, col) => ({
    cx: (row % 2 === 0 ? 1.7 : 3.7) + col * 3.2,
    cy: 1.6 + row * 2.3,
  })),
);

export function FlagUS({ className }: FlagProps) {
  return (
    <svg viewBox={FLAG_VIEWBOX} className={className} aria-hidden>
      <rect width="30" height="20" fill="#fff" />
      {Array.from({ length: 7 }, (_, i) => (
        <rect
          key={i}
          y={i * 2 * STRIPE}
          width="30"
          height={STRIPE}
          fill="#b22234"
        />
      ))}
      <rect width="12" height={STRIPE * 7} fill="#3c3b6e" />
      {STARS.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r="0.62" fill="#fff" />
      ))}
    </svg>
  );
}

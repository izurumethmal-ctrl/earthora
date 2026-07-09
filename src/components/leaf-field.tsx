// Animated ambient leaf/nature background for hero sections.
export function LeafField() {
  const leaves = [
    { left: "8%", top: "15%", size: 42, delay: "0s", rotate: -20 },
    { left: "22%", top: "70%", size: 28, delay: "1.4s", rotate: 45 },
    { left: "45%", top: "22%", size: 34, delay: "2.2s", rotate: 12 },
    { left: "68%", top: "60%", size: 50, delay: "0.6s", rotate: -35 },
    { left: "82%", top: "18%", size: 30, delay: "3s", rotate: 20 },
    { left: "90%", top: "78%", size: 40, delay: "1.8s", rotate: -10 },
    { left: "35%", top: "88%", size: 24, delay: "2.8s", rotate: 60 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 animate-drift">
        {leaves.map((l, i) => (
          <svg
            key={i}
            className="animate-leaf absolute text-leaf/30"
            style={{
              left: l.left,
              top: l.top,
              width: l.size,
              height: l.size,
              animationDelay: l.delay,
              transform: `rotate(${l.rotate}deg)`,
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

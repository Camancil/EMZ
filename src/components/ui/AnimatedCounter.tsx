"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function AnimatedCounter({
  value,
  durationMs = 900,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);

  const target = useMemo(() => Math.max(0, value), [value]);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const from = 0;
    const to = target;

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      // Ease-out para que se sienta "pro".
      const eased = 1 - Math.pow(1 - t, 3);
      const next = from + (to - from) * eased;
      setCurrent(Math.round(next));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, started, target]);

  const display = started ? current : 0;
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("es-CL")}
      {suffix}
    </span>
  );
}


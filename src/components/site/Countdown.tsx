import { useEffect, useState } from "react";

const DAY_INDEX: Record<string, number> = {
  "weekly-sunday": 0,
  "weekly-monday": 1,
  "weekly-tuesday": 2,
  "weekly-wednesday": 3,
  "weekly-thursday": 4,
  "weekly-friday": 5,
  "weekly-saturday": 6,
};

function nextOccurrence(recurring: string) {
  const target = DAY_INDEX[recurring] ?? 6;
  const now = new Date();
  const next = new Date(now);
  next.setHours(20, 0, 0, 0);
  let diff = (target - now.getDay() + 7) % 7;
  if (diff === 0 && now.getTime() > next.getTime()) diff = 7;
  next.setDate(now.getDate() + diff);
  return next;
}

export function Countdown({ recurring }: { recurring: string }) {
  const [parts, setParts] = useState<{ label: string; value: number }[] | null>(null);

  useEffect(() => {
    const tick = () => {
      const ms = Math.max(0, nextOccurrence(recurring).getTime() - Date.now());
      const total = Math.floor(ms / 1000);
      setParts([
        { label: "Days", value: Math.floor(total / 86400) },
        { label: "Hrs", value: Math.floor((total % 86400) / 3600) },
        { label: "Min", value: Math.floor((total % 3600) / 60) },
        { label: "Sec", value: total % 60 },
      ]);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [recurring]);

  return (
    <div className="grid grid-cols-4 gap-2" role="timer" aria-label="Time until next event">
      {(parts ?? [
        { label: "Days", value: 0 },
        { label: "Hrs", value: 0 },
        { label: "Min", value: 0 },
        { label: "Sec", value: 0 },
      ]).map((p) => (
        <div
          key={p.label}
          className="rounded-xl border border-gold/20 bg-background/50 px-2 py-3 text-center backdrop-blur-sm"
        >
          <span className="block font-display text-2xl text-gold tabular-nums">
            {String(p.value).padStart(2, "0")}
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            {p.label}
          </span>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState, useCallback } from "react";

const NOTES = ["Dó", "Dó#", "Ré", "Ré#", "Mi", "Fá", "Fá#", "Sol", "Sol#", "Lá", "Lá#", "Si"];
const CX = 170;
const CY = 170;
const R = 128;

export default function ChromaticWheel() {
  const [active, setActive] = useState<number | null>(null);

  const showInfo = useCallback((i: number) => {
    const cents = i * 100;
    const factor = Math.pow(2, i / 12).toFixed(5);
    return {
      note: `${NOTES[i]} — ${i} semitom${i === 1 ? "" : "s"} acima de Dó`,
      detail: `${cents} cents · fator 2^(${i}/12) ≈ ${factor}`,
    };
  }, []);

  const info = active !== null ? showInfo(active) : null;

  return (
    <div className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 340 340" className="w-full max-w-[380px]">
        {/* Ring */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(184,135,63,0.28)" />

        {/* Center text */}
        <text x={CX} y={CY - 6} textAnchor="middle" className="fill-[var(--muted)] font-[var(--font-jetbrains)] text-[10px] tracking-[0.05em]">
          2^(1/12) = 2
        </text>
        <text x={CX} y={CY + 12} textAnchor="middle" className="fill-[var(--muted)] font-[var(--font-jetbrains)] text-[10px] tracking-[0.05em]">
          (oitava)
        </text>

        {/* Spokes + nodes */}
        {NOTES.map((name, i) => {
          const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const x = CX + R * Math.cos(angle);
          const y = CY + R * Math.sin(angle);
          const isActive = active === i;

          return (
            <g key={name}>
              <line x1={CX} y1={CY} x2={x} y2={y} stroke="rgba(184,135,63,0.12)" />
              <g
                className="cursor-pointer"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={20}
                  className="transition-all duration-150"
                  fill={isActive ? "var(--gold-2)" : "var(--bg-3)"}
                  stroke={isActive ? "var(--gold-2)" : "var(--gold-dim)"}
                  strokeWidth={1.4}
                />
                <text
                  x={x}
                  y={y + 4}
                  textAnchor="middle"
                  className="font-[var(--font-jetbrains)] text-[11px] transition-all duration-150"
                  fill={isActive ? "var(--bg)" : "var(--cream-dim)"}
                >
                  {name}
                </text>
              </g>
            </g>
          );
        })}
      </svg>

      <div className="min-h-[74px] text-center">
        <div className="text-[1.1rem] tracking-[0.04em] text-[var(--gold-2)]">
          {info?.note ?? "Toque em uma nota"}
        </div>
        <div className="mt-1.5 text-[0.82rem] text-[var(--cream-dim)]">
          {info?.detail ?? "para ver a matemática por trás dela"}
        </div>
      </div>

      <p className="font-[var(--font-jetbrains)] text-[0.7rem] uppercase tracking-[0.06em] text-[var(--muted)]">
        A grade de 12 semitons — 2^(n/12)
      </p>
    </div>
  );
}

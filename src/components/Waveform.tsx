"use client";

import { useEffect, useRef } from "react";

export default function Waveform() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const ns = "http://www.w3.org/2000/svg";
    const n = 70;
    const w = 400;
    const h = 140;
    const mid = h / 2;
    const bars: SVGSVGElement[] = [];

    for (let i = 0; i < n; i++) {
      const x = (i / n) * w;
      const dist = Math.abs(i - n / 2) / (n / 2);
      const amp = (1 - dist) * (h * 0.42) * (0.4 + Math.random() * 0.6);
      const rect = document.createElementNS(ns, "rect");
      rect.setAttribute("x", String(x));
      rect.setAttribute("width", String(Math.max(1.6, (w / n) * 0.55)));
      rect.setAttribute("fill", "#b8873f");
      rect.setAttribute("opacity", String(0.35 + (1 - dist) * 0.5));
      rect.dataset.amp = String(amp);
      rect.dataset.phase = String(Math.random() * Math.PI * 2);
      svg.appendChild(rect);
      bars.push(rect as unknown as SVGSVGElement);
    }

    let t = 0;
    let raf: number;

    function animate() {
      t += 0.018;
      bars.forEach((rect, i) => {
        const amp = parseFloat((rect as unknown as SVGRectElement).dataset.amp!);
        const phase = parseFloat((rect as unknown as SVGRectElement).dataset.phase!);
        const scale = 0.55 + 0.45 * Math.sin(t * 1.6 + phase + i * 0.12);
        const barH = Math.max(2, amp * scale);
        (rect as unknown as SVGRectElement).setAttribute("y", String(mid - barH / 2));
        (rect as unknown as SVGRectElement).setAttribute("height", String(barH));
      });
      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 140"
      preserveAspectRatio="none"
      className="h-[140px] w-full"
    />
  );
}

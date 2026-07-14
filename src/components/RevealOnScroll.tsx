"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".topic, .index-item, .tl-item, .stat-card"
    );
    els.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(10px)";
      (el as HTMLElement).style.transition =
        "opacity 0.5s ease, transform 0.5s ease";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}

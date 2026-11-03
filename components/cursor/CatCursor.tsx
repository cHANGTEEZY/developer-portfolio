"use client";

import { useEffect, useRef } from "react";

const NOSE = { x: 16, y: 17 };
const SIZE = 36;

const strokes = [
  "M9.2 12.2 L11.4 5.2 L15.2 11.2",
  "M16.8 11.2 L20.6 5.2 L22.8 12.2",
  "M8 15.2 C8 10.4 24 10.4 24 15.2 C24 20.2 8 20.2 8 15.2",
  "M4.5 15.2 H10.2",
  "M4.8 17.4 H10.2",
  "M21.8 15.2 H27.5",
  "M21.8 17.4 H27.2",
  "M10.2 19.6 C9.2 27.2 22.8 27.2 21.8 19.6",
  "M12.2 26.6 V29.4",
  "M16 27.2 V30.2",
  "M19.8 26.6 V29.4",
  "M21.6 22.2 C28.4 20.2 29.2 28.4 20.6 27.2",
].join(" ");

export function CatCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    const root = document.documentElement;
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let targetX = -100;
    let targetY = -100;
    let x = -100;
    let y = -100;
    let shown = false;

    const place = () => {
      frame = 0;
      const ease = reduced.matches ? 1 : 0.38;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      const lean = reduced.matches
        ? 0
        : Math.max(-12, Math.min(12, (targetX - x) * 0.45));
      const scale = SIZE / 32;
      node.style.transform = `translate3d(${x - NOSE.x * scale}px, ${y - NOSE.y * scale}px, 0) rotate(${lean}deg)`;
      if (Math.hypot(targetX - x, targetY - y) > 0.4) {
        frame = requestAnimationFrame(place);
      }
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const overText = (
        event.target instanceof Element ? event.target : null
      )?.closest("input, textarea, [contenteditable='true']");
      if (overText) {
        node.style.opacity = "0";
        root.classList.remove("cat-cursor");
        return;
      }
      if (!shown) {
        shown = true;
        node.style.opacity = "1";
      }
      root.classList.add("cat-cursor");
      targetX = event.clientX;
      targetY = event.clientY;
      if (!frame) frame = requestAnimationFrame(place);
    };

    const hide = () => {
      shown = false;
      node.style.opacity = "0";
      root.classList.remove("cat-cursor");
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", hide);
    fine.addEventListener("change", hide);
    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("cat-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", hide);
      fine.removeEventListener("change", hide);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[80] text-foreground opacity-0"
      style={{ width: SIZE, height: SIZE }}
    >
      <svg viewBox="0 0 32 32" width={SIZE} height={SIZE} fill="none">
        <g
          stroke="var(--background)"
          strokeWidth="3.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={strokes} />
        </g>
        <g
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={strokes} />
          <circle
            cx="13"
            cy="14.6"
            r="0.85"
            fill="currentColor"
            stroke="none"
          />
          <circle
            cx="19"
            cy="14.6"
            r="0.85"
            fill="currentColor"
            stroke="none"
          />
          <path
            d="M16 16.2 L17.15 17.55 L14.85 17.55 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </svg>
    </div>
  );
}

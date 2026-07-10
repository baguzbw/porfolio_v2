"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, summary, label";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");
    let hovering = false;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let glowX = targetX;
    let glowY = targetY;
    let rafId: number;

    function setHover(next: boolean) {
      if (next === hovering) return;
      hovering = next;
      arrowRef.current?.style.setProperty("--cursor-scale", next ? "1.2" : "1");
      glowRef.current?.style.setProperty("--glow-scale", next ? "1.7" : "1");
    }

    function handleMove(e: MouseEvent) {
      rootRef.current?.style.setProperty("opacity", "1");
      targetX = e.clientX;
      targetY = e.clientY;
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate3d(${targetX - 2}px, ${targetY - 1}px, 0) scale(var(--cursor-scale, 1))`;
      }
      setHover(!!(e.target as Element | null)?.closest(INTERACTIVE_SELECTOR));
    }

    function handleLeaveWindow() {
      rootRef.current?.style.setProperty("opacity", "0");
    }

    function tick() {
      glowX += (targetX - glowX) * 0.14;
      glowY += (targetY - glowY) * 0.14;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%) scale(var(--glow-scale, 1))`;
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-[100] opacity-0 transition-opacity duration-300">
      <div
        ref={glowRef}
        className="fixed left-0 top-0 h-9 w-9 origin-center rounded-full blur-lg transition-[opacity] duration-150 ease-out"
        style={{ backgroundColor: "rgb(var(--accent-rgb) / 0.35)" }}
      />
      <div
        ref={arrowRef}
        className="fixed left-0 top-0 origin-top-left transition-transform duration-100 ease-out"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M3 2L3 16L8 12.3L13.5 9.3Z" style={{ fill: "rgb(var(--accent-rgb))" }} />
        </svg>
      </div>
    </div>
  );
}

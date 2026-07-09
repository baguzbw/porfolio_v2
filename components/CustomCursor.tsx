"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, summary, label";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");
    let hovering = false;

    function setHover(next: boolean) {
      if (next === hovering) return;
      hovering = next;
      arrowRef.current?.style.setProperty("--cursor-scale", next ? "1.2" : "1");
    }

    function handleMove(e: MouseEvent) {
      rootRef.current?.style.setProperty("opacity", "1");
      const { clientX: x, clientY: y } = e;
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate3d(${x - 2}px, ${y - 1}px, 0) scale(var(--cursor-scale, 1))`;
      }
      setHover(!!(e.target as Element | null)?.closest(INTERACTIVE_SELECTOR));
    }

    function handleLeaveWindow() {
      rootRef.current?.style.setProperty("opacity", "0");
    }

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-[100] opacity-0 transition-opacity duration-300">
      <div
        ref={arrowRef}
        className="fixed left-0 top-0 origin-top-left transition-transform duration-100 ease-out"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M3 2L3 18.5L7.5 14.8L10.5 21.3L13.2 20L10.3 13.7L17 13.7Z" fill="#3B82F6" />
        </svg>
      </div>
    </div>
  );
}

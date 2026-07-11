"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      barRef.current?.style.setProperty("transform", `scaleX(${progress})`);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-accent-500 transition-transform duration-100 ease-out"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

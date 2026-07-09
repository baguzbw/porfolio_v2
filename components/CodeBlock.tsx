"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API unavailable — silently ignore
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-neutral-900 px-4 py-3 dark:bg-black/40">
      <code className="overflow-x-auto text-sm text-accent-400">{code}</code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy code"
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  );
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Appends an alpha channel to a 6-digit hex color, e.g. hexAlpha("#6366F1", "1A") -> "#6366F11A" */
export function hexAlpha(hex: string, alpha: string) {
  return `${hex}${alpha}`;
}

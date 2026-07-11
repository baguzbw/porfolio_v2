import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Appends an alpha channel to a 6-digit hex color, e.g. hexAlpha("#6366F1", "1A") -> "#6366F11A" */
export function hexAlpha(hex: string, alpha: string) {
  return `${hex}${alpha}`;
}

/** Converts a 6-digit hex color to an "r, g, b" triplet, e.g. hexToRgb("#F97316") -> "249, 115, 22" */
export function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
}

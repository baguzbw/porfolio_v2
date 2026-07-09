import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Appends an alpha channel to a 6-digit hex color, e.g. hexAlpha("#3B82F6", "1A") -> "#3B82F61A" */
export function hexAlpha(hex: string, alpha: string) {
  return `${hex}${alpha}`;
}

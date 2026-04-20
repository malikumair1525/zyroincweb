import { clsx, type ClassValue } from "clsx";

/** Merge Tailwind class names cleanly */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
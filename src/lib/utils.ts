import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//animation helpers
/** Stagger delay in seconds between each animated section */
export const STAGGER = 0.1;

/** Shorthand: returns the inline style for a staggered animation delay */
export function delay(index: number): React.CSSProperties {
  return { animationDelay: `${index * STAGGER}s` };
}

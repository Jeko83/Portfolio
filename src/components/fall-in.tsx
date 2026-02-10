import { cn } from "@/lib/utils";

/**
 * Wraps children in a fade-in-up animation with staggered delay.
 *
 * Usage:
 *   <FallIn index={0}>First element</FallIn>
 *   <FallIn index={1}>Second element (appears 50ms later)</FallIn>
 *
 * Why `index` as a prop instead of a global counter?
 * - Global counters are fragile (they break with re-renders, concurrent mode, HMR).
 * - Explicit index = parent controls the order = predictable and debuggable.
 * - It's the same pattern t3.gg uses (inline `style={{ animationDelay }}`).
 */

/** How many seconds between each element's animation start */
const STAGGER_SECONDS = 0.2;

type FallInProps = {
  /** Position in the stagger sequence (0 = first, 1 = second, etc.) */
  index: number;
} & React.ComponentProps<"div">;

export function FallIn({ index, className, style, children, ...props }: FallInProps) {
  return (
    <div
      // opacity-0: hidden by default. animate-fade-in-up: fades in + slides up.
      // The animation's `forwards` fill mode keeps it visible after completing.
      className={cn("opacity-0 animate-fade-in-up", className)}
      // Each element waits (index * 50ms) before starting its animation
      style={{ animationDelay: `${index * STAGGER_SECONDS}s`, ...style }}
      // Forward any extra props (id, onClick, aria-*, etc.) to the underlying div
      {...props}
    >
      {children}
    </div>
  );
}

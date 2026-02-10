import { cn } from "@/lib/utils";

/**
 * A navigation link with dashed lines extending on both sides.
 * Looks like:  ---- LinkedIn ----
 *
 * The lines grow/shrink to fill available space.
 * Hover effect is pure CSS (group-hover) — no useState needed.
 *
 * `group` on the parent + `group-hover:` on children lets you
 * change multiple elements when ANY part of the row is hovered.
 */

type MainLinkProps = {
  /** The URL to navigate to */
  href?: string;
  /** Display text for the link */
  label: string;
} & React.ComponentProps<"div">;

export function MainLink({ href, label, className, ...props }: MainLinkProps) {
  return (
    // `group` marks this div as a hover target for all `group-hover:` children
    <div className={cn("group flex items-end gap-2 w-full px-7", className)} {...props}>
      <DashedLine />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        // Default: dim text. On group hover: dimmer. Transition smooths it.
        className="text-sm font-thin text-muted-foreground group-hover:text-foreground transition-colors hover:cursor-pointer"
      >
        {label}
      </a>
      <DashedLine />
    </div>
  );
}
/** Reusable dashed line that fills available horizontal space */
function DashedLine() {
  return (
    <div
      className={cn(
        // h-px: 1px tall line. grow: fill remaining space. min-w-0: can shrink to zero.
        "h-px min-w-0 grow border-t border-dashed mb-1",
        // Default: very faint. On group hover: slightly brighter. Transition smooths it.
        "border-muted-foreground/8 group-hover:border-muted-foreground/13 transition-colors"
      )}
    />
  );
}


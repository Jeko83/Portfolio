import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { delay } from "@/lib/utils";

/**
 * A back/forward navigation button.
 *
 * React Router's `navigate(-1)` and `navigate(1)` use the browser's
 * history stack under the hood (same as browser back/forward buttons).
 *
 * Detecting if back/forward is available:
 * - Back is available when `window.history.state?.idx > 0`
 *   (idx = how many entries deep we are in the history stack)
 * - Forward is not reliably detectable from the browser API,
 *   so we always show the forward button but disable it gracefully.
 */

type NavigationButtonProps = {
  direction: "forward" | "backward";
};

export function NavigationButton({ direction }: NavigationButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="opacity-20 hover:opacity-80 hover:cursor-pointer"
      style={delay(0)}
      onClick={() => navigate(direction === "forward" ? 1 : -1)}
    >
      {direction === "forward" ? (
        <ArrowRightFromLineIcon />
      ) : (
        <ArrowLeftFromLineIcon />
      )}
    </Button>
  );
}

export function HeaderButtons() {
  return (
    <nav className="absolute top-4 flex gap-2 opacity-0 animate-fade-in" style={delay(0)}>
        <NavigationButton direction="backward" />
        <NavigationButton direction="forward" />
    </nav>
  )
}

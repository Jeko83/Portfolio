import selfie from "./assets/selfie.jpg";
import CV from "./assets/Giacomo_Catelan_CV.pdf";
import { FallIn } from "./components/fall-in";
import { MainLink } from "./components/main-link";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card";

/** ─── Link data ─────────────────────────────────────────────────────────────
 *  Defined as a typed array so adding/removing links is a one-line change.
 *  The `as const` makes TypeScript infer literal types instead of `string`.
 */
const LINKS = [
  { href: CV, label: "CV" },
  { href: "https://www.linkedin.com/in/giacomocatelan", label: "LinkedIn" },
  { href: "https://github.com/Jeko83", label: "GitHub" },
  { href: "mailto:giacomocatelan.developer+portfolio@gmail.com", label: "Email" },
] as const;

export default function App() {
  return (
    // Grid: main + footer share one cell. Main centers in full height, footer pins to bottom.
    <div className="grid h-full [grid-template:1fr/1fr]">

      {/* ─── Main content ─────────────────────────────────────────────── */}
      {/* Both children placed in row 1, col 1 (same cell).
          Main centers its content in the full viewport height. */}
      <main className="flex flex-col items-center justify-center [grid-area:1/1]">

        {/* Width container: the ONE place that sets content width.
            max-w-sm = 384px max. px-4 = side padding. All children use w-full. */}
        <div className="w-full max-w-sm px-4">

          {/* ─── Header: name + dashed line + avatar ──────────────────── */}
          <FallIn index={0} className="flex items-center w-full px-6">
            <NameCard />
            {/* Flexible dashed separator between name and avatar.
                grow = fills space, shrink + min-w-0 = can collapse to 0. */}
            <div className="mx-3 h-px shrink min-w-0 grow border-t border-dashed border-muted-foreground/10" />
            <AvatarCard />
          </FallIn>

          {/* ─── Divider ──────────────────────────────────────────────── */}
          <FallIn index={1}>
            <Separator className="my-4" />
          </FallIn>

          {/* ─── Links ────────────────────────────────────────────────── */}
          <FallIn index={2} className="flex flex-col gap-1">
            {/* .map() renders one MainLink per item in the LINKS array.
                `key` helps React track which element is which during re-renders. */}
            {LINKS.map((link) => (
              <MainLink key={link.label} href={link.href} label={link.label} />
            ))}
          </FallIn>
        </div>
      </main>

      {/* ─── Footer ───────────────────────────────────────────────────── */}
      {/* Same grid cell as main, but `self-end` pins it to the bottom.
          It overlays on top of main without affecting main's centering. */}
      <FallIn index={3} className="[grid-area:1/1] self-end">
        <footer className="py-4 text-center">
          <span className="text-xs font-extralight text-muted-foreground/50">
            © 2026 Giacomo Catelan
          </span>
        </footer>
      </FallIn>
    </div>
  );
}

/** Name with hover card showing bio details */
function NameCard() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        {/* `shrink-0` prevents the name from getting squeezed by the flex layout */}
        <Button variant={null} className="px-0 text-xl font-light tracking-normal shrink-0">
          giacomo
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        className="flex flex-col items-center w-auto border-0 shadow-[inset_0_0_20px_rgba(0,0,0,1)]"
      >
        <p className="text-sm font-light">SW Developer</p>
        <p className="text-xs mt-2 font-extralight text-muted-foreground">Born in 1999</p>
        <p className="text-xs mt-2 font-extralight text-muted-foreground">Living in Trento, Italy.</p>
      </HoverCardContent>
    </HoverCard>
  );
}

/** Avatar with hover card showing full photo */
function AvatarCard() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        {/* `shrink-0` prevents the avatar from getting squeezed by the flex layout */}
        <Avatar size="lg" className="opacity-95 shrink-0" aria-label="Giacomo's avatar">
          <AvatarFallback>gc</AvatarFallback>
          <AvatarImage src={selfie} alt="Giacomo's avatar" loading="lazy" />
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        // max-w-[min(10rem,50vw)]: caps at 10rem on large screens, shrinks to 50% viewport on small
        className="flex flex-col items-center border-0 shadow-[inset_0_0_10px_rgba(0,0,0,1)] p-1 max-w-[min(10rem,50vw)]"
      >
        <img src={selfie} alt="Giacomo" loading="lazy" className="rounded-lg" />
        <p className="text-xs font-extralight text-center text-muted-foreground py-1">
          Coast of Rabat, Morocco
        </p>
      </HoverCardContent>
    </HoverCard>
  );
}

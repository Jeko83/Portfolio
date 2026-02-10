import selfie from "./assets/selfie.jpg";
import CV from "./assets/Giacomo_Catelan_CV.pdf";
import { MainLink } from "./components/main-link";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card";
import { delay } from "./lib/utils";
import { HeaderButtons } from "./components/navigation-buttons";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";

const LINKS = [
  { href: CV, label: "CV" },
  { href: "https://www.linkedin.com/in/giacomocatelan", label: "LinkedIn" },
  { href: "https://github.com/Jeko83", label: "GitHub" },
  { href: "mailto:giacomocatelan.developer+portfolio@gmail.com", label: "Email" },
] as const;

export default function App() {
  const navigate = useNavigate();
  return (
    // relative: lets absolute children position relative to this container
    // flex items-center justify-center: centers main content both ways
    <div className="relative h-screen flex items-center justify-center">

      {/* ─── Nav buttons ── pinned to top center ─────────────────────── */}
      <HeaderButtons />

      {/* ─── Main content ── naturally centered by the parent flex ──── */}
      <main className="w-full max-w-md px-4">
        <div className="opacity-0 animate-fade-in flex items-center w-full px-6" style={delay(0)}>
          <NameCard />
          <div className="mx-2 h-px shrink min-w-0 grow border-t border-dashed border-muted-foreground/10" />
          <AvatarCard />
        </div>

        <div className="opacity-0 animate-fade-in" style={delay(1)}>
          <Separator className="my-4" />
        </div>

        <div className="opacity-0 animate-fade-in flex flex-col gap-1" style={delay(2)}>
          {LINKS.map((link) => (
            <MainLink key={link.label} href={link.href} label={link.label} />
          ))}
          <MainLink onClick={() => navigate("/projects")} label="Projects" />
          {/* TODO: Implement about page
            <MainLink onClick={() => navigate("/about")} label="About" /> */
          }
        </div>
      </main>

      <Footer />
    </div>
  );
}

/** Name with hover card showing bio details */
function NameCard() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant={null} className="px-0 text-xl font-light tracking-normal shrink-0">
          giacomo
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        className="w-auto border-0 shadow-[inset_0_0_20px_rgba(0,0,0,1)]"
      >
        <p className="text-sm font-light text-center">SW Developer</p>
        <p className="text-xs mt-2 font-extralight text-muted-foreground text-center">Born in 1999</p>
        <p className="text-xs mt-2 font-extralight text-muted-foreground text-center">Living in Trento, Italy</p>
      </HoverCardContent>
    </HoverCard>
  );
}

/** Avatar with hover card showing full photo */
function AvatarCard() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Avatar size="lg" className="opacity-95 shrink-0" aria-label="Giacomo's avatar">
          <AvatarFallback>gc</AvatarFallback>
          <AvatarImage src={selfie} alt="Giacomo's avatar" loading="lazy" />
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        className="border-0 shadow-[inset_0_0_10px_rgba(0,0,0,1)] p-1 max-w-[min(10rem,50vw)]"
      >
        <img src={selfie} alt="Giacomo" loading="lazy" className="rounded-lg" />
        <p className="text-xs font-extralight text-muted-foreground py-1 text-center">
          Coast of Rabat
        </p>
      </HoverCardContent>
    </HoverCard>
  );
}

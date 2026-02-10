import { delay } from "./lib/utils";


export function Footer() {
    return (
        <footer className="absolute bottom-0 w-full border-t border-muted-foreground/8 py-2 text-center opacity-0 animate-fade-in" style={delay(3)}>
            <span className="text-xs font-extralight text-muted-foreground/50">
                © 2026 Giacomo Catelan. All rights reserved.
            </span>
        </footer>
    );
}
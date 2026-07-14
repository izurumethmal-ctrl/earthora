import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Leaf, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-leaf" />
            <span className="text-lg font-light tracking-[0.3em] uppercase">Earthora</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Handcrafted eco-luxury clothing dyed with plants, made one-of-a-kind.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/collection" className="hover:text-leaf">Collection</Link></li>
            <li><Link to="/about" className="hover:text-leaf">About Us</Link></li>
            <li><Link to="/ingredients" className="hover:text-leaf">Natural Dye Source</Link></li>
            <li><Link to="/contact" className="hover:text-leaf">Contact</Link></li>
            <li><Link to="/gallery" className="hover:text-leaf">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@earthora.co</li>
            <li>+94 76 058 2663</li>
            <li>Wellawaya, Sri Lanka</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Follow</h4>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/ceylon.earthora?igsh=OXpjaGV3cXB1ZnRk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-border/70 p-2.5 text-muted-foreground transition-all hover:text-leaf hover:border-leaf"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/share/1JB47Qn8z4/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-border/70 p-2.5 text-muted-foreground transition-all hover:text-leaf hover:border-leaf"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@madutennakoon?_r=1&_t=ZS-9824iyPl1IT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="rounded-full border border-border/70 p-2.5 text-muted-foreground transition-all hover:text-leaf hover:border-leaf"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-2.84 3.37-2.22V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.55a7.35 7.35 0 0 0 4.32 1.4V8.25a4.278 4.278 0 0 1-2.53-2.43z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@ceylonearthoraJournal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="rounded-full border border-border/70 p-2.5 text-muted-foreground transition-all hover:text-leaf hover:border-leaf"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Isuru Methmal De Silva. Woven with care.</span>
          <span className="tracking-[0.25em] uppercase">Handmade · Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
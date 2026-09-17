import { useEffect, useState } from "react";
import { ExternalLink, Menu, X, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/fritzi-badge.png.asset.json";
import { waLink, DEFAULT_WA_MESSAGE, FERIENWOHNUNG_URL } from "@/lib/contact";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "So funktioniert's" },
  { href: "#ueber-fritzi", label: "Über Fritzi" },
  { href: "#galerie", label: "Galerie" },
  { href: FERIENWOHNUNG_URL, label: "Ferienwohnung", external: true },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <a
        href="#hauptinhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-navy focus:text-cream focus:px-4 focus:py-2 focus:rounded"
      >
        Zum Hauptinhalt springen
      </a>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_-10px_hsl(var(--navy)/0.3)]"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Hauptnavigation"
          className="max-w-7xl mx-auto px-4 md:px-8 h-24 md:h-28 flex items-center justify-between"
        >
          <a href="#top" className="flex items-center" aria-label="Fritzi kocht – Startseite">
            <img
              src={logoAsset.url}
              alt="Fritzi – Ich koche für Sie – Logo"
              width={120}
              height={120}
              className="h-16 md:h-20 w-auto"
            />
          </a>


          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    scrolled ? "text-navy hover:text-gold" : "text-cream hover:text-gold-soft"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {l.label}
                    {l.external && <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-gold text-navy font-semibold px-5 py-2.5 rounded-full hover:bg-gold-hover transition-colors btn-shimmer"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Wunschtermin anfragen
            </a>
            <button
              type="button"
              className={`lg:hidden p-2 rounded ${scrolled ? "text-navy" : "text-cream"}`}
              aria-label="Menü öffnen"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-navy text-cream flex flex-col animate-[fritzi-fade-up_0.3s_ease-out]">
          <div className="flex justify-between items-center h-20 px-4 md:px-8">
            <img src={logoAsset.url} alt="Fritzi kocht mit Gefühl – Logo" width={180} height={60} className="h-12 w-auto" />
            <button aria-label="Menü schließen" onClick={() => setOpen(false)} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            {links.map((l, i) => (
              <li key={l.href} className="reveal is-visible" style={{ animationDelay: `${i * 80}ms` }}>
                <a
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl hover:text-gold transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    {l.label}
                    {l.external && <ExternalLink aria-hidden="true" className="h-5 w-5" />}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-full"
              >
                <MessageCircle className="w-4 h-4" />
                Wunschtermin anfragen
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}


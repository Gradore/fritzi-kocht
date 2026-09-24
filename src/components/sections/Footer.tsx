import { Link } from "@tanstack/react-router";
import { ExternalLink, Instagram, MessageCircle, Phone, Mail } from "lucide-react";
import logoAsset from "@/assets/fritzi-wordmark.png.asset.json";
import {
  waLink,
  DEFAULT_WA_MESSAGE,
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL,
  INSTAGRAM_URL,
  FERIENWOHNUNG_URL,
} from "@/lib/contact";

export function Footer() {
  return (
    <footer>
      {/* Top: light section with prominent logo */}
      <div className="bg-cream border-t border-navy/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 flex flex-col items-center text-center">
          <img
            src={logoAsset.url}
            alt="Fritzi – Koch mit Geschmack – Logo"
            width={600}
            height={400}
            className="h-28 md:h-36 w-auto mb-5"
          />
          <p className="font-serif italic text-2xl md:text-3xl text-navy">Kocht mit Gefühl.</p>
          <p className="mt-3 text-sm md:text-base max-w-md text-navy">
            Privatkoch & Catering – regional, saisonal und mit Liebe zum Detail.
          </p>
        </div>
      </div>

      {/* Bottom: dark section with links */}
      <div className="bg-navy text-cream-2/90 pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-cream font-serif text-lg mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#leistungen" className="hover:text-gold-soft">Leistungen</a></li>
              <li><a href="/#ablauf" className="hover:text-gold-soft">So funktioniert's</a></li>
              <li><a href="/#ueber-fritzi" className="hover:text-gold-soft">Über Fritzi</a></li>
              <li><a href="/#galerie" className="hover:text-gold-soft">Galerie</a></li>
              <li>
                <a href={FERIENWOHNUNG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold-soft">
                  Ferienwohnung Familie Fritz <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </li>
              <li><a href="/#faq" className="hover:text-gold-soft">FAQ</a></li>
              <li><a href="/#kontakt" className="hover:text-gold-soft">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-cream font-serif text-lg mb-3">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold-soft">
                  <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 hover:text-gold-soft">
                  <Phone className="w-4 h-4" aria-hidden="true" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-gold-soft">
                  <Mail className="w-4 h-4" aria-hidden="true" /> {EMAIL}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Fritzi auf Instagram" className="inline-flex items-center gap-2 hover:text-gold-soft">
                  <Instagram className="w-4 h-4" aria-hidden="true" /> @fritzi_kocht_
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-cream font-serif text-lg mb-3">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/impressum" className="hover:text-gold-soft">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-gold-soft">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        {/* Gradore credit bar */}
        <div className="max-w-6xl mx-auto px-5 md:px-8 mt-12 pt-8 border-t border-cream/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-cream order-2 md:order-1">© 2026 Fritzi kocht</p>

          <a
                    href="https://gradore.de/?utm_source=client_footer&utm_medium=referral&utm_campaign=made_by_gradore"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Made by Gradore – Webdesign aus Rostock"
                    data-gradore-credit="true"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", color: "inherit", textDecoration: "none", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em" }}
                  >
                    <img src="/gradore-mark.svg" alt="Gradore Logo" width="30" height="25" loading="lazy" decoding="async" style={{ width: "30px", height: "25px", objectFit: "contain" }} />
                    <span>Made by Gradore</span>
                  </a>

        </div>
      </div>
    </footer>
  );
}



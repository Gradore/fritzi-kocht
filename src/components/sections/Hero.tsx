import { MessageCircle, Phone, ChevronDown, Sprout, HeartHandshake, Sparkles, Leaf } from "lucide-react";
import heroImg from "@/assets/fritzi/kaese-obst-brett-rustikal-im-garten.jpg";
import logoAsset from "@/assets/fritzi-badge.png.asset.json";
import { waLink, DEFAULT_WA_MESSAGE, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const chips = [
  { icon: Leaf, label: "Regional" },
  { icon: Sprout, label: "Saisonal" },
  { icon: Sparkles, label: "Qualitativ" },
  { icon: HeartHandshake, label: "Lecker" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden text-cream"
      aria-label="Willkommen bei Fritzi kocht"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Rustikales Käse- und Obstbrett mit essbaren Blüten im Garten – Catering von Privatkoch Fritzi"
          width={2400}
          height={1600}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/85 via-navy/55 to-navy/25" />
      </div>

      <div id="hauptinhalt" className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-16 min-h-[100svh] flex flex-col items-center justify-center text-center">
        <img
          src={logoAsset.url}
          alt="Fritzi kocht – Privatkoch & Catering"
          width={520}
          height={520}
          fetchPriority="high"
          decoding="async"
          className="w-56 sm:w-64 md:w-80 lg:w-96 h-auto mb-4 drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
        />
        <p className="text-gold-soft uppercase tracking-[0.28em] text-xs md:text-sm font-medium mb-5">
          Privatkoch & Catering — regional. saisonal. mit Gefühl.
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl">
          Sie feiern.
          <br />
          <span className="text-gold-soft">Fritzi kocht.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-cream-2/90">
          Vom Dinner zu zweit bis zum Firmenevent: Ich koche für Sie – mit saisonalen Zutaten
          aus der Region, angerichtet mit Liebe zum Detail. Sie genießen Ihre Gäste, ich kümmere
          mich um den Rest.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3.5 rounded-full hover:bg-gold-hover transition-colors"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Jetzt Wunschtermin anfragen
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center gap-2 border border-cream/60 text-cream px-6 py-3.5 rounded-full hover:bg-cream/10 transition-colors"
          >
            Leistungen entdecken
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-cream-2/85">
          <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 hover:text-gold-soft">
            <Phone className="w-4 h-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <span aria-hidden="true">·</span>
          <span>Antwort meist innerhalb von 24 h</span>
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {chips.map((c) => (
            <li
              key={c.label}
              className="inline-flex items-center gap-2 bg-cream/10 border border-cream/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
            >
              <c.icon className="w-4 h-4 text-gold-soft" aria-hidden="true" />
              {c.label}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#usp"
        aria-label="Weiter scrollen"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/80 hover:text-gold-soft transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}


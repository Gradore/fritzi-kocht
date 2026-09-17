import { MessageCircle, Phone } from "lucide-react";
import bg from "@/assets/fritzi/fritzi-kocht-am-lagerfeuer.jpg";
import { waLink, DEFAULT_WA_MESSAGE, PHONE_TEL, PHONE_DISPLAY } from "@/lib/contact";

export function FinalCta() {
  return (
    <section className="relative isolate py-24 md:py-32 text-cream overflow-hidden" aria-label="Termin anfragen">
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1200}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-5xl leading-tight">
          Gute Termine sind wie gute Zutaten:
          <br />
          <span className="text-gold-soft">schnell vergriffen.</span>
        </h2>
        <p className="mt-5 text-cream-2/85 text-lg">
          Schreiben Sie mir unverbindlich – gemeinsam machen wir Ihren Anlass unvergesslich.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer glow-pulse inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3.5 rounded-full hover:bg-gold-hover transition-colors"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Wunschtermin per WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 border border-cream/60 text-cream px-6 py-3.5 rounded-full hover:bg-cream/10 transition-colors"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Oder anrufen: {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}


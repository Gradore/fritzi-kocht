import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "./common";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { waLink, SERVICE_WA_MESSAGES } from "@/lib/contact";
import img1 from "@/assets/fritzi/gedeckter-tisch-tulpen-vorspeise.jpg";
import img2 from "@/assets/fritzi/fingerfood-reihen-im-gras.jpg";
import img3 from "@/assets/fritzi/carpaccio-mit-bluten-und-tomaten.jpg";
import img4 from "@/assets/fritzi/fritzi-kocht-am-lagerfeuer.jpg";

const services = [
  {
    title: "Privatdinner bei Ihnen zuhause",
    img: img1,
    pos: "object-bottom",
    alt: "Gedeckter Gartentisch mit Spargelrisotto, Weißwein und Tulpen – Privatdinner mit Privatkoch Fritzi",
    body: "Ein liebevoll komponiertes Menü in Ihrem Zuhause – ohne Aufwand für Sie. Ich bringe alles mit und lasse Ihre Küche sauber zurück.",
    bullets: ["Mehrgängige Menüs nach Ihren Wünschen", "Weinbegleitung auf Anfrage", "Küche bleibt aufgeräumt & sauber"],
    wa: SERVICE_WA_MESSAGES.privatdinner,
  },
  {
    title: "Catering & Buffets",
    img: img2,
    alt: "Buntes Fingerfood auf Holzbrett – belegte Brote mit Roastbeef, Lachs und Kräutern vom Catering Fritzi",
    body: "Ob Geburtstag, Hochzeit oder Gartenfest – vom Fingerfood bis zum großen Buffet gestalte ich Ihre Feier kulinarisch.",
    bullets: ["Fingerfood, Grazing Boards & Etageren", "Für Feiern jeder Größe", "Persönliche Menü-Beratung inklusive"],
    wa: SERVICE_WA_MESSAGES.catering,
  },
  {
    title: "Firmenevents & besondere Anlässe",
    img: img3,
    alt: "Rinder-Carpaccio mit Burrata, gelben Tomaten und essbaren Blüten – Fine-Dining für Firmenevents",
    body: "Teamevents, Jubiläen oder Weihnachtsfeiern verdienen mehr als Standard-Catering. Ich koche das, woran sich Ihr Team erinnert.",
    bullets: ["Teamevents & Jubiläen", "Weihnachtsfeiern & Empfänge", "Auf Wunsch mit Getränkekonzept"],
    wa: SERVICE_WA_MESSAGES.firmen,
  },
  {
    title: "Live-Cooking & Feuerküche",
    img: img4,
    alt: "Privatkoch Fritzi kocht konzentriert über offenem Feuer – Live-Cooking für Events",
    body: "Kochen als Erlebnis: am offenen Feuer, direkt vor Ihren Gästen. Duft, Wärme und ehrliches Handwerk zum Zuschauen.",
    bullets: ["Kochen am offenen Feuer", "Interaktives Erlebnis für Gäste", "Perfekt für draußen im Grünen"],
    wa: SERVICE_WA_MESSAGES.livecooking,
  },
];

export function Leistungen() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: true, threshold: 0.1 });
  return (
    <section id="leistungen" className="bg-cream py-20 md:py-28" aria-labelledby="leistungen-title">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Leistungen"
          title="Was darf ich für Sie kochen?"
          subtitle="Vier Formate, ein Anspruch: dass Ihre Gäste und Sie noch Wochen später über das Essen sprechen."
        />
        <h2 id="leistungen-title" className="sr-only">Leistungen</h2>
        <div ref={ref} className="grid gap-6 md:gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="reveal card-lift bg-card rounded-2xl overflow-hidden shadow-[0_8px_30px_-15px_hsl(var(--navy)/0.2)] border border-border/60 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full object-cover ${("pos" in s && s.pos) || "object-center"}`}
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-navy mb-3">{s.title}</h3>
                <p className="text-foreground/75 mb-4">{s.body}</p>
                <ul className="space-y-2 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(s.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 text-gold font-medium hover:gap-2 transition-all group"
                >
                  Anfrage senden
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


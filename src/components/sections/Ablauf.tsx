import { MessageCircle } from "lucide-react";
import { SectionHeading } from "./common";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/contact";

const steps = [
  {
    n: "01",
    title: "Anfrage senden",
    body: "Per WhatsApp oder Anruf, unverbindlich und kostenlos. Erzählen Sie mir kurz von Ihrem Anlass.",
  },
  {
    n: "02",
    title: "Menü gemeinsam planen",
    body: "In einem persönlichen Gespräch klären wir Wünsche, Allergien und Budget. Sie bekommen ein transparentes Festpreis-Angebot.",
  },
  {
    n: "03",
    title: "Zurücklehnen & genießen",
    body: "Einkauf, Kochen, Anrichten – alles aus einer Hand. Sie sind bei Ihren Gästen, ich in der Küche.",
  },
];

export function Ablauf() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: true, threshold: 0.1 });
  return (
    <section
      id="ablauf"
      className="relative bg-navy text-cream py-20 md:py-28 overflow-hidden"
      aria-labelledby="ablauf-title"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="So funktioniert's"
          title="In drei Schritten zu Ihrem Fest"
          subtitle="Kein Vertrieb, kein Small-Talk-Marathon: ein kurzer Austausch, ein klares Angebot, ein unvergesslicher Abend."
          invert
        />
        <h2 id="ablauf-title" className="sr-only">So funktioniert's</h2>

        <div ref={ref} className="relative grid gap-10 md:grid-cols-3 mt-10">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gold/40 line-draw reveal"
          />
          {steps.map((s) => (
            <div key={s.n} className="reveal relative text-center md:text-left">
              <div className="mx-auto md:mx-0 mb-5 w-16 h-16 rounded-full bg-gold text-navy flex items-center justify-center font-serif text-xl font-bold shadow-[0_10px_30px_-10px_hsl(var(--gold)/0.6)]">
                {s.n}
              </div>
              <h3 className="font-serif text-2xl text-cream mb-2">{s.title}</h3>
              <p className="text-cream-2/80 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-cream-2/85 mb-5">Klingt gut? Dann lassen Sie uns starten.</p>
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3.5 rounded-full hover:bg-gold-hover transition-colors"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Unverbindlich per WhatsApp anfragen
          </a>
        </div>
      </div>
    </section>
  );
}


import { Sprout, HeartHandshake, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const items = [
  {
    icon: HeartHandshake,
    title: "Ein Menü, das sich nach Ihnen richtet",
    body: "Ihre Wünsche, Ihr Anlass, Ihre Gäste – jedes Menü plane ich persönlich mit Ihnen.",
  },
  {
    icon: Sprout,
    title: "Aus der Region, mitten aus der Saison",
    body: "Ich koche mit dem, was hier gerade wächst – frisch, ehrlich und mit kurzen Wegen. Und wenn es doch mal eine Süßkartoffel oder Kokosmilch sein darf, findet auch die ihren Platz auf Ihrem Menü.",
  },
  {
    icon: Sparkles,
    title: "Restaurant-Niveau bei Ihnen zuhause",
    body: "Als gelernter Koch bringe ich Handwerk, Präzision und Freude an schönen Tellern mit.",
  },
];

export function UspBar() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: true });
  return (
    <section id="usp" className="bg-cream py-16 md:py-24" aria-label="Vorteile">
      <div ref={ref} className="max-w-6xl mx-auto px-5 md:px-8 grid gap-8 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="reveal text-center md:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cornflower/15 text-cornflower mb-4">
              <it.icon className="w-7 h-7" aria-hidden="true" strokeWidth={1.6} />
            </div>
            <h3 className="font-serif text-xl text-navy mb-2">{it.title}</h3>
            <p className="text-foreground/75">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


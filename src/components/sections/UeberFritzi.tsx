import { Instagram, Facebook, Leaf, Sprout, Sparkles, HeartHandshake } from "lucide-react";
import { SectionHeading } from "./common";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/contact";
import portrait from "@/assets/fritzi/fritzi-sitzt-laechelnd-auf-treppe.jpg";
import polaroid from "@/assets/fritzi/hand-haelt-einweckglas-mit-mohnblumen.jpg";

const values = [
  { icon: Leaf, label: "Regional" },
  { icon: Sprout, label: "Saisonal" },
  { icon: Sparkles, label: "Qualitativ" },
  { icon: HeartHandshake, label: "Lecker" },
];

export function UeberFritzi() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: true, threshold: 0.1 });
  return (
    <section id="ueber-fritzi" className="bg-cream py-20 md:py-28 overflow-x-clip" aria-labelledby="ueber-title">
      <div ref={ref} className="max-w-6xl mx-auto px-5 md:px-8 grid gap-12 md:gap-16 md:grid-cols-2 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-3 md:-inset-4 rounded-3xl border border-gold/40 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" aria-hidden="true" />
          <img
            src={portrait}
            alt="Privatkoch Fritzi sitzt lachend auf einer Holztreppe – Ihr Koch für private Feiern"
            width={900}
            height={1100}
            loading="lazy"
            decoding="async"
            className="relative rounded-2xl w-full h-auto object-cover shadow-[0_20px_60px_-20px_hsl(var(--navy)/0.4)]"
          />
          <div className="absolute -bottom-6 -right-2 md:-right-6 w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden border-[6px] border-cream shadow-xl rotate-3">
            <img
              src={polaroid}
              alt="Hand hält Einweckglas mit hausgemachtem Granola vor Mohnblumen – Hausgemachtes von Fritzi"
              width={300}
              height={300}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="reveal">
          <SectionHeading
            eyebrow="Über Fritzi"
            title="Der Koch hinter dem Kornblumen-Logo"
            center={false}
          />
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Ich bin Fritzi – gelernter Koch aus Leidenschaft. In meiner Küche entstehen keine
              Gerichte nach Schema, sondern nach Gefühl: für die Jahreszeit, für die Zutat, für
              den Moment, in dem Ihre Gäste den ersten Bissen probieren.
            </p>
            <p>
              Meine Zutaten kommen aus der Region und aus der Saison. Vieles mache ich selbst –
              vom Blütensalz über eingelegtes Gemüse bis zum knusprigen Granola. Das braucht Zeit,
              aber genau das schmeckt man.
            </p>
            <p>
              Die Kornblume in meinem Logo steht dabei für das, was mir wichtig ist: ehrlich,
              natürlich, heimisch. Nicht laut, aber schön.
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {values.map((v) => (
              <li
                key={v.label}
                className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 px-3.5 py-1.5 rounded-full text-sm text-navy"
              >
                <v.icon className="w-4 h-4 text-cornflower" aria-hidden="true" />
                {v.label}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-serif italic text-2xl text-navy">– Fritzi</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-navy/25 text-navy px-5 py-2.5 rounded-full hover:bg-navy hover:text-cream transition-colors"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
              @fritzi_kocht_ auf Instagram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-navy/25 text-navy px-5 py-2.5 rounded-full hover:bg-navy hover:text-cream transition-colors"
            >
              <Facebook className="w-4 h-4" aria-hidden="true" />
              Fritzi kocht auf Facebook
            </a>
          </div>
        </div>
      </div>
      <h2 id="ueber-title" className="sr-only">Über Fritzi</h2>
    </section>
  );
}


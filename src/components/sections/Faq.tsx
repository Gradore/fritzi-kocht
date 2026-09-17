import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./common";

export const FAQ_ITEMS = [
  {
    q: "Was kostet ein Privatkoch bzw. Catering?",
    a: "Das lässt sich pauschal nicht sagen – der Preis richtet sich nach Gästezahl, Menü, Aufwand und Anfahrt. Nach einem kurzen Gespräch bekommen Sie von mir ein unverbindliches, transparentes Festpreis-Angebot.",
  },
  {
    q: "Für welche Anlässe kochen Sie?",
    a: "Vom romantischen Dinner zu zweit über Geburtstage, Familienfeiern und Hochzeiten bis hin zu Firmenevents, Jubiläen und Weihnachtsfeiern. Wenn es Ihnen wichtig ist, ist es mir wichtig.",
  },
  {
    q: "Für wie viele Gäste kochen Sie?",
    a: "Vom Dinner zu zweit bis zur großen Feier. Größere Gruppen plane ich mit ausreichend Vorlauf, damit Qualität und Timing stimmen.",
  },
  {
    q: "Kochen Sie auch vegetarisch, vegan oder bei Allergien?",
    a: "Selbstverständlich. Vegetarische und vegane Menüs sind für mich keine Kompromisse, sondern eigene Menüs mit eigenem Charakter. Allergien und Unverträglichkeiten planen wir gemeinsam ein.",
  },
  {
    q: "Wie weit im Voraus sollte ich anfragen?",
    a: "So früh wie möglich. Als Ein-Mann-Betrieb sind meine Termine – vor allem an Wochenenden und im Sommer – begrenzt. Fragen Sie lieber zu früh als zu spät.",
  },
  {
    q: "Wo kochen Sie?",
    a: "Bei Ihnen zuhause, in Ihrer Location oder draußen im Grünen – z. B. beim Live-Cooking am offenen Feuer. Was ich brauche, bringe ich mit.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-cream py-20 md:py-28" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Häufige Fragen"
          subtitle="Was Sie am häufigsten wissen möchten – ehrlich beantwortet."
        />
        <h2 id="faq-title" className="sr-only">Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-navy/10">
              <AccordionTrigger className="text-left font-serif text-lg text-navy hover:text-gold hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}


import { BedDouble, ExternalLink, Flame, Mail, MessageCircle, PawPrint, Phone, Trees } from "lucide-react";
import { SectionHeading } from "./common";
import { FERIENWOHNUNG_URL, PHONE_DISPLAY, PHONE_TEL, mailtoLink, waLink } from "@/lib/contact";
import fewo1 from "@/assets/fritzi/ferienwohnung-1.jpg";
import fewo2 from "@/assets/fritzi/ferienwohnung-2.jpg";
import fewo3 from "@/assets/fritzi/ferienwohnung-3.jpg";

const AIRBNB_URL = "https://www.airbnb.com/h/bauernhof-urlaub";

const FEWO_WA_MESSAGE =
  "Hallo Fritzi, ich interessiere mich für Ihre Ferienwohnung auf dem Bauernhof in Ganzlin. Sind folgende Termine frei?";

const facts = [
  { icon: BedDouble, label: "Eigenes kleines Haus für bis zu 5 Gäste" },
  { icon: Trees, label: "Eingezäunter Garten in Ganzlin bei Plau am See" },
  { icon: PawPrint, label: "Tiere auf dem Hof und Haustiere willkommen" },
];

export function Ferienwohnung() {
  return (
    <section id="ferienwohnung" className="bg-navy py-20 text-cream md:py-28 overflow-x-clip">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Ferien bei Familie Fritz"
          title="Urlaub bei Familie Fritz – mit Genuss auf Wunsch"
          subtitle="Ein eigenes kleines Haus mit eingezäuntem Garten in Ganzlin bei Plau am See – für bis zu fünf Gäste, mitten im ruhigen Hofleben."
          invert
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img
              src={fewo1}
              alt="Ländliche Ferienwohnung auf dem Bauernhof in Ganzlin – gemütlicher Wohnbereich"
              width={1200}
              height={1600}
              loading="lazy"
              decoding="async"
              className="col-span-2 h-64 w-full rounded-xl object-cover shadow-lg sm:col-span-1 sm:row-span-2 sm:h-full"
            />
            <img
              src={fewo2}
              alt="Blick auf den Hof mit Hühnern und Enten – Bauernhof-Urlaub in Mecklenburg"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-36 w-full rounded-xl object-cover shadow-lg sm:h-48"
            />
            <img
              src={fewo3}
              alt="Garten der Ferienwohnung mit Sitzplatz und Grillbereich"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-36 w-full rounded-xl object-cover shadow-lg sm:h-48"
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-cream-2/90">
              Hier wohnen Sie für sich und erleben zugleich das Leben auf dem Hof. Tiere gehören dazu,
              Haustiere sind willkommen. Babybett und Hochstuhl stehen auf Anfrage bereit.
            </p>

            <ul className="mt-6 grid gap-3">
              {facts.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3 text-sm text-cream-2/90">
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-soft" strokeWidth={1.5} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 border-l-2 border-gold pl-5">
              <h3 className="font-serif text-xl text-cream">Ihr Kocherlebnis auf dem Hof</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-2/85">
                Private Cooking oder ein Grillabend mit Profikoch Fritzi können separat angefragt und
                zugebucht werden. Sie sind nicht im Aufenthalt enthalten; Termin und Umfang stimmen
                wir persönlich mit Ihnen ab.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={FERIENWOHNUNG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy transition-colors hover:bg-gold-hover"
              >
                Ferienwohnung ansehen
                <ExternalLink aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="#kontakt"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold-soft bg-cream px-6 py-3.5 font-semibold text-navy transition-colors hover:bg-gold-soft"
              >
                <Flame aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
                Kocherlebnis anfragen
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-cream-2/80">
              <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 underline decoration-gold/70 underline-offset-4 hover:text-gold-soft">Airbnb <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /></a>
              <a href={waLink(FEWO_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 hover:text-gold-soft"><MessageCircle aria-hidden="true" className="h-4 w-4" /> WhatsApp</a>
              <a href={mailtoLink("Anfrage Ferienwohnung Bauernhof-Urlaub", FEWO_WA_MESSAGE)} className="inline-flex min-h-11 items-center gap-1.5 hover:text-gold-soft"><Mail aria-hidden="true" className="h-4 w-4" /> E-Mail</a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex min-h-11 items-center gap-1.5 hover:text-gold-soft"><Phone aria-hidden="true" className="h-4 w-4" /> {PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


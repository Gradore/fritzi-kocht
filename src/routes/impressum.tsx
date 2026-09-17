import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { EMAIL, PHONE_DISPLAY } from "@/lib/contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Fritzi kocht" },
      { name: "description", content: "Impressum von Fritzi kocht – Privatkoch & Catering. Anbieterkennzeichnung nach § 5 TMG. Website umgesetzt von Gradore UG." },
      { property: "og:title", content: "Impressum – Fritzi kocht" },
      { property: "og:description", content: "Impressum von Fritzi kocht – Privatkoch & Catering. Anbieterkennzeichnung nach § 5 TMG." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://fritz.gradore.de/impressum" },
      { property: "og:locale", content: "de_DE" },
    ],
    links: [{ rel: "canonical", href: "https://fritz.gradore.de/impressum" }],
  }),

  component: Impressum,
});

function Impressum() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <main className="max-w-3xl mx-auto px-5 md:px-8 pt-24 pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-navy hover:text-gold mb-8">
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-8">Impressum</h1>

        <section className="prose prose-navy max-w-none space-y-6 text-foreground/85">
          <div>
            <h2 className="font-serif text-xl text-navy">Angaben gemäß § 5 TMG</h2>
            <p>
              Hans-Rudolf Manfred Fritz
              <br />
              Einzelunternehmer
              <br />
              Röbeler Str. 54
              <br />
              19395 Ganzlin
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy">Kontakt</h2>
            <p>
              Telefon: {PHONE_DISPLAY}
              <br />
              E-Mail: {EMAIL}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy">Umsatzsteuer</h2>
            <p>
              Kleinunternehmer gemäß § 19 UStG – es wird keine Umsatzsteuer ausgewiesen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Hans-Rudolf Manfred Fritz
              <br />
              Röbeler Str. 54
              <br />
              19395 Ganzlin
            </p>
          </div>


          <div>
            <h2 className="font-serif text-xl text-navy">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy">Website & technische Umsetzung</h2>
            <p>
              Konzeption, Design und technische Umsetzung dieser Website:{" "}
              <a
                href="https://gradore.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline"
              >
                Gradore UG (haftungsbeschränkt)
              </a>
              , https://gradore.de.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


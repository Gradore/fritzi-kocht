import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { EMAIL, PHONE_DISPLAY } from "@/lib/contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Fritzi kocht" },
      { name: "description", content: "Datenschutzerklärung von Fritzi kocht: wie Anfragen für Privatkoch- und Catering-Termine per Kontaktformular, E-Mail und WhatsApp verarbeitet werden. Umgesetzt von Gradore UG." },
      { property: "og:title", content: "Datenschutz – Fritzi kocht" },
      { property: "og:description", content: "Datenschutzerklärung von Fritzi kocht: Verarbeitung von Anfragen für Privatkoch- und Catering-Termine per Kontaktformular, E-Mail und WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://fritz.gradore.de/datenschutz" },
      { property: "og:locale", content: "de_DE" },
    ],
    links: [{ rel: "canonical", href: "https://fritz.gradore.de/datenschutz" }],
  }),

  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <main className="max-w-3xl mx-auto px-5 md:px-8 pt-24 pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-navy hover:text-gold mb-8">
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-8">Datenschutzerklärung</h1>

        <section className="space-y-8 text-foreground/85 leading-relaxed">
          <div>
            <h2 className="font-serif text-xl text-navy mb-2">1. Verantwortlicher</h2>
            <p>
              Hans-Rudolf Manfred Fritz (Einzelunternehmer)
              <br />
              Röbeler Str. 54
              <br />
              19395 Ganzlin
              <br />
              Telefon: {PHONE_DISPLAY}
              <br />
              E-Mail: {EMAIL}
            </p>
          </div>


          <div>
            <h2 className="font-serif text-xl text-navy mb-2">2. Keine Cookies, kein Tracking</h2>
            <p>
              Diese Website verwendet keine Cookies, kein Web-Analyse-Tool und keine
              Werbe-Tracker. Es werden keine personenbezogenen Daten automatisiert erhoben oder
              an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy mb-2">3. Kontaktaufnahme</h2>
            <p>
              Wenn Sie mich per WhatsApp, E-Mail oder Telefon kontaktieren, werden Ihre Angaben
              zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir
              gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b bzw. f DSGVO.
            </p>
            <p className="mt-2">
              <strong>Hinweis WhatsApp:</strong> Nachrichten über WhatsApp werden über die Server
              von Meta Platforms Ireland Ltd. übertragen. Für die Datenverarbeitung im Rahmen von
              WhatsApp ist Meta verantwortlich. Details:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline"
              >
                WhatsApp Datenschutz
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy mb-2">4. Kontaktformular</h2>
            <p>
              Das Kontaktformular auf dieser Website speichert Ihre Eingaben ausschließlich
              lokal in Ihrem Browser und öffnet nach Absenden Ihre WhatsApp- bzw. E-Mail-App
              mit dem vorbereiteten Text. Es findet keine serverseitige Verarbeitung durch mich
              statt.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy mb-2">5. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet. Der Anbieter
              verarbeitet aus technischen Gründen Server-Logdaten (IP-Adresse, Datum, Uhrzeit,
              aufgerufene Seite). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
              [PLATZHALTER: Name & Anschrift des Hosters ggf. hier ergänzen]
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy mb-2">6. Externe Links (Instagram)</h2>
            <p>
              Diese Website verlinkt auf mein Instagram-Profil. Erst wenn Sie den Link
              anklicken, werden Daten an Meta übertragen. Für die Datenverarbeitung dort ist
              Meta verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy mb-2">7. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung
              (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
              Widerspruch (Art. 21) DSGVO. Beschwerden können Sie bei einer Datenschutz-Aufsichtsbehörde
              einreichen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy mb-2">8. Auftragsverarbeitung / Dienstleister</h2>
            <p>
              Die technische Umsetzung und Betreuung dieser Website erfolgt durch die{" "}
              <a
                href="https://gradore.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline"
              >
                Gradore UG (haftungsbeschränkt)
              </a>
              . Die Zusammenarbeit ist über einen Auftragsverarbeitungsvertrag gemäß Art. 28
              DSGVO geregelt.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy mb-2">9. Aktualität</h2>
            <p>Stand dieser Datenschutzerklärung: 2026.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


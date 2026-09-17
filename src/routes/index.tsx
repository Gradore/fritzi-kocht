import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { UspBar } from "@/components/sections/UspBar";
import { Leistungen } from "@/components/sections/Leistungen";
import { Ablauf } from "@/components/sections/Ablauf";
import { UeberFritzi } from "@/components/sections/UeberFritzi";
import { Galerie } from "@/components/sections/Galerie";
import { Ferienwohnung } from "@/components/sections/Ferienwohnung";
import { Faq, FAQ_ITEMS } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Kontakt } from "@/components/sections/Kontakt";
import { Footer } from "@/components/sections/Footer";
import heroImg from "@/assets/fritzi/kaese-obst-brett-rustikal-im-garten.jpg";


const SITE_URL = "https://fritz.gradore.de";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const TITLE = "Fritzi kocht – Privatkoch & Catering, regional & saisonal";
const DESC =
  "Fritzi ist Ihr Privatkoch & Caterer: regionale, saisonale Küche für Privatdinner, Feiern, Firmenevents und Live-Cooking. Jetzt Wunschtermin per WhatsApp anfragen.";

const foodEstablishment = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  additionalType: "https://schema.org/Caterer",
  name: "Fritzi kocht",
  description: DESC,
  telephone: "+4915228820754",
  email: "fritzi.kocht@gmail.com",
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  sameAs: ["https://www.instagram.com/fritzi_kocht_"],
  servesCuisine: "Regionale saisonale Küche",
  priceRange: "€€",
  areaServed: "Deutschland",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fritzi kocht",
  url: `${SITE_URL}/`,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Rustikales Käse- und Obstbrett im Garten – Catering von Privatkoch Fritzi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "theme-color", content: "#16213E" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],

    scripts: [
      { type: "application/ld+json", children: JSON.stringify(foodEstablishment) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <Navbar />
      <main>
        <Hero />
        <UspBar />
        <Leistungen />
        <Ferienwohnung />
        <Ablauf />
        <UeberFritzi />
        <Galerie />
        <Faq />
        <FinalCta />
        <Kontakt />
      </main>
      <Footer />
    </div>
  );
}


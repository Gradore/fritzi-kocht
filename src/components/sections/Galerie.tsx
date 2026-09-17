import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./common";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import img1 from "@/assets/fritzi/etagere-vorspeisen-buffet.jpg";
import img2 from "@/assets/fritzi/fritzi-portraet-in-der-kueche.jpg";
import img3 from "@/assets/fritzi/kaese-obst-brett-rustikal-im-garten.jpg";
import img4 from "@/assets/fritzi/fingerfood-reihen-im-gras.jpg";
import img5 from "@/assets/fritzi/gedeckter-tisch-tulpen-vorspeise.jpg";
import img6 from "@/assets/fritzi/maultaschen-teller-vorspeise.jpg";
import img7 from "@/assets/fritzi/fritzi-kocht-am-lagerfeuer.jpg";
import img8 from "@/assets/fritzi/fritzi-sitzt-laechelnd-auf-treppe.jpg";
import imgDessertRose from "@/assets/fritzi/dessert-mit-rosenbluten-am-tisch.jpg";
import imgCremeBrulee from "@/assets/fritzi/creme-brulee-nahaufnahme.jpg";
import imgBluetenSalz from "@/assets/fritzi/glas-zwischen-bluetenmix-lila.jpg";
import imgBeerentarte from "@/assets/fritzi/beerentarte-aufsicht.jpg";
import imgCremeBruleeJohannis from "@/assets/fritzi/creme-brulee-mit-johannisbeeren.jpg";
import imgEinweckGruen from "@/assets/fritzi/einweckglas-im-gruenen-nahaufnahme.jpg";
import imgErdbeerGebaeck from "@/assets/fritzi/erdbeer-gebaeck-auf-holzbrett.jpg";
import imgErdbeerBasilikum from "@/assets/fritzi/erdbeeren-mit-basilikum-auf-teller.jpg";
import imgFruchtGlas from "@/assets/fritzi/fruchtdessert-im-glas.jpg";
import imgGemueseTarte from "@/assets/fritzi/gemuesetarte-geometrisches-muster.jpg";
import imgGetraenkGruen from "@/assets/fritzi/getraenk-im-glas-zwischen-gruenpflanzen.jpg";
import imgBluetenhonigPhlox from "@/assets/fritzi/glas-bluetenhonig-zwischen-phlox.jpg";
import imgGranolaWiese from "@/assets/fritzi/glas-granola-auf-stein-wiese.jpg";
import imgGlasPetunien from "@/assets/fritzi/glas-zwischen-blauen-petunien.jpg";
import imgGlasPinkPhlox from "@/assets/fritzi/glas-zwischen-pinken-phlox-bluten.jpg";
import imgHimbeerenMoos from "@/assets/fritzi/himbeeren-granatapfelkerne-auf-moos.jpg";
import imgKapuzinerkresse from "@/assets/fritzi/kapuzinerkresse-mit-birne-in-oel.jpg";
import imgKuerbissuppe from "@/assets/fritzi/kuerbissuppe-mit-basilikum.jpg";
import imgPastaZitrone from "@/assets/fritzi/pasta-tagliatelle-mit-zitrone.jpg";
import imgRettichKaese from "@/assets/fritzi/rettich-und-kaese-auf-holzbrett.jpg";
import imgCarpaccio from "@/assets/fritzi/carpaccio-mit-bluten-und-tomaten.jpg";

const photos: { src: string; alt: string }[] = [
  { src: img1, alt: "Etageren mit bunten Vorspeisen – Hummus, Schinken und Antipasti beim Catering-Buffet" },
  { src: imgCarpaccio, alt: "Rinder-Carpaccio mit Burrata, gelben Tomaten, Kapuzinerkresse und Blaubeeren – Fine-Dining vom Privatkoch Fritzi" },
  { src: img4, alt: "Buntes Fingerfood auf Holzbrett – belegte Brote mit Roastbeef, Lachs und Kräutern vom Catering Fritzi" },
  { src: imgDessertRose, alt: "Angerichtetes Gericht mit Rote-Bete-Rosen am gedeckten Tisch – Privatdinner-Küche" },
  { src: imgGemueseTarte, alt: "Rhabarber-Tarte mit kunstvollem geometrischem Muster – handgemachte Patisserie vom Privatkoch" },
  { src: img3, alt: "Rustikales Käse- und Obstbrett mit essbaren Blüten im Garten – Catering von Privatkoch Fritzi" },
  { src: imgKuerbissuppe, alt: "Cremige Kürbissuppe mit frischem Basilikum und Olivenöl – saisonale Küche vom Privatkoch" },
  { src: imgBeerentarte, alt: "Frische Beerentarte mit Vanillecreme, Erdbeeren und Kräutern – hausgemachtes Dessert vom Privatkoch Fritzi" },
  { src: imgGranolaWiese, alt: "Glas mit hausgemachtem Granola vor sommerlicher Wiese – natürliche Küche vom Privatkoch" },
  { src: img5, alt: "Gedeckter Gartentisch mit Spargelrisotto, Weißwein und Tulpen – Privatdinner mit Privatkoch Fritzi" },
  { src: imgHimbeerenMoos, alt: "Dessert mit Himbeeren und Granatapfelkernen auf Pistazienmoos – kreatives Catering mit Gefühl" },
  { src: imgCremeBrulee, alt: "Nahaufnahme einer Crème brûlée mit goldener Karamellkruste – Desserts vom Privatkoch" },
  { src: imgRettichKaese, alt: "Rustikales Holzbrett mit Sesam-Brioche, Ofenkartoffel mit Kräuterquark und gegrillter Paprika – Catering im Grünen" },
  { src: img6, alt: "Hausgemachte Maultaschen als Vorspeise, fein angerichtet – Menü vom Privatkoch" },
  { src: imgPastaZitrone, alt: "Frische Tagliatelle mit Zitrone, grünem Spargel und Kräutern – hausgemachte Pasta vom Privatkoch" },
  { src: imgBluetenhonigPhlox, alt: "Glas mit Blütenmischung zwischen pink blühendem Phlox – natürliche Zutaten aus dem Garten" },
  { src: imgErdbeerBasilikum, alt: "Sommerliches Dessert mit frischen Erdbeeren und Basilikum – hausgemachte Süßspeise vom Privatkoch Fritzi" },
  { src: imgGetraenkGruen, alt: "Geschichtetes Dessert im Glas zwischen Grünpflanzen – kreatives Dessert-Catering" },
  { src: img7, alt: "Privatkoch Fritzi kocht konzentriert über offenem Feuer – Live-Cooking für Events" },
  { src: imgCremeBruleeJohannis, alt: "Crème brûlée mit karamellisierter Kruste und Johannisbeeren – Dessert vom Catering" },
  { src: imgGlasPetunien, alt: "Einweckglas mit Blütensalz, eingebettet in blaue Petunien im Garten" },
  { src: imgErdbeerGebaeck, alt: "Frisch gebackene Erdbeer-Streuselschnecken auf Holzbrett – süßes Gebäck vom Catering Fritzi" },
  { src: imgKapuzinerkresse, alt: "Kapuzinerkresse-Blüte mit Birne in Kräuteröl – kreative Vorspeise vom Privatkoch Fritzi" },
  { src: img2, alt: "Privatkoch Fritzi lächelt in seiner Küche – persönlicher Koch für Dinner und Events" },
  { src: imgEinweckGruen, alt: "Einweckglas mit selbstgemachtem Blüten-Kräutersalz im Garten – natürliche Zutaten vom Privatkoch Fritzi" },
  { src: imgGlasPinkPhlox, alt: "Blütensalz im Glas zwischen pinkem Phlox – handgemachte Köstlichkeiten von Fritzi" },
  { src: imgFruchtGlas, alt: "Fruchtdessert im Glas mit Mango, Joghurt und Minze – hausgemachtes Dessert vom Privatkoch" },
  { src: imgBluetenSalz, alt: "Glas mit selbstgemachtem Blütensalz zwischen lila Blüten – hausgemachte Produkte von Fritzi" },
  { src: img8, alt: "Privatkoch Fritzi sitzt lachend auf einer Holztreppe – Ihr Koch für private Feiern" },
];

export function Galerie() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: true, threshold: 0.05 });
  const [idx, setIdx] = useState<number | null>(null);

  const close = useCallback(() => setIdx(null), []);
  const next = useCallback(() => setIdx((i) => (i === null ? i : (i + 1) % photos.length)), []);
  const prev = useCallback(() => setIdx((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)), []);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close, next, prev]);

  return (
    <section id="galerie" className="bg-cream-2 py-20 md:py-28" aria-labelledby="galerie-title">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Galerie"
          title="Ein Blick auf meine Küche"
          subtitle="Bilder sagen manchmal mehr als Menükarten. Klicken Sie sich durch – vielleicht ist Ihr Fest schon dabei."
        />
        <h2 id="galerie-title" className="sr-only">Galerie</h2>

        <div ref={ref} className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              className={`reveal card-lift group relative overflow-hidden rounded-xl bg-navy/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
              aria-label={`Bild ${i + 1} öffnen: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {idx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bildergalerie"
          className="fixed inset-0 z-[80] bg-navy/95 flex items-center justify-center animate-[fritzi-fade-up_0.2s_ease-out]"
          onClick={close}
        >
          <button aria-label="Schließen" onClick={close} className="absolute top-5 right-5 text-cream p-2 hover:text-gold-soft">
            <X className="w-7 h-7" />
          </button>
          <button
            aria-label="Vorheriges Bild"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-8 text-cream p-2 hover:text-gold-soft"
          >
            <ChevronLeft className="w-9 h-9" />
          </button>
          <button
            aria-label="Nächstes Bild"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-8 text-cream p-2 hover:text-gold-soft"
          >
            <ChevronRight className="w-9 h-9" />
          </button>
          <img
            src={photos[idx].src}
            alt={photos[idx].alt}
            className="max-h-[85vh] max-w-[92vw] object-contain rounded-md"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}


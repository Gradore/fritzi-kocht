import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowLeft,
  BarChart3,
  Clock,
  Eye,
  Globe2,
  Lock,
  MousePointerClick,
  Smartphone,
  Users,
} from "lucide-react";
import { Footer } from "@/components/sections/Footer";

const PAGE_PASSWORD = "Fritzi2026";

const dailyData = [
  { date: "01.06.", visitors: 4, pageviews: 9 },
  { date: "02.06.", visitors: 6, pageviews: 14 },
  { date: "03.06.", visitors: 8, pageviews: 19 },
  { date: "04.06.", visitors: 5, pageviews: 12 },
  { date: "05.06.", visitors: 11, pageviews: 28 },
  { date: "06.06.", visitors: 14, pageviews: 33 },
  { date: "07.06.", visitors: 9, pageviews: 21 },
  { date: "08.06.", visitors: 7, pageviews: 15 },
  { date: "09.06.", visitors: 6, pageviews: 13 },
  { date: "10.06.", visitors: 12, pageviews: 29 },
  { date: "11.06.", visitors: 18, pageviews: 42 },
  { date: "12.06.", visitors: 22, pageviews: 51 },
  { date: "13.06.", visitors: 15, pageviews: 34 },
  { date: "14.06.", visitors: 10, pageviews: 24 },
  { date: "15.06.", visitors: 8, pageviews: 18 },
  { date: "16.06.", visitors: 13, pageviews: 30 },
  { date: "17.06.", visitors: 17, pageviews: 38 },
  { date: "18.06.", visitors: 21, pageviews: 46 },
  { date: "19.06.", visitors: 16, pageviews: 35 },
  { date: "20.06.", visitors: 11, pageviews: 24 },
  { date: "21.06.", visitors: 9, pageviews: 20 },
  { date: "22.06.", visitors: 14, pageviews: 31 },
  { date: "23.06.", visitors: 19, pageviews: 43 },
  { date: "24.06.", visitors: 25, pageviews: 58 },
  { date: "25.06.", visitors: 20, pageviews: 44 },
  { date: "26.06.", visitors: 13, pageviews: 29 },
  { date: "27.06.", visitors: 10, pageviews: 22 },
  { date: "28.06.", visitors: 15, pageviews: 32 },
  { date: "29.06.", visitors: 18, pageviews: 40 },
  { date: "30.06.", visitors: 12, pageviews: 26 },
];

const topPages = [
  { label: "/", value: 412 },
  { label: "/#leistungen", value: 187 },
  { label: "/#galerie", value: 156 },
  { label: "/#kontakt", value: 128 },
  { label: "/#ueber-fritzi", value: 96 },
  { label: "/#faq", value: 71 },
  { label: "/#ablauf", value: 54 },
  { label: "/impressum", value: 12 },
];

const sources = [
  { label: "Direkt", value: 198 },
  { label: "google.com", value: 156 },
  { label: "Instagram", value: 42 },
  { label: "WhatsApp", value: 21 },
  { label: "bing.com", value: 8 },
];

const devices = [
  { label: "Mobil", value: 318 },
  { label: "Desktop", value: 107 },
];

const countries = [
  { label: "Deutschland", value: 384 },
  { label: "Österreich", value: 18 },
  { label: "Schweiz", value: 12 },
  { label: "Unbekannt", value: 11 },
];

const metrics = [
  {
    label: "Besucher",
    value: "425",
    icon: Users,
    detail: "letzte 30 Tage",
    benchmark: "Branchenschnitt lokal: 300–1.200 / Monat",
    verdict: "Im Branchenschnitt",
    status: "neutral" as const,
    tips: ["Instagram-Bio-Link mit UTM-Parametern versehen.", "Google-Business-Profil wöchentlich pflegen."],
  },
  {
    label: "Seitenaufrufe",
    value: "957",
    icon: Eye,
    detail: "gesamt",
    benchmark: "Branchenschnitt: 900–3.000 / Monat",
    verdict: "Im Branchenschnitt",
    status: "neutral" as const,
    tips: ["Interne Verlinkung zwischen Leistungen und FAQ stärken.", "Galerie-CTA prominenter setzen."],
  },
  {
    label: "Seiten / Besuch",
    value: "2,25",
    icon: MousePointerClick,
    detail: "Durchschnitt",
    benchmark: "Branchenschnitt: 1,8–2,5 Seiten",
    verdict: "Im Branchenschnitt",
    status: "neutral" as const,
    tips: ["Nach Galerie direkt zur Kontakt-Sektion führen.", "Fließende Section-Übergänge testen."],
  },
  {
    label: "Absprungrate",
    value: "48%",
    icon: Activity,
    detail: "Durchschnitt",
    benchmark: "Branchenschnitt: 45–65%",
    verdict: "Im Branchenschnitt",
    status: "neutral" as const,
    tips: ["Hero-CTA A/B testen.", "Trust-Elemente vor dem ersten Scroll platzieren."],
  },
  {
    label: "Sitzungsdauer",
    value: "3:12",
    icon: Clock,
    detail: "Ø Minuten",
    benchmark: "Branchenschnitt: 1–3 Minuten",
    verdict: "Über Branchenschnitt",
    status: "above" as const,
    tips: ["Lange Verweildauer in WhatsApp-Anfragen umwandeln.", "Sticky-CTA am unteren Rand testen."],
  },
  {
    label: "Mobile Anteil",
    value: "75%",
    icon: Smartphone,
    detail: "318 von 425",
    benchmark: "Branchenschnitt Gastro: 60–75%",
    verdict: "Über Branchenschnitt",
    status: "above" as const,
    tips: ["Formularfelder auf Mobil auf Minimum reduzieren.", "WhatsApp-Button dauerhaft sichtbar halten."],
  },
];

const optimizationTips = [
  {
    title: "SEO: Lokal & saisonal ranken",
    items: [
      'Landingpages für „Privatkoch [Stadt]", „Catering Hochzeit [Region]", „Firmenevent Koch" ausbauen.',
      "FAQ-Snippets weiter mit Schema.org markieren – FAQPage JSON-LD ist gesetzt.",
      "Google-Business-Profil mit Event-Fotos und saisonalen Menüs pflegen.",
    ],
  },
  {
    title: "Mehr Anfragen aus dem Traffic gewinnen",
    items: [
      "Sticky WhatsApp-CTA auf Mobil testen.",
      "In der Galerie nach 6 Bildern einen Kontakt-CTA einblenden.",
      "Kundenstimmen mit Foto und Anlass ergänzen (Hochzeit, 50er, Firmenessen).",
    ],
  },
  {
    title: "Instagram → Website konvertieren",
    items: [
      "Bio-Link auf /#kontakt mit UTM-Parametern versehen.",
      'Reels mit Rezept + „Menü anfragen"-Overlay produzieren.',
      'Story-Highlight „Anfrage stellen" mit Anleitung anlegen.',
    ],
  },
];

type MetricItem = {
  label: string;
  value: string;
  icon: typeof Users;
  detail: string;
  benchmark: string;
  verdict: string;
  status: "above" | "below" | "neutral";
  tips: string[];
};

function Metric({ metric }: { metric: MetricItem }) {
  const Icon = metric.icon;
  const badgeClass =
    metric.status === "above"
      ? "border-gold/40 text-gold bg-gold/10"
      : metric.status === "below"
      ? "border-red-400/40 text-red-500 bg-red-500/10"
      : "border-cream/30 text-cream/80 bg-cream/5";
  return (
    <article className="bg-navy/70 border border-cream/10 rounded-2xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-cream/70 text-sm mb-2">{metric.label}</p>
          <strong className="block text-3xl md:text-4xl font-serif text-cream">{metric.value}</strong>
          <span className="text-cream/60 text-xs uppercase tracking-[0.16em]">{metric.detail}</span>
        </div>
        <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center">
          <Icon className="w-5 h-5 text-gold-soft" />
        </div>
      </div>
      <div className="mt-5 border-t border-cream/10 pt-4">
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${badgeClass}`}>
          {metric.verdict}
        </span>
        <p className="mt-3 text-xs leading-relaxed text-cream/70">{metric.benchmark}</p>
        <ul className="mt-3 space-y-1.5">
          {metric.tips.map((tip) => (
            <li key={tip} className="text-xs leading-relaxed text-cream/70 list-disc ml-4">
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function BarList({ title, items, icon: Icon }: { title: string; items: { label: string; value: number }[]; icon: typeof BarChart3 }) {
  const max = Math.max(...items.map((i) => i.value));
  const total = items.reduce((s, i) => s + i.value, 0);
  return (
    <section className="bg-navy/70 border border-cream/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-xl text-cream">{title}</h2>
        <Icon className="w-5 h-5 text-gold-soft" />
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <div className="flex items-center justify-between text-sm text-cream/85 mb-1.5">
              <span className="truncate mr-3">{item.label}</span>
              <span className="text-cream/70 tabular-nums">
                {item.value} <span className="text-cream/50">({Math.round((item.value / total) * 100)}%)</span>
              </span>
            </div>
            <div className="h-2 rounded-full bg-cream/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold to-gold-soft"
                style={{ width: `${(item.value / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Data() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const maxPv = useMemo(() => Math.max(...dailyData.map((d) => d.pageviews)), []);
  const totalVisitors = dailyData.reduce((s, d) => s + d.visitors, 0);
  const totalPv = dailyData.reduce((s, d) => s + d.pageviews, 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim() === PAGE_PASSWORD) {
      setIsUnlocked(true);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-navy text-cream flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md bg-navy/70 border border-cream/10 rounded-2xl p-8 md:p-10 shadow-2xl">
          <Link to="/" className="inline-flex items-center gap-2 text-cream/70 hover:text-gold-soft mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </Link>
          <div className="w-14 h-14 rounded-lg bg-gold/15 flex items-center justify-center mb-6">
            <Lock className="w-7 h-7 text-gold-soft" />
          </div>
          <p className="text-gold-soft text-xs uppercase tracking-[0.24em] mb-3">Nicht gelistetes Dashboard</p>
          <h1 className="font-serif text-4xl text-cream mb-4">Website Analytics</h1>
          <p className="text-cream/70 mb-8">Bitte Passwort eingeben, um die Webseiten-Daten zu öffnen.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="data-pw" className="block text-cream text-sm font-medium mb-2">
                Passwort
              </label>
              <input
                id="data-pw"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-navy border border-cream/20 rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
                placeholder="Passwort"
                autoComplete="current-password"
              />
              {hasError && <p className="mt-2 text-sm text-red-400">Das Passwort ist nicht korrekt.</p>}
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-full hover:bg-gold-hover transition-colors"
            >
              Dashboard öffnen
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-cream">
      <main className="pt-16 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-cream/70 hover:text-gold-soft mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </Link>

          <div className="mb-10">
            <p className="text-gold-soft text-xs uppercase tracking-[0.24em] mb-3">01.06.2026 – 30.06.2026</p>
            <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">Website Analytics Dashboard</h1>
            <p className="text-cream/70 max-w-3xl">
              Übersicht der Besucher, Seitenaufrufe, Quellen, Geräte und beliebtesten Seiten der Fritzi-Website.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
            {metrics.map((m) => (
              <Metric key={m.label} metric={m} />
            ))}
          </div>

          <section className="bg-navy/70 border border-cream/10 rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gold-soft text-xs uppercase tracking-[0.24em] mb-2">Verlauf</p>
                <h2 className="font-serif text-2xl text-cream">Besucher & Seitenaufrufe</h2>
                <p className="text-sm text-cream/70 mt-1">
                  {totalVisitors} Besucher · {totalPv} Seitenaufrufe
                </p>
              </div>
              <BarChart3 className="w-6 h-6 text-gold-soft" />
            </div>
            <div className="h-72 flex items-end gap-2 border-b border-cream/10 pb-6 overflow-x-auto">
              {dailyData.map((d) => (
                <div key={d.date} className="min-w-10 flex-1 flex flex-col items-center gap-2">
                  <div className="text-center leading-tight">
                    <span className="block text-[10px] font-semibold text-cream">{d.visitors}</span>
                    <span className="block text-[10px] font-semibold text-gold-soft">{d.pageviews}</span>
                  </div>
                  <div className="w-full flex items-end justify-center gap-1 h-48">
                    <div
                      className="w-2.5 rounded-t-sm bg-cream/60"
                      style={{ height: `${Math.max((d.visitors / maxPv) * 100, 4)}%` }}
                      title={`${d.visitors} Besucher`}
                    />
                    <div
                      className="w-2.5 rounded-t-sm bg-gold"
                      style={{ height: `${(d.pageviews / maxPv) * 100}%` }}
                      title={`${d.pageviews} Seitenaufrufe`}
                    />
                  </div>
                  <span className="text-[10px] text-cream/60 rotate-[-45deg] origin-center mt-2 whitespace-nowrap">
                    {d.date}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-4 text-xs text-cream/70">
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-cream/60" /> Besucher
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-gold" /> Seitenaufrufe
              </span>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <BarList title="Beliebteste Seiten" items={topPages} icon={Eye} />
            <BarList title="Quellen" items={sources} icon={Globe2} />
            <BarList title="Geräte" items={devices} icon={Smartphone} />
            <BarList title="Länder" items={countries} icon={Globe2} />
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {optimizationTips.map((block) => (
              <article key={block.title} className="bg-navy/70 border border-cream/10 rounded-2xl p-6">
                <h3 className="font-serif text-lg text-cream mb-3">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="text-sm text-cream/75 list-disc ml-4 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/data")({
  head: () => ({
    meta: [
      { title: "Website Analytics – Fritzi kocht" },
      { name: "description", content: "Nicht gelistetes Analytics Dashboard." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Data,
});


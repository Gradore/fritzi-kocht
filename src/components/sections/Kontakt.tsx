import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Phone, Mail, Instagram, Facebook, Send } from "lucide-react";
import { SectionHeading } from "./common";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import portrait from "@/assets/fritzi/fritzi-portraet-in-der-kueche.jpg";
import {
  waLink,
  mailtoLink,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  FACEBOOK_URL,
} from "@/lib/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an").max(80),
  anlass: z.string().min(1, "Bitte wählen Sie einen Anlass"),
  datum: z.string().optional(),
  gaeste: z.coerce.number().int().min(1, "Mindestens 1 Gast").max(500, "Bitte kontaktieren Sie mich direkt").optional().or(z.literal("")),
  nachricht: z.string().trim().min(5, "Bitte kurz beschreiben (mind. 5 Zeichen)").max(1500),
});
type FormValues = z.input<typeof schema>;

const anlassOptions = [
  { value: "Privatdinner", label: "Privatdinner" },
  { value: "Catering & Buffet", label: "Catering & Buffet" },
  { value: "Firmenevent", label: "Firmenevent" },
  { value: "Live-Cooking", label: "Live-Cooking / Feuerküche" },
  { value: "Kocherlebnis zur Ferienwohnung", label: "Kocherlebnis zur Ferienwohnung" },
  { value: "Sonstiges", label: "Sonstiges" },
];

function buildMessage(v: FormValues) {
  const lines = [
    `Hallo Fritzi,`,
    ``,
    `mein Name ist ${v.name}.`,
    `Anlass: ${v.anlass}`,
  ];
  if (v.datum) lines.push(`Wunschdatum: ${v.datum}`);
  if (v.gaeste) lines.push(`Gästezahl: ${v.gaeste}`);
  lines.push(``, v.nachricht, ``, `Vielen Dank!`);
  return lines.join("\n");
}

export function Kontakt() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", anlass: "", datum: "", gaeste: "", nachricht: "" },
  });

  const anlass = watch("anlass");

  const onSubmit = (values: FormValues) => {
    const msg = buildMessage(values);
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  const onMailto = handleSubmit((values) => {
    const body = buildMessage(values);
    window.location.href = mailtoLink(`Anfrage: ${values.anlass}`, body);
  });

  return (
    <section id="kontakt" className="bg-cream py-20 md:py-28" aria-labelledby="kontakt-title">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Kontakt"
            title="Lassen Sie uns über Ihr Fest sprechen"
            subtitle="Am liebsten per WhatsApp – kurz, unkompliziert, meist innerhalb von 24 h."
            center={false}
          />
          <h2 id="kontakt-title" className="sr-only">Kontakt</h2>

          <ul className="space-y-3">
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
              >
                <span className="w-11 h-11 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-navy">WhatsApp</span>
                  <span className="block text-sm text-foreground/70 truncate">{PHONE_DISPLAY}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="card-lift flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
              >
                <span className="w-11 h-11 rounded-full bg-cornflower/20 text-cornflower flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-navy">Telefon</span>
                  <span className="block text-sm text-foreground/70 truncate">{PHONE_DISPLAY}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="card-lift flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
              >
                <span className="w-11 h-11 rounded-full bg-navy/10 text-navy flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-navy">E-Mail</span>
                  <span className="block text-sm text-foreground/70 truncate">{EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
              >
                <span className="w-11 h-11 rounded-full bg-cornflower/20 text-cornflower flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-navy">Instagram</span>
                  <span className="block text-sm text-foreground/70 truncate">{INSTAGRAM_HANDLE}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
              >
                <span className="w-11 h-11 rounded-full bg-cornflower/20 text-cornflower flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-navy">Facebook</span>
                  <span className="block text-sm text-foreground/70 truncate">Fritzi kocht</span>
                </span>
              </a>
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <img
              src={portrait}
              alt="Privatkoch Fritzi lächelt in seiner Küche – persönlicher Koch für Dinner und Events"
              width={120}
              height={120}
              loading="lazy"
              decoding="async"
              className="w-20 h-20 rounded-full object-cover border-2 border-gold"
            />
            <p className="text-foreground/75 text-sm">
              „Ich freue mich, von Ihnen zu hören – und lieber eine Idee zu viel besprechen als zu wenig."
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_-20px_hsl(var(--navy)/0.25)] space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">Name *</label>
            <Input
              id="name"
              {...register("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="Vor- und Nachname"
            />
            {errors.name && <p id="name-error" className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="anlass" className="block text-sm font-medium text-navy mb-1.5">Anlass *</label>
            <Select value={anlass} onValueChange={(v) => setValue("anlass", v, { shouldValidate: true })}>
              <SelectTrigger id="anlass" aria-invalid={!!errors.anlass}>
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                {anlassOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.anlass && <p className="mt-1 text-sm text-destructive">{errors.anlass.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="datum" className="block text-sm font-medium text-navy mb-1.5">Wunschdatum</label>
              <Input id="datum" type="date" {...register("datum")} />
            </div>
            <div>
              <label htmlFor="gaeste" className="block text-sm font-medium text-navy mb-1.5">Gästezahl</label>
              <Input id="gaeste" type="number" min={1} {...register("gaeste")} placeholder="z. B. 12" />
              {errors.gaeste && <p className="mt-1 text-sm text-destructive">{errors.gaeste.message as string}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="nachricht" className="block text-sm font-medium text-navy mb-1.5">Nachricht *</label>
            <Textarea
              id="nachricht"
              rows={5}
              {...register("nachricht")}
              aria-invalid={!!errors.nachricht}
              placeholder="Erzählen Sie mir kurz von Ihrem Anlass, Ort und Wünschen…"
            />
            {errors.nachricht && <p className="mt-1 text-sm text-destructive">{errors.nachricht.message}</p>}
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-6 py-3.5 rounded-full hover:bg-gold-hover transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Anfrage per WhatsApp senden
            </button>
            <button
              type="button"
              onClick={onMailto}
              className="inline-flex items-center justify-center gap-2 text-navy underline underline-offset-4 hover:text-gold transition-colors text-sm"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              Lieber per E-Mail senden
            </button>
          </div>

          <p className="text-xs text-foreground/80">
            Unverbindlich & kostenlos. Ihre Daten werden nur zur Beantwortung Ihrer Anfrage verwendet.
          </p>
        </form>
      </div>
    </section>
  );
}


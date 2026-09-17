export const PHONE_DISPLAY = "0152 28820754";
export const PHONE_TEL = "+4915228820754";
export const WHATSAPP_NUMBER = "4915228820754";
export const EMAIL = "fritzi.kocht@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/fritzi_kocht_";
export const INSTAGRAM_HANDLE = "@fritzi_kocht_";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61562920793384&locale=de_DE";
export const FACEBOOK_LABEL = "Fritzi kocht auf Facebook";
export const FERIENWOHNUNG_URL = "https://familie-fritz-ferien.lovable.app";

export function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Hallo Fritzi, ich interessiere mich für Ihre Kochkunst und möchte einen Wunschtermin anfragen.";

export const SERVICE_WA_MESSAGES: Record<string, string> = {
  privatdinner: "Hallo Fritzi, ich interessiere mich für ein Privatdinner bei mir zuhause. Können Sie mir ein unverbindliches Angebot machen?",
  catering: "Hallo Fritzi, ich plane eine Feier und interessiere mich für Ihr Catering / Buffet. Bitte melden Sie sich für ein unverbindliches Angebot.",
  firmen: "Hallo Fritzi, wir planen ein Firmenevent und würden gerne ein unverbindliches Angebot einholen.",
  livecooking: "Hallo Fritzi, wir interessieren uns für Ihr Live-Cooking / Feuerküche als Erlebnis für unsere Gäste.",
};


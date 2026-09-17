# Fritzi kocht

Website für Privatkoch und Catering mit einem hervorgehobenen Angebot für Urlaub bei Familie Fritz und optionales Private Cooking beziehungsweise einen Grillabend auf Anfrage.

- Öffentliche Website: https://fritzi-kocht.de
- Ferienwohnung: https://familie-fritz-ferien.lovable.app
- Lovable-Editor: https://lovable.dev/projects/a25c6d4f-511f-4c56-a192-e40de122ad5f
- Exportierter Lovable-Commit: `252ead60da56df94aecf34621b72cb5066c23db5`

Dieses Repository enthält einen exportierten Quellstand. Eine automatische Synchronisierung in beide Richtungen zwischen diesem Repository und Lovable ist damit nicht eingerichtet.

## Lokal starten

Benötigt werden eine aktuelle Node.js-LTS-Version und ein Paketmanager. Für den vorhandenen `bun.lock` ist Bun vorgesehen:

```sh
bun install --frozen-lockfile
bun run dev
bun run build
```

Der Produktionsbuild dieses Exportstands wurde mit Bun 1.4.2 erfolgreich geprüft (`bun install --frozen-lockfile` und `bun run build`). Dafür waren keine Umgebungswerte erforderlich.

Alternativ mit npm; dabei wird ein eigener npm-Lockfile erstellt:

```sh
npm install
npm run dev
npm run build
```

## Umgebung

Die ursprüngliche `.env` wurde nicht exportiert. `.env.example` enthält ausschließlich Variablennamen. Zugangsdaten gehören in eine lokale, von Git ausgeschlossene `.env` beziehungsweise in die geschützte Umgebung des Hostings.

Die vorhandenen Supabase-Integrationen erwarten `VITE_SUPABASE_URL` und `VITE_SUPABASE_PUBLISHABLE_KEY` im Browser sowie `SUPABASE_URL` und `SUPABASE_PUBLISHABLE_KEY` auf dem Server. `SUPABASE_SERVICE_ROLE_KEY` ist ausschließlich für serverseitige administrative Funktionen vorgesehen und darf niemals über eine `VITE_`-Variable veröffentlicht werden. Die normale Website und ihre E-Mail-/WhatsApp-Kontaktlinks enthalten keine Zugangsdaten; Supabase-Funktionen benötigen bei ihrer Verwendung eine passend konfigurierte Umgebung.

## Export und Bilder

Alle 35 im veröffentlichten Website-Code benötigten Binärdateien wurden über die belegten öffentlichen Asset-URLs wiederhergestellt und unter ihren ursprünglichen Quellpfaden gespeichert. Zusätzlich liegen die fünf von Asset-JSON-Dateien referenzierten Logo-/SVG-Ressourcen unter `public/__l5e/`, damit diese URLs auch im exportierten Projekt auflösbar sind.

Zwei unreferenzierte Altdateien waren im veröffentlichten Build nicht enthalten und wurden nicht rekonstruiert: `src/assets/fritzi/logo-fritzi-badge.png` und `src/assets/fritzi/logo-fritzi-horizontal.png`. Die tatsächlich verwendeten Logos sind vorhanden. Der Export enthält weder die ursprünglichen Umgebungswerte noch Datenbankdaten.

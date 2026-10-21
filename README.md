# Jugger Berlin – Hugo v3, Design-Migration (Arbeitsstand)

Dieses Projekt baut das Erscheinungsbild der alten WordPress-Seite **ohne WordPress, PHP und Datenbank** nach.
Es verwendet die vom Betreiber bereitgestellten Hestia-Child-Theme-Grafiken, Screenshots (21.10.2026), SiteOrigin-Daten und den WordPress-XML-Export. Die Datenbank wird nicht benötigt.

## Lokal ansehen

1. [Hugo](https://gohugo.io/installation/) installieren (empfohlen: Version wie im CI-Workflow oder kompatibel).
2. `hugo server -D` im Projektverzeichnis ausführen.
3. Browser auf `http://localhost:1313/` öffnen.
4. Build: `hugo --minify` (HTML in `public/`).

## Bearbeiten

- **Startseite**: Texte und Bildreferenzen der Abschnitte in `data/home.json`; Trainingszeiten direkt im `layouts/index.html` (noch zu separieren, bevor andere Vereinsmitglieder die Inhalte pflegen).
- **Unterseiten**: `content/*.md` und `content/fotos/*.md`. Die übernommenen Original-HTML-Strukturen stammen aus WordPress und sollten später nach Bedarf bereinigt werden.
- **Navigation**: `hugo.toml`.
- **Design**: `static/css/site.css` (ohne Hestia-PHP und WordPress-Abhängigkeiten).
- **Hestia-Child-Theme-Dekorationen**: `static/images/design/`.
- **Medien**: `static/wp-content/uploads/` – Pfade der alten Website bleiben erhalten, ausgenommen ausgeschlossene vertrauliche/technische Dateien.

## Was umgesetzt wurde

- Neue weiße Navigation mit Jugger-e.V.-Logo, dunkle Titelleiste der Unterseiten, gelbe Linkfarbe, Original-Raster und Q-Tip-Randgrafik.
- Rekonstruierte Startseite mit Trainingskarte, vier bebilderten Informationsblöcken, zwei Bildstreifen aus den anhand des XML-Exports identifizierten Hintergründen, Spielfeld und den drei Vereins-Teams.
- Originaltexte von WordPress in Content-Dateien; Galerie vorerst nur als Teaser (vollständige NextGEN-Alben bewusst verschoben).
- Veranstaltungskalender aus dem Projekt entfernt; keine YouTube-Einbettungen nötig.
- GitHub-Actions-Workflow vorbereitet. Bis zur Freigabe `params.ready = false` belassen.
- Alle Ordner-/Dateinamen für Medien unverändert belassen; Root-Verweise in inneren Seiten werden beim Rendern auf die Basis-URL des Projekts angepasst.

## Vor Veröffentlichung

- `hugo --minify` und GitHub-Pages-Preview durchführen; Build in dieser Arbeitsumgebung mangels lokal verfügbarer Hugo-Binärdatei noch nicht nachgewiesen.
- Mehrere Bildschirmbreiten mit Originalscreenshots vergleichen; CSS/Abstände final abstimmen.
- Vorstand, Kontaktangaben, Trainingszeiten und das Impressum gegen aktuelle Angaben prüfen.
- Große NextGEN-Galerie ist absichtlich **nicht** importiert. Die zwei unvollständigen Galerie-Unterseiten sind derzeit nur Beispiele.
- Bestehendes Video-URL-Angebot nur behalten, falls gewünscht; keine externen Iframes erforderlich.
- Noch vorhandene externe Links auf Datenschutzrelevanz prüfen.
- Danach Veröffentlichung bei GitHub Pages prüfen, erst anschließend Domain-DNS mit Zustimmung umstellen.
- Backup und Profihost-E-Mail-DNS unabhängig von GitHub aufbewahren.

**Bitte keine komplette WordPress-Datenbank oder privaten personenbezogenen Daten in GitHub hochladen.**

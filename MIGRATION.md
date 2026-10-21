# Migration v4 – Änderungsprotokoll

## Erledigt

- Neues durchgängiges Layout für Startseite und Unterseiten; responsive Design mit mobilen Menüs und prominentem Probetraining.
- Erstes auf Original-Fotos basiertes Hero, eigene Trainingskarte aus `data/training.yaml`, vier Sportkacheln aus `data/home.json`, Spielfeld-Darstellung, Vereinsbereich mit drei Teamlogos, Abschluss-CTA.
- Startseiten- und Gallery-Shortcode-Bildpfade von führendem `/` befreit, bevor `relURL` angewendet wird. Dies ist wichtig bei GitHub-Pages-Unterpfaden.
- Vorhandene WordPress-Originalbilder, Texte, PDFs, Favicon sowie Medienpfade weitgehend erhalten.
- Veranstaltungs- und YouTube-Einbindung nicht neu aufgebaut; umfangreiche NextGEN-Bilder werden wie gewünscht nicht importiert.
- Bildquellen des Home-Entwurfs (11 `img` + CSS-Hintergründe) liegen im statischen Medienverzeichnis; Visualisierung in Desktop und Mobile mit Chromium geprüft.

## Noch ausstehend

- **Hugo-Produktionsbuild** und Deployment von v4 via GitHub Actions erfolgreich durchlaufen lassen.
- URL-, Layout-, Kontrast- und mobile Funktionsprüfungen auf der öffentlichen Testadresse.
- Persönliche Angaben in Impressum, Vorstand, Trainingszeiten und Verein gegen aktuelle Daten prüfen.
- Weitere WordPress-Inhalte und mögliche Verlinkungen auf nicht migrierte Dienste kontrollieren.
- Alle Datenschutz- und Urheberrechtsfragen der hochgeladenen Bilder/Inhalte vor Livegang prüfen.
- Erst nach Bestätigung des Vereins die Domain jugger-berlin.de auf GitHub Pages umstellen.

## Sicherheit

Kein WordPress-PHP, kein kompletter WP-Datenbankexport, keine Nutzerprofile, keine privaten Archive im Repository. Profihost und DNS bleiben unangetastet.

# Jugger Berlin – Hugo v3, Design-Migration (Arbeitsstand)

## Lokal ansehen

1. [Hugo](https://gohugo.io/installation/) installieren (empfohlen: Version wie im CI-Workflow oder kompatibel).
2. `hugo server -D` im Projektverzeichnis ausführen.
3. Browser auf `http://localhost:1313/` öffnen.
4. Build: `hugo --minify` (HTML in `public/`).

## Bearbeiten

- **Startseite**: Texte und Bildreferenzen der Abschnitte in `data/home.json`; Trainingszeiten direkt im `layouts/index.html`
- **Unterseiten**: `content/*.md` und `content/fotos/*.md`. 
- **Navigation**: `hugo.toml`.
- **Design**: `static/css/site.css` 
- **Hestia-Child-Theme-Dekorationen**: `static/images/design/`.
- **Medien**: `static/wp-content/uploads/` 

**Bitte keine komplette WordPress-Datenbank oder privaten personenbezogenen Daten in GitHub hochladen.**

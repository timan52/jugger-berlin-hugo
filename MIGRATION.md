# Migrationsstand – 21. Oktober 2026 – Version 3

## Aus gelieferten Materialien rekonstruiert

- WordPress-XML: Original-Seiteninhalte, SiteOrigin-Layout-Text und relevante Medienzuordnungen.
- `hestia.zip` und `hestia-child.zip`: Gestaltungsvorgaben und dekorative Grafiken. Keine PHP-Dateien für den statischen Build verwendet.
- `uploads.zip`: öffentlich verwendbare Bilder und PDFs; personenbezogene Exportdateien und PHP-Skripte sind ausgeschlossen.
- Screenshots der Startseite, „Was ist Jugger?“, „Mitmachen“, „Der Verein“ und „Software“ als visuelle Referenz.

## Original-Hintergrundbilder aus SiteOrigin row style (WordPress-Export)

- Oberer Startseiten-Bereich: Medien-ID `25285` → `2018/11/Berliner_Jugger_Pokal_2017-349-e1791905181669.jpg`
- Erster Fotostreifen: ID `25284` → `2018/11/Berliner_Jugger_Pokal_2017-128.jpg`
- Spielfeld-Raster: ID `20471` → `2018/04/feldbg.png`; Child-Theme `images/feldbg.png` zusätzlich übernommen
- Zweiter Fotostreifen: ID `22087` → `2018/05/Berliner_Jugger_Pokal_2017-356.jpg`

## Bewusst nicht migriert

- WordPress, Hestia-PHP, BuddyPress, bbPress, W3 Total Cache und andere WP-Plugins
- Veranstaltungskalender
- YouTube-Iframes (alte Videoseite bleibt optionaler, einfacher Inhaltsstand)
- NextGEN-Galerie aus `/wp-content/gallery/` – später möglich
- Private WordPress-Exportdaten, Benutzerkonten, Passwörter und Datenbanken

## Noch zu prüfen

1. Ein tatsächlicher Hugo-Build und die GitHub-Pages-Vorschau (noch nicht erfolgreich ausgeführt).
2. Exakte Abstände, Logos und Layout über Desktop und Mobil; die Pixelgenauigkeit wurde anhand der Screenshots nur näherungsweise nachgebaut.
3. Optional: WordPress Customizer `theme_mods_hestia-child` aus der Datenbank, falls Farb- oder Layoutdetails deutlich abweichen. Vollständige Datenbank nicht nötig.
4. Veröffentlichte Links einschließlich alter PDF-Adressen; `2018/10/Beitrittsformular_Jugger_e_V.pdf` wurde in v2 auf neuere vorhandene 2025-Datei angepasst.
5. Aktuelle und rechtlich korrekte Informationen in `/der-verein/`, `/mitmachen/`, `/impressum/`.
6. Bestehende Medienrechte und Datenschutzhinweise vor der Veröffentlichung.

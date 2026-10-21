Jugger Berlin - Domain-Fix für Hugo

Diese ZIP enthält nur .github/workflows/hugo.yaml.
Sie entfernt die Überschreibung der baseURL im GitHub-Actions-Build.
Damit verwendet Hugo die in hugo.toml hinterlegte baseURL: https://jugger-berlin.de/

Entpacke die ZIP und kopiere den Inhalt (einschließlich .github) in dein Repository.
In GitHub Desktop: Commit > Push origin.
Im Anschluss muss GitHub Pages Custom domain jugger-berlin.de hinterlegt sein.

ACHTUNG: Die DNS-Einträge für mail.jugger-berlin.de NICHT auf GitHub Pages zeigen lassen.
Mail-A-Record auf ursprüngliche Profihost-Mailserver-IP zurücksetzen.
Den bisherigen MX-Eintrag und DKIM TXT beibehalten.

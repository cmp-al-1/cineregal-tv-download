# MYLA TV

Application pour piloter CineRegal sur Fire OS, Android TV et Google TV avec une télécommande.

**Dernière version : 1.6.0**

[Télécharger directement l’APK](https://github.com/cmp-al-1/cineregal-tv-download/releases/latest/download/CineRegal-TV.apk) — aucun compte GitHub nécessaire.

[Voir la dernière release et sa somme SHA-256](https://github.com/cmp-al-1/cineregal-tv-download/releases/latest).

## Corrections 1.6.0

- Les dix défauts de l’audit TV sont corrigés : recherche avec flèches/OK, saisie de M, clavier, listes de tri, effacement des filtres, étapes avant lecture, focus des erreurs et des mises à jour.
- Footer retiré et raccourci du lecteur déplacé pour libérer Lecture/Pause.
- Étapes avant lecture prises en charge sur les films et les chaînes TV ; validation normale du site conservée.
- Publicité intrusive observée dans le lecteur TV externe bloquée.

Tests sans compte : 29 scénarios web, 17 scénarios Android natifs, parcours du site réel, lecture Matrix et direct L’Équipe. L’émulateur utilise Android TV 14 ; aucun appareil Fire OS/TCL physique n’a été certifié.

## Installation et mises à jour

Télécharger l’APK avec Downloader ou un navigateur sur la TV, puis autoriser l’installation depuis cette application si le système le demande. L’application apparaît sous le nom **MYLA TV**. Package, signature et nom du fichier restent identiques aux anciennes versions CineRegal TV pour conserver les données pendant une mise à jour.

À partir de 1.4, MYLA TV détecte les nouvelles releases stables et télécharge l’APK automatiquement pendant l’utilisation. L’installation attend la fin de la lecture. Une autorisation initiale et, selon le système, une confirmation Android/Fire OS peuvent être nécessaires. Réglages et aide → Mises à jour permet une vérification manuelle.

## Télécommande

Flèches pour sélectionner, OK pour ouvrir, Menu pour les options, Retour pour fermer le clavier ou une liste et revenir. Appui long sur OK pour le curseur. **Quitter l’application** est dans le menu.

## Compatibilité

APK universel installable sur Android/Fire OS API 21+ avec un WebView suffisamment récent pour le site. Compatible au niveau de l’installation avec les TCL sous Android TV/Google TV. Un moteur trop ancien, notamment WebView 90, ne peut pas afficher le site actuel et doit être mis à jour. Les DRM, codecs et lecteurs externes dépendent de l’appareil. Vega OS utilise un autre format et ne peut pas installer cet APK.

Le site, les comptes et les contenus restent fournis par CineRegal. Le filtrage d’une régie externe observée peut nécessiter une adaptation si elle change de domaine.
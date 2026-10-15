# MYLA TV

Application pour piloter CineRegal sur Fire OS, Android TV et Google TV avec une télécommande.

**Dernière version : 1.7.0**

[Télécharger directement l’APK](https://github.com/cmp-al-1/cineregal-tv-download/releases/latest/download/CineRegal-TV.apk) — aucun compte GitHub nécessaire.

[Voir la dernière release et sa somme SHA-256](https://github.com/cmp-al-1/cineregal-tv-download/releases/latest).

## Nouveautés 1.7.0

- Logo MYLA animé au démarrage et pendant les étapes avant lecture ; les fenêtres publicitaires restent derrière cet écran.
- « Accéder au contenu » activé automatiquement dès que le site le permet. « Afficher la vérification » révèle la validation normale si elle demande une intervention.
- Lecteur TV : OK pour lecture/pause ; Gauche/Bas −10 secondes, Droite/Haut +10 secondes.
- Titre, position et durée dans un HUD temporaire, sans réglage du volume. Le volume reste géré par la télécommande.
- Menu → Commandes du lecteur donne accès aux épisodes, au plein écran et aux options ; Retour revient au mode TV.
- Animation arrêtée en arrière-plan et compatible avec la désactivation des animations Android.

Les corrections de l’audit TV, la suppression du footer et de la popup Discord, Quitter et les mises à jour GitHub sont conservés. La validation normale du site reste requise.

Tests sans compte : 38 scénarios web, 21 scénarios Android natifs, 4 parcours de base du site réel et lecture de Matrix et de deux épisodes. L’émulateur utilise Android TV 14 ; aucun appareil Fire OS/TCL physique n’a été certifié. Les lecteurs externes gardent leurs commandes propres.

## Installation et mises à jour

Télécharger l’APK avec Downloader ou un navigateur sur la TV, puis autoriser l’installation depuis cette application si le système le demande. L’application apparaît sous le nom **MYLA TV**. Package, signature et nom du fichier restent identiques aux anciennes versions CineRegal TV pour conserver les données pendant une mise à jour.

À partir de 1.4, MYLA TV détecte les nouvelles releases stables et télécharge l’APK automatiquement pendant l’utilisation. L’installation attend la fin de la lecture. Une autorisation initiale et, selon le système, une confirmation Android/Fire OS peuvent être nécessaires. Réglages et aide → Mises à jour permet une vérification manuelle.

## Télécommande

Dans le catalogue : flèches pour sélectionner, OK pour ouvrir. Dans un film ou épisode : OK pour lecture/pause et flèches pour ±10 secondes. Menu ouvre les options ; Retour ferme le clavier ou une liste et revient. Appui long sur OK pour le curseur. **Quitter l’application** est dans le menu.

## Compatibilité

APK universel installable sur Android/Fire OS API 21+ avec un WebView suffisamment récent pour le site. Compatible au niveau de l’installation avec les TCL sous Android TV/Google TV. Un moteur trop ancien, notamment WebView 90, ne peut pas afficher le site actuel et doit être mis à jour. Les DRM, codecs et lecteurs externes dépendent de l’appareil. Vega OS utilise un autre format et ne peut pas installer cet APK.

Le site, les comptes et les contenus restent fournis par CineRegal. Le filtrage d’une régie externe observée peut nécessiter une adaptation si elle change de domaine.

# MYLA TV

Application pour piloter CineRegal sur Fire OS, Android TV et Google TV avec une télécommande.

**Dernière version : 1.9.0**

[Télécharger directement l’APK](https://github.com/cmp-al-1/cineregal-tv-download/releases/latest/download/CineRegal-TV.apk) — aucun compte GitHub nécessaire.

[Voir la release et sa somme SHA-256](https://github.com/cmp-al-1/cineregal-tv-download/releases/latest).

## Nouveautés 1.9.0

- En-tête du site retiré pour laisser plus de place au contenu.
- Films, Séries et Animés : barre compacte avec titre, recherche, tri et bouton Filtres.
- Genres, périodes et notes dans un panneau séparé ; Retour ferme le panneau et restaure la sélection.
- Recherche globale accessible dans le menu de la télécommande ; Connexion / compte dans Réglages et aide.
- Contrôles Cast/Chromecast/ScreenShare/AirPlay reconnus masqués dans le lecteur et lecture distante HTML désactivée.

Les fiches sur un écran TV, épisodes et saisons dans un panneau séparé, synopsis court avec Voir plus, navigation dans le contenu et avance accélérée restent présents. Appui court : ±10 secondes ; maintenir une flèche accélère à 30, 60 puis 120 secondes par déplacement, avec arrêt au relâchement. Menu ouvre les options du lecteur.

L’attente MYLA animée, les étapes publicitaires automatiques, le clic sur Accéder au contenu dès que le site le permet, le HUD sans volume, la suppression du footer et de la popup Discord, Quitter et le correctif de mises à jour 1.7.1 sont conservés. La validation normale du site reste requise.

Validation : 48 tests web, 28 scénarios Android natifs et 4 parcours réels dans l’APK réussis sur Android TV 14. Catalogue réel avec filtre Comédie et recherche globale vérifiés ; rendu contrôlé à 1280×720 et 960×540. Aucune TV Fire OS/TCL physique certifiée ; les lecteurs externes gardent leurs commandes propres.

## Installation et mises à jour

Télécharger l’APK avec Downloader ou un navigateur sur la TV et l’installer par-dessus MYLA TV. Package, signature et nom du fichier restent identiques aux anciennes versions CineRegal TV pour conserver les données. Autoriser la source d’installation si le système le demande.

Si une ancienne version, notamment 1.5.0, affiche « Vérifie Internet » et ne parvient pas à se mettre à jour, utiliser le lien direct ci-dessus et installer cet APK manuellement pour bénéficier du mécanisme corrigé. Depuis 1.7.1, la recherche utilise le lien public GitHub avec l’API en repli, les tentatives sont bornées et les erreurs de réseau, sécurité, HTTP, stockage et validation sont distinctes.

Les nouvelles releases stables sont recherchées pendant l’utilisation et téléchargées automatiquement, avec installation hors lecture. Android/Fire OS ou sa protection système peut imposer une confirmation. Réglages et aide → Mises à jour permet une vérification manuelle.

## Télécommande

Catalogue : flèches pour sélectionner, OK pour ouvrir. Film/épisode : OK pour lecture/pause ; Gauche/Bas pour reculer, Droite/Haut pour avancer. Maintenir accélère le déplacement. Menu ouvre les options et Commandes du lecteur rend accessibles les épisodes et le plein écran. Retour ferme le clavier ou une liste et revient. Appui long sur OK pour le curseur. Quitter l’application se trouve dans le menu.

## Compatibilité

APK universel installable sur Android/Fire OS API 21+ avec un WebView suffisamment récent pour le site, y compris les TCL sous Android TV/Google TV. Un moteur trop ancien, notamment WebView 90, doit être mis à jour. Les DRM, codecs et lecteurs externes dépendent de l’appareil. Vega OS utilise un autre format et ne peut pas installer cet APK.

Le site, les comptes et les contenus restent fournis par CineRegal. Le filtrage d’une régie externe observée peut nécessiter une adaptation si elle change de domaine.

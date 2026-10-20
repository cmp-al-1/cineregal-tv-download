# MYLA TV

Application pour piloter CineRegal sur Fire OS, Android TV et Google TV avec une télécommande.

**Dernière version : 2.2.0**

[Télécharger directement l’APK](https://cmp-al-1.github.io/cineregal-tv-download/MYLA-TV.apk) — aucun compte GitHub nécessaire.

[Voir la release et sa somme SHA-256](https://github.com/cmp-al-1/cineregal-tv-download/releases/latest).

## Nouveautés 2.2.0

**Reprendre** est maintenant une catégorie dans le menu et la navigation latérale. Les films et épisodes commencés sur cette TV y apparaissent avec leur temps de lecture. Une carte rouvre le lecteur et rétablit sa position lorsque l’application peut piloter sa vidéo, sans forcer la lecture. L’ancien bouton qui fermait seulement le menu s’appelle désormais **Revenir à l’écran**.

L’historique est conservé localement, sans compte, limité à 30 contenus et adapté au domaine courant. Les contenus terminés sont retirés. Il commence avec cette version : les anciennes positions ne sont pas importées. Les lecteurs dans une iframe d’un autre domaine gardent leur propre gestion de la position.

Les fonctions précédentes restent disponibles : catalogue, fiches et épisodes Android TV ; touche du menu personnalisable ; adresse active lue depuis [cineregal.live](https://cineregal.live/) ; vérification normale du site avec récupération après attente prolongée.

## Mises à jour depuis 1.10.0

- Mises à jour par fichiers HTTPS directs, avec miroir de secours et releases classiques en dernier recours.
- Fichiers contrôlés avant publication et après téléchargement : taille, SHA-256, package, version et signature.
- Vérifier maintenant ouvre l’installation système lorsqu’un APK est prêt. Annuler conserve le fichier et permet de réessayer.
- Diagnostic conservé par étape et bouton rendu après un échec ; une erreur du catalogue ne ferme plus le menu des mises à jour.
- Une réponse ancienne du serveur principal est confrontée au miroir avant d’annoncer que l’app est à jour.

Les adaptations TV précédentes sont conservées : en-tête et footer masqués, recherche et filtres compacts, fiches sur un écran, synopsis avec Voir plus, épisodes séparés, commandes du lecteur et avance accélérée, attente MYLA et étapes avant lecture. La validation normale du site reste requise.

Le mécanisme de mise à jour HTTPS a également été vérifié lors des versions précédentes sur Android TV 14 et Android TV 11, avec intégrité des APK et conservation des données. Les tests sur émulateur ne certifient pas les appareils Fire OS/TCL physiques.

## Installation et mises à jour

Télécharger l’APK avec Downloader ou un navigateur sur la TV et l’installer par-dessus MYLA TV. Package, signature et nom du fichier restent identiques aux anciennes versions CineRegal TV pour conserver les données. Autoriser la source d’installation si le système le demande.

Si une ancienne version, notamment 1.7.0, affiche « Vérifie Internet » et ne parvient pas à se mettre à jour, utiliser le lien direct ci-dessus et installer cet APK manuellement pour bénéficier du mécanisme corrigé. Depuis 1.10, le parcours normal utilise un petit manifeste HTTPS et un miroir sans API ni redirection de release. Les tentatives sont bornées et les erreurs de réseau, sécurité, HTTP, stockage et validation sont distinctes.

Chaque release stable déclenche la vérification de l’APK, sa publication statique et le contrôle des deux téléchargements anonymes. Les deux sources restent hébergées par GitHub : une panne générale peut affecter les deux.

Les nouvelles releases stables sont recherchées pendant l’utilisation et téléchargées automatiquement, avec installation hors lecture. Android/Fire OS ou sa protection système peut imposer une confirmation. Réglages et aide → Mises à jour permet une vérification manuelle.

## Télécommande

Catalogue : flèches pour sélectionner, OK pour ouvrir. Film/épisode : OK pour lecture/pause ; Gauche/Bas pour reculer, Droite/Haut pour avancer. Maintenir accélère le déplacement. Menu ouvre les options et Commandes du lecteur rend accessibles les épisodes et le plein écran. Retour ferme le clavier ou une liste et revient. Appui long sur OK pour le curseur. Quitter l’application se trouve dans le menu.

## Compatibilité

APK universel installable sur Android/Fire OS API 21+ avec un WebView suffisamment récent pour le site, y compris les TCL sous Android TV/Google TV. Un moteur trop ancien, notamment WebView 90, doit être mis à jour. Les DRM, codecs et lecteurs externes dépendent de l’appareil. Vega OS utilise un autre format et ne peut pas installer cet APK.

Le site, les comptes et les contenus restent fournis par CineRegal. Le filtrage d’une régie externe observée peut nécessiter une adaptation si elle change de domaine.

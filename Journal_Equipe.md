# Journal du projet

*Ce fichier est destiné à recevoir un récapitulatif de ce que vous avez fait pendant la journée avec votre équipe. Vous êtes libres d'organiser le bilan de vos journées comme bon vous semble (ex : fait aujourd'hui - plans pour demain - blocages)*

# LUNDI 15 MARS

- Création des features (étapes du projet).
- Accord sur le choix du sujet de l'animation, de sa base de données et de sa représentation : la répartition du temps de parole à la TV/radio entre femmes et hommes depuis au moins 10 ans (source : Ina). Personnages (homme et femme) qui voient leur phylactère (parole) évoluer au fil des ans. Bibliothèque d'animation : Zdog.
- Début de structure en CSS de la page.

# MARDI 16 MARS

MATIN. On a décortiqué le code des animations prises sur zdog pour le comprendre et on a ajouté, en commentaires, le fruit de nos expérimentations (on en a ensuite tiré un fichier à part de tout ça)
+ ajout dans le code : changement de position du visage souriant dans la partie CSS
+ résultat : on a deux visages mais qui ne s'affichent pas ensemble = RESOLU !!

APRES-MIDI. On a fini les animations statiques : on a rajouté la femme et les bulles. Ensuite, on a compris comment convertir le CSV en JSON.

# MERCREDI 17 MARS

APRES-MIDI. On a réussi à intégrer le fichier json au script.js avec fetch

# JEUDI 18 MARS

MATIN. Recherches autour des fonctions requestAnimationFrame et animate. Marie a trouvé comment créer une forme géométrique (notre bulle) et la faire grandir en CSS. A aussi créé une boucle pour afficher les années, mais celles-ci apparaissent à la suite.

APRES-MIDI. Replacement de la nouvelle bulle à la place des anciennes créées avec ZDog. Bug technique (push avec conflits) qui a pris près de 2h à être résolu.

POUR LES PROCHAINS JOURS : 
- faire apparaître les années au même endroit que le canvas (en superposition)
- faire apparaître une seule année à la fois
- faire changer la taille de la (les) bulle (s) en fonction des années
- créer la fonction pour calculer le pourcentage du temps de parole des hommes

# LUNDI 22 MARS

Travail sur l'affichage en parallèle de la croissance de la bulle et des années (beaucoup de pistes creusées).
En fin de journée, création des fonctions display, next et setInterval qui agissent en même temps.

DEMAIN :
- créer ID dans l'onglet HTML pour afficher le pourcentage du temps de parole des femmes
- positionner ce pourcentage dans le canvas
- positionner un peu plus haut l'affichage de l'année

# MARDI 23 MARS

Liste des actions de la journée (dans le désordre) :
- création de la bulle de l'homme
- création de la fonction qui permet d'afficher les pourcentages dans les deux bulles
- insertion d'une nouvelle police pour le texte (Trebuchet MS)
- rajout du titre et de la source des données
- repositionnement des éléments dans la page
- création de class en CSS pour gagner des lignes de code dans le fichier CSS
- débug des transitions saccadées de la croissance des bulles : elles sont maintenant plus fluides, grâce à la méthode "fill : "forwards""

DEMAIN :
- améliorer encore la disposition des éléments dans la page avec Flexbox
- ajouter de l'épaisseur à la bulle de la femme

# MERCREDI 24 MARS

MATIN. Masterclass avec une deputy CTO du Groupe La Centrale.

APRES-MIDI. Insertion de "position: relative" ou "position: absolute" dans le code CSS pour tenter de résoudre ce problème d'agencement + recherches autour de ce souci.

# JEUDI 25 MARS

MATIN. Rétrospective !
Encore des recherches sur le positionnement des éléments dans la page web.

APRES-MIDI. Démo !

<img style="width:100%;" src="/github-banner.png">

# Introduction aux processus de génie logiciel

- [TP1 - Gestion de la configuration et outils de collaboration](tp1/README.md)
- [TP2 - Intégration en continue: Automatisation de la gestion du build et des dépendances et des tests](tp2/README.md)
- [TP3 - Automatisation de tâches variées (déploiement en continue) et métriques associées au logiciel](tp3/README.md)
- [TP4 - Sprint, agilité](tp4/README.md)

## Le projet - Otto - Schedule all the things!

Otto, le gérant d'un petit restaurant, commence à être tanné de devoir planifier les heures de travail de son équipe dans un vieux fichier Excel. 
Il a entendu parlé de cette nouvelle affaire, l'Internet, et il aimerait se mettre à l'utiliser pour faciliter la gestion des horaires.

Toutefois, Otto n'est pas très bon avec la technologie. Il aurait besoin de votre équipe pour se moderniser. Grâce à vos talents et à Internet, 
il veut pouvoir accomplir les choses suivantes:

- Définir les heures d'ouverture de son restaurant à chaque jour
- Gérer les membres de son équipe de travail
- Céduler les employés pour travailler durant les heures d'ouverture
- Gérer les disponbilités de chacun des membres de son équipe de travail
- Empêcher de céduler un employé qui n'est pas disponible pour une certaine plage horaire
- Notifier par e-mail chacun des employés lorsque l'horaire d'une semaine est complété
- Etc.

Les items suivant proposent une liste non exhaustive de ce qui peut être réalisé dans le cadre du projet. 
En effet, il y a possibilité d'en faire plus que ce qui est demandé dans les énoncés des laboratoires. 
Le dernier livrable sera l'occasion parfaite pour vous dépasser puisque vous devrez vous-même choisir les _user stories_ à implémenter.

## Kit de départ

Le kit de départ est le code de base à utiliser pour le laboratoire, il fournit
un serveur web de base qui réplique l'implémentation de base avec des fonctionnalités en moins (plusieurs en moins!).

Le kit de départ:
- [java](https://github.com/glo2003/starter-kit-java)

Sur approbation de l'auxiliaire de laboratoire, vous pouvez également utiliser le langage de programmation de votre choix.

## Front end

Un front end est fourni pour que vous puissiez vous concentrer sur le backend. 
Il est disponible dans le dépôt suivant: [H18-Frontend](https://github.com/glo2003/h18-frontend).

Il est à noter que le code du client sera mis-à-jour tout au long de la session, que ce soit pour ajouter des nouvelles
fonctionnalités pour les prochains livrables ou encore suite à vos _pull requests_ pour régler des bugs. De plus, vous pouvez
modifier le code du client pour le personnaliser à votre application.

Ainsi, la manière conseillée d'interagir avec le dépôt est via un submodule. Voici deux références:
- https://git-scm.com/docs/git-submodule
- http://stackoverflow.com/a/1811738

Il peut également être approprié de faire un _fork_ de dépôt. Ainsi, vous pourrez facilement avoir accès aux modifications fournies tout en modifiant vous même le code.
Voir https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/.

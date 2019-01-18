<img style="width:100%;" src="/github-banner.png">

# Introduction aux processus de génie logiciel

- [TP1 - Gestion de la configuration et outils de collaboration](tp1/README.md)
- [TP2 - Intégration en continue: Automatisation de la gestion du build et des dépendances et des tests](tp2/README.md)
- [TP3 - Automatisation de tâches variées (déploiement en continue) et métriques associées au logiciel](tp3/README.md)
- [TP4 - Sprint, agilité](tp4/README.md)

## Le projet - Sharie - Échange de services et des biens!

Vous êtes un-e jeune étudiant-e en informatique et vous vivez dans un petit quartier où l'esprit communautaire est mis de l'avant.
En discutant avec vos voisins, vous vous rendez compte qu'ils possèdent divers électroménagers, comme une laveuse et une
sécheuse, et qu'ils ne s'en servent pas toujours alors que vous vous n'en avez pas. Vous leur demandez donc s'il serait
possible de les utiliser 1 fois par semaine, en échange de votre aide pour nettoyer les virus qu'ils ont sur leur
ordinateur.

Vos voisins trouvent l'idée intéressante et se mettent à faire ce genre d'échanges avec d'autres habitants du quartier. Cela
devient tellement populaire qu'ils vous demandent de faire une petite application pour faciliter l'échange de biens et
de services dans le quartier pour tout le monde. Ils veulent pouvoir effectuer les choses suivantes:

- Ajouter des nouveaux services ou biens à échanger
- Consulter la liste des services ou biens à échanger
- Réserver un service ou un bien pour une ou plusieurs journées
- Annuler une réservation d'un service ou un bien
- Notifier l'annonceur qu'une réservation a été faite
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
Il est disponible dans le dépôt suivant: [H18-Frontend](https://github.com/glo2003/h19-frontend).

Il est à noter que le code du client sera mis-à-jour tout au long de la session, que ce soit pour ajouter des nouvelles
fonctionnalités pour les prochains livrables ou encore suite à vos _pull requests_ pour régler des bugs. De plus, vous pouvez
modifier le code du client pour le personnaliser à votre application.

Ainsi, la manière conseillée d'interagir avec le dépôt est via un submodule. Voici deux références:
- https://git-scm.com/docs/git-submodule
- http://stackoverflow.com/a/1811738

Il peut également être approprié de faire un _fork_ de dépôt. Ainsi, vous pourrez facilement avoir accès aux modifications fournies tout en modifiant vous même le code.
Voir https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/.

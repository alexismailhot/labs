<img style="width:100%;" src="/github-banner.png">

## Introduction aux processus de génie logiciel

- [TP1 - Gestion de la configuration et outils de collaboration](tp1/README.md)
- [TP2 - Intégration en continue: Automatisation de la gestion du build et des dépendances et des tests](tp2/README.md)
- [TP3 - Automatisation de tâches variée (déploiement en continue) et métriques associées au logiciel](tp3/README.md)
- [TP4 - Rédaction de user stories et déroulement d’un sprint](tp4/README.md)


# Le projet - La pizzeria à Gilles

Gilles opère la pizzeria familiale depuis des dizaines d'années. Voyant ses parts de marché en diminution constante depuis quelques années, 
il a décidé qu'il était grand de lancer son entreprise sur le Web.


Gilles vous engage donc pour développer le système informatique de son restaurent. Il a de grandes ambitions:

- Gestion des commandes
- Statistiques sur les commandes pour voir les tendances
- Système de coupons automatisés
- Gestion des livreurs
- Gestion des recettes et du menu pour la cuisine
- Inventaire des ingrédients
- Voitures autonomes pour la livraison (Gilles est un grand rêveur)
- Etc.

Les items suivant proposent une liste non exhaustive de ce qui peut être réalisée dans le cadre du projet. 
En effet, il y a possibilité d'en faire plus que ce qui est demandé dans les énoncés des laboratoires. Le dernier livrable sera l'occasion parfaite pour vous dépasser
puisque vous devrez vous-même choisir les _user stories_ à implémenter.

# Kit de départ

Le kit de départ est le code de base à utiliser pour le laboratoire, il fournit
un serveur web de base qui réplique l'implémentation de base avec des fonctionnalités en moins (plusieurs en moins!).

Les kits de départ:
- [java](https://github.com/glo2003/starter-kit-java)
- [clojure](https://github.com/glo2003/starter-kit-clojure)

Sur approbation de l'auxiliaire de laboratoire, vous pouvez également utiliser le langage de programmation de votre choix.


# Front end

Un front end minimal est fourni. Il est disponible dans le dépôt suivant: https://github.com/glo2003/h17-frontend.
Il est à noter que le code du client sera mis-à-jour tout au long de la session, que ce soit pour ajouter des nouvelles
fonctionnalités pour les prochains livrables ou encore suite à vos _pull requests_ pour régler des bugs. De plus, vous pouvez
modifier le code du client pour le personnaliser à votre application.

Ainsi, la manière conseillée d'interagir avec le dépôt est via un submodule. Voici deux références:
- https://git-scm.com/docs/git-submodule
- http://stackoverflow.com/a/1811738

Il peut également être approprié de faire un _fork_ de dépôt. Ainsi, vous pourrez facilement avoir accès aux modifications fournies tout en modifiant vous même le code.
Voir https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/.

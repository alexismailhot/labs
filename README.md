<img style="width:100%;" src="/github-banner.png">

## Introduction aux processus de génie logiciel

- [TP1 - Gestion de la configuration et outils de collaboration](tp1/README.md)
- [TP2 - Intégration en continue: Automatisation de la gestion du build et des dépendances et des tests](tp2/README.md)
- [TP3 - Automatisation de tâches variée (déploiement en continue) et métriques associées au logiciel](tp3/README.md)
- [TP4 - Rédaction de user stories et déroulement d’un sprint](tp4/README.md)

# Kit de départ

Le kit de départ est le code de base à utiliser pour le laboratoire, il fournit
un serveur web de base qui réplique l'implémentation de base avec des fonctionnalités en moins (plusieurs en moins!).

Les kits de départ:
- [java](https://github.com/glo2003/starter-kit-java)

# Le projet

Le projet est un programmes qui se connecte et récupère l'information de plusieurs API (github, travis, etc...) et fournit un API pour une interface externe (web). Il liste les projets sur Github, affiche le statut Travis-ci, le nombre de problèmes/questions ("issues"), etc... pour plusieurs projets de programmation.

<img alt="project architecture" src="/resources/project-architecture.png">

- L'interface est située ici: http://glo2003.xyz/
- Le code de l'interface: https://github.com/glo2003/project-dashboard-frontend

- Il y a possibilité d'en faire plus que ce qui est dans le laboratoire (ajouter
  des fonctionnalités à l'interface par exemple), il y
  a un concours à la faculté, pour les meilleurs travaux remis.

## Spécifications

- Lister les projets avec les informations supplémentaires associées
  - Travis status
  - Open Issues number
  - Badges 🆘
- Lister les utilisateurs (extrait des projets)
  - Nombre d'issues assignés
  - Badges individuels

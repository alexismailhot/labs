<img style="width:100%;" src="/github-banner.png">

# [Laboratoire GLO-2003]()

Introduction aux processus de génie logiciel

- [TP1 - Gestion de la configuration et outils de collaboration](tp1/README.md)
- [TP2 - Intégration en continue: Automatisation de la gestion du build et des dépendances et des tests](tp2/README.md)
- [TP3 - Automatisation de tâches variée (déploiement en continue) et métriques associées au logiciel](tp3/README.md)
- [TP4 - Rédaction de user stories et déroulement d’un sprint](tp4/README.md)

# Kit de départ

Le kit de départ est le code de base à utiliser pour le laboratoire, il fourni
un serveur web de base qui réplique l'implémentation de base avec des (beaucoup) de fonctionnalitées en moins.

Les kits de départ:
- [java](https://github.com/glo2003/starter-kit-java)

# Le projet

Le projet est un programmes qui se connecte et récupère l'information de plusieurs API (github, travis, etc...) et fourni un API pour un interface externe (web). Il liste les projets sur Github, affiche le status Travis-ci, le nombres problèmes/questions ("issues"), etc... de plusieurs projets de programmation.

<img alt="project architecture" src="/resources/project-architecture.png">

- L'interface est situé ici: http://example.com/
- Le code de l'interface: https://github.com/glo2003/project-dashboard-frontend

## Spécifications

- Lister les projets avec les informations supplémentaires associés
  - Travis status
  - Open Issues number
  - Badges 🆘
- Lister les utilisateurs (extrait des projets)
  - Nombre d'issues assignés
  - Badges individuels

## Préparation des labs

- Outils
  - `⭐️` Github
  - `⭐️` Travis-ci
- Projet
  - `50%` Description générale du projet de session
  - Description du logiciel
  - `50%` Code de base (java)
  - `0%` Code de base (clojure)
  - `0%` Code de base (go)
  - `10%` Implémentation de référence (go)
    - Communication
    - Service web
    - Base donnée
    - Analyse de projet
      - Badges
      - Autres données
  - `40%` Interface
    - Communication (temps-réel)
    - Affichage de projet
      - Status (github & travis)
      - Badges
      - Liste
    - Affichage d'utilisateurs
  - `80%` Infrastructure
    - `` Nom de domaine (idéalement)
    - `` Endroit pour déployer les projets (heroku peut-etre)
    - `` Endroit pour déployer le code de référence
    - `` Déploiement de l'interface, github pages

- TP1 `⭐️`
- TP2 `❌`
  - Préparation de l'énoncé
  - Introduction au sujet
  - Références
  - Exercices associés
- TP3 `❌`
- TP4 `❌`

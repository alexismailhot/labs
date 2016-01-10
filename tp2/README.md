# TP2 - Intégration en continue: Automatisation de la gestion du build et des dépendances et des tests.

## Laboratoire

À partir du code du laboratoire #1 nous allons ajouter un intégration de la
gestion des dépendances, l'exécution automatisé des tests et de la construction
automatique du logiciel dans Travis-CI.


### Tâches

- Mise en route de l'intégration en continue avec [Travis-ci](https://travis-ci.com/glo2003).
    Il y a plusieurs [exemples](https://github.com/travis-ci/travis.rb) sur Github
- Utilisez [Travis-ci.com][travis], comme nos répertoires `git` sont privés nous
    devons utiliser Travis-ci privé.
- Ajouter quelques tests unitaires.
- Ajouter l'exécution des tests unitaires automatiques.
- Ajouter des fonctionnalités au logiciel. Des "issues" Github seront créés dans
    vos projets et vous aurez a en ajouter 3.
- Le projet doit être fonctionnel
- Les requis des laboratoires précédents doivents encore être opérationnels
- Documenter votre processus d'intégration continue, y mettre 4 références et
   résumer chacune d'elle

## Remise

- Répertoire git dans github avec `tag` `remise-2` positionné sur le bon commit,
    le tag doit avoir été créé et synchronisé avant la date limite.
- Avoir les issues choisis terminés, et liés au bon "pull-request" (qui eux
    aussi sont fermées).
- Avoir travis-ci fonctionnel avec les tests unitaires et la construction du
    logiciel automatique fonctionnel.
- Un document (court et concis), expliquant votre processus
  d'intégration continue avec 4 références.

## Évaluation

Le laboratoire vaut 8% de la session, les notes seront distribuées comme suit:

- 40% Projet
  - Nouvelles fonctionnalitées
  - Utilisation de Git
  - `.gitignore`
- 20% Questions
- 40% Readme

ps. Vous êtes évalués autant sur ce que vous livrez que sur la pratique et la façon
d'y arriver.

## Références

- [Continuous integration - Martin Fowler](http://www.martinfowler.com/articles/continuousIntegration.html)
- [Documentation de Travis-ci](https://docs.travis-ci.com/)
- [Exemple](https://github.com/glo2003/project-dashboard-frontend)

[travis]:https://travis-ci.com/

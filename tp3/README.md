# TP3 - Automatisation de tâches variée (déploiement en continue) et métriques associées au logiciel.


## Laboratoire

Dans ce laboratoire, vous aurez à ajouter plusieurs tâches automatisables sur le logiciel. De plus, vous aurez à écrire des *user stories*.

### Tâches

- Déployer sur heroku (ou tout autre plateforme sur l'avis du chargé de lab)
  - Faire que le déploiement soit automatique et fais par Travis-CI
- Ajouter du calcul de métriques sur le logiciel (par Travis-CI aussi)
  - Est-ce que les dépendances sont à jours
  - Quel est la couverture des tests dans le code
- Ajouter les badges de Travis et des autres outils utilisés à votre README (https://docs.travis-ci.com/user/status-images/)
- Ajouter de la vérification de style de code (`code style`). (Ajouter la documentation vers le style de code dans le README).
- Un document expliquant ce qu'est le déploiement en continue, avec des références associés (wiki, ou dans la documentation de votre projet).
- Écriture de user stories
- Implémentation de user stories
- Rétrospective sur la qualité du code. 

### User stories

Vous devez écrire 8 `User Stories` selon les standards appris dans le cours.
Vous devrez ensuite les prioriser. Dans ce TP, vous devrez **implémenter 2 user stories**.

Exemples (ces exemples ne sont pas rédigés selon les standards appris dans le cours délibérément, à vous de bien les reformuler):

- Ajouter une route pour commander des pizzas (ex. POST à `/orders`)
- Implémenter une cache pour les images
- Ajouter de l'information dans l'interface

Quelques notes:

- Il est optionnel de modifier le frontend dans le cadre de ce TP. Par contre, vous pouvez implémenter des user stories frontend si vous le désirez.
- Validez avec l'auxiliaire de laboratoire vos fonctionnalités choisies.
- Si vous choisissez des features nécessitant l'écriture dans la base de données, vous pouvez vous créer un compte gratuit sur mLab.
  La base de donnée de type Sandbox sera amplement suffisante (https://mlab.com/plans/).

## Remise

- Répertoire git dans github avec `tag` `remise-3` positionné sur le bon commit,
    le tag doit avoir été créé et synchronisé avant la date limite.
- Avoir terminés toutes les issues.
- Les requis des laboratoires précédents doivent être fonctionnels
- Le document expliquant qu'est-ce que le déploiement en continue (wiki)
- Rétrospective de la qualité du code (wiki)
- Répertoire github

## Évaluation

Le laboratoire vaut 8% de la session.

- 50% Projet
  - Complexité des user stories implémentées.
- 20% Document sur le déploiement continue
- 30% Écriture de user stories

P.S. Vous êtes évalués autant sur ce que vous livrez que sur la pratique et la façon
d'y arriver.

## Références

Style:
- http://checkstyle.sourceforge.net/

Déploiement:
- https://www.heroku.com/
- https://docs.travis-ci.com/user/deployment/heroku/

Continuous delivery:
- https://en.wikipedia.org/wiki/Continuous_delivery
- http://techblog.netflix.com/2015/11/global-continuous-delivery-with.html
- https://aws.amazon.com/codedeploy/
- http://martinfowler.com/bliki/ContinuousDelivery.html

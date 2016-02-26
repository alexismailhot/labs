# TP3 - Automatisation de tâches variée (déploiement en continue) et métriques associées au logiciel.


## Laboratoire

Dans ce laboratoire, vous aurez a ajouter plusieurs tâche automatisable sur le logiciel.

### Tâches

- Déployer sur heroku (ou tout autre plateforme sur l'avis du chargé de lab)
  - Faire que le déploiement soit automatique et fais par Travis-CI
- Ajouter du calcul de métriques sur le logiciel (par Travis-CI aussi)
  - Est-ce que les dépendances sont à jours
  - Quel est la couverture des tests dans le code
- Ajouter de la vérification de style de code (`code style`). (Ajouter la documentation vers le style de code dans le README).
- Un document explicant ce qu'est le déploiement en continue, avec des références associés (wiki, ou dans la documentation de votre projet).
- Le projet doit être fonctionnel.

## Remise

- Répertoire git dans github avec `tag` `remise-3` positionné sur le bon commit,
    le tag doit avoir été créé et synchronisé avant la date limite.
- Avoir terminés tout les issues.
- Les requis des laboratoires précédents doivents être fonctionnels
- Le documens explicant qu'est-ce que le déploiement en continue

## Évaluation

Le laboratoire vaut 8% de la session.

ps. Vous êtes évalués autant sur ce que vous livrez que sur la pratique et la façon
d'y arriver.

## Références

Style:
- `go fmt` - http://blog.golang.org/go-fmt-your-code
- http://checkstyle.sourceforge.net/

Déploiement:
- https://www.heroku.com/
- https://docs.travis-ci.com/user/deployment/heroku/

Continuous delivery:
- https://en.wikipedia.org/wiki/Continuous_delivery
- http://techblog.netflix.com/2015/11/global-continuous-delivery-with.html
- https://aws.amazon.com/codedeploy/
- http://martinfowler.com/bliki/ContinuousDelivery.html

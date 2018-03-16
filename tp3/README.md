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

Vous devez écrire 5 `User Stories` selon les standards appris dans le cours.
Vous devrez ensuite les prioriser. Dans ce TP, vous devrez **implémenter 2 user stories**.

Exemples (ces exemples ne sont pas rédigés selon les standards appris dans le cours délibérément, à vous de bien les reformuler):

- Gérer la liste des employés
- Gérer les disponibilités d'un employé
- Enlever un employé de l'horaire
- Notifier les employés que l'horaire de la semaine a été créé
- Changer les heures d'ouverture
- Ajouter de l'information dans l'interface
- ...

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

## Grille
```
Code		Pondération
Fonctionnalité 1		15
		
Fonctionnalité 2		15
		
Déploiment sur Heroku automatisé		10
Code Style check		5
Software metric calculation		5
User stories		
User story 1		3.75
User story 2		3.75
User story 3		3.75
User story 4		3.75
User story 5		3.75
User story 6		3.75
User story 7		3.75
User story 8		3.75
Documentation		
Déploiment continu		
	Sources variées (2 sources, 2 compagnies)	5
	Avantages et bonnes pratiques pour les entreprises	10
Rétrospective - Qualité du code		5
Pénalités		
Pas de tag remise-3		-5
Erreur au démarrage de l'application		-1
Pas fermé les issues		-2
Pas de mention des commits no. dans les issues		-2
TOTAL		100
```

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

# TP1 - Gestion de la configuration et outils de collaboration

## Sujets

- Gestion de la configuration
- Git
- Github
- API REST

## Laboratoire

### Mise en situation

Comme premier livrable, Gilles, le client, veut connaître d'avantage l'équipe de développement affectée au projet et montrer fièrement son équipe de développeurs
directement sur le site Web du restaurant. Ainsi, il désire une section _about_ qui liste le nom des développeurs, leurs avatars ainsi que le nombre de _commits_ que chaque développeur a fait dans le projet. Ces informations doivent être générée automatiquement à partir de l'API de Github.


Ensuite, Gilles veut pouvoir obtenir un menu des pizzas du restaurant sur le site de sa pizzeria. Le menu consiste simplement en liste de pizzas, avec les attributs suivants:
- L'id de la pizza
- Le nom de la pizza
- Une photo de la pizza
- Une courte description de la pizza
- Une liste d'ingrédients (id et nom)

Une base de code a été mise en place, vous devez la mettre dans votre dépot, et y effectuer des amélioration avec quelques contraintes. Vous pouvez aussi partir de zéro avec le language de votre choix (après l'approbation du chargé de laboratoire).

### Questions sur git

Sur Github, créez un wiki dans lequel il y a une page nommée "Lab 1 - git". Dans ce document markdown, répondez aux questions suivantes:

> **NOTE** Bien qu'il soit possible d'utiliser un GUI tel que Github Desktop ou SourceTree, les questions se concentrent sur l'utilisation de git en ligne de commande puisque cela favorise la compréhension.

#### Questions générales

1. Expliquez pourquoi on utilise un système de gestion du code source et des outils de collaboration.
2. Est-ce que git est un système de gestion de versions centralisé ou décentralisé? Quelle est la différence entre les deux? Nommez un avantage et un inconvénient pour chacun des deux types systèmes.

#### Branching et Merge

3. Quelle est la différence entre `git merge` et `git rebase`? Expliquez dans vos propres mots et illustrez votre réponse avec une image (originale ou tirée d'Internet, avec citation).
4. Nommez trois situations qui peuvent mener à un _merge conflict_.

Les questions suivantes font référence au dépôt suivant: https://github.com/glo2003/merge-conflict-example.

#### Exercice

5. Est-ce qu'il y a un conflit entre `branch-a` et `master`? Pourquoi?
6. Est-ce qu'il y a un conflit entre `branch-a` et `branch-c`? Pourquoi?
7. Est-ce qu'il y a un conflit entre `branch-a` et `branch-b`? Pourquoi?
8. Qu'arrive-t-il si on supprime la branche `branch-a`, `branch-b` ou `branch-c`? Est-ce souhaitable?
9. Faites un rebase de `branch-b` sur `branch-a`. Lister les commandes utilisées, assumant que votre `HEAD` est présentement sur `master`. S'il y a un conflit, nommez également les étapes utilisées pour le résoudre (commandes git, édition de fichier, utilisation d'outils graphiques de merge, etc.)
10. Ensuite, lister les commandes pour merger `branch-b` sur master puis `branch-c` sur `master`. Ajouter une image de votre graphe de commits après toutes ces opérations. Cette image peut simplement être une capture d'écran de la sortie de `git log --graph --decorate --pretty=oneline --abbrev-commit --all`.
11. Mantenant, qu'arrive-t-il si on supprime la branche `branch-a`, `branch-b` ou `branch-c`? Est-ce souhaitable?


### README

Un nouveau développeur joint votre équipe et devrait être en mesure de s'intégrer au projet le plus rapidement possible. Un fichier README (comme celui-ci) qui est à la racine du projet en explique les bases. Une autre bonne pratique est d'avoir un fichier CONTRIBUTING à la racine.

- Documentez de façon simple et consiste votre processus d'utilisation de git
  - Quoi mettre dans un message de "commit"
  - Quand créer une branche
- Documentez comment démarrer votre application de manière à ce que quelqu'un qui clone le dépôt (par exemple un correcteur) puisse facile mettre en marche votre application.

### Autres tâches

- Développement des fonctionnalités du projet du projet (des issues dans Github seront créées par l'auxiliaire directement dans votre projet)
- Gitignore
  - Préparez un fichier `.gitignore` approprié pour votre projet. Y mettre tout ce que vous jugez pertinent selon le langage et l'IDE utilisé.
- Faire une _pull request_
  - La manière de travailler avec git n'est pas imposée. Par contre, on demande pour ce livrable d'avoir *au moins une pull request*. 
    Une pratique courante est d'empêcher les contributeurs de _merger_ sur la branche _master_ sans que certains membres de l'équipe aient approuver
    les modifications, par le biais d'une _pull request_.


## Remise

- Répertoire git dans github avec `tag` `remise-1` positionné sur le bon commit,
    le tag doit avoir été créé et synchronisé avant la date limite. N'oubliez pas de pusher le tag pour qu'il ne se retrouve pas uniquement en local.
- Fichier README avec instructions (la section "CONTRIBUTING" peut être dans
    le même fichier ou externe mais ça doit être spécifié dans le README)
- Autre document ou Wiki avec les questions sur `git`
- Le projet doit être fonctionnel
- Le fichier `.gitignore`
- Développement des fonctionnalités du projet à partir des issues créées dans votre dépôt Github
- Pull request

## Évaluation

Le laboratoire vaut 8% de la session, les notes seront distribuées comme suit:

- 40% Projet
  - Nouvelles fonctionnalitées (à détailler)
  - Utilisation de Git
  - `.gitignore`
  - Qualité du code
- 30% Questions
- 30% Readme

ps. Vous êtes évalués autant sur ce que vous livrez que sur la pratique et la façon
d'y arriver.

## Exercice Supplémentaires

- [Learn Git Branching](https://pcottle.github.io/learnGitBranching/) - Tutoriel en ligne
- [GitHub training](https://services.github.com/on-demand/github-cli/) - Le "tab" on-demand

## Références

### Outils

- [Git](http://git-scm.com/)
- [Sourcetree](https://www.sourcetreeapp.com)
- [Github desktop](https://desktop.github.com/)
- [Tortoise git](https://tortoisegit.org/)

### IDE
- Intellij
- Spacemacs
- Netbeans
- Eclipse
- Atom
- Vim
- ...
- notepad

### Aide
- [Atlassian Git guides](https://www.atlassian.com/git/)
- [Atlassian Git tutorials](https://www.atlassian.com/git/tutorials/)
- [Git documentation](http://git-scm.com/doc)
- [Github Help](https://help.github.com/)
- [Learn Git Branching](https://pcottle.github.io/learnGitBranching/) - Tutoriel en ligne
- [Git Reference](http://gitref.org/) - Référence simplifiée
- [Gitcasts](http://gitcasts.com/) - Vidéos en ligne
- [Github training](https://training.github.com/) - Plusieurs  autres resources;
- [Git It](https://github.com/jlord/git-it-electron)
- [Utiliser Github sans mot de passe avec SSH](https://help.github.com/articles/generating-an-ssh-key/)
- [Ressource sur Git du cours GIF-1003](http://www2.ift.ulaval.ca/~eude/Gif-1003/Initiation_a_git/Labo%20sur%20Git.htm)

### Cheat Sheets

- [Github's git cheat sheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)
- [Pastjean's git cheat sheet](https://github.com/pastjean/git-cheat-sheet)

### WorkFlows
- https://guides.github.com/introduction/flow/
- https://summit.atlassian.com/archives/2013/inside-the-development-team/git-workflows-a-la-carte
- https://github.com/nvie/gitflow
- http://nvie.com/posts/a-successful-git-branching-model/
- https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

### Information sur les systèmes de gestion de la configuration / code source

- [Linus Torvalds on Git (youtube)](https://www.youtube.com/watch?v=4XpnKHJAok8)
- http://ericsink.com/vcbe/html/history_of_version_control.html
- http://www.git-scm.com/book/en/v2/Getting-Started-About-Version-Control

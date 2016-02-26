var request = require("request");

var teams = [
"glo2003/team1",
"glo2003/team2",
"glo2003/team3",
"glo2003/team4",
"glo2003/team5",
"glo2003/team6",
"glo2003/team7",
"glo2003/team8",
"glo2003/team9",
"glo2003/team10",
"glo2003/team11",
"glo2003/team12",
"glo2003/team13",
"glo2003/team14",
"glo2003/team15",
"glo2003/team16",
"glo2003/team17",
];

const i1body = `1. Setup Heroku
2. Setup your project on Heroku
3. Make travis-ci deploy to Heroku when tests passes
4. Comment this issue with the heroku adress and add it to the \`Readme.md\`
------------------

1. Préparer heroku pour votre projet
2. Déployez votre projet sur heroku
3. Faire que travis-ci déploy automatiquement sur heroku quand les tests passent
4. Commentez cet issue avec l'adresse heroku et ajoutez la au \`Readme.md\`

- https://devcenter.heroku.com/categories/java
- https://devcenter.heroku.com/categories/go
`

const i2body = `Add 1 software metric for travis-ci to compute

examples:
- Dependances update status
- Test coverage
- Function complexity
- ... (your idea)

---------------
Ajoutez des métriques que travis-ci calcule

examples:
- Est-ce que les dépendances sont à jours
- La couverture des tests dans le code
- La complexité du projet
- Votre idée ...
`

const i3body = `Add code style check by travis and in build

---

Ajoutez la vérification du style de code par travis et dans vos build
`

const i4body = `Document what is continuous deployment, with examples.

Document simply what is contiuous deployment, what it is used for, find companies
that uses it and tool they use to help. 2 References and at least 2 companies examples

---

Documentez ce qu'est le déployement en continue, avec des exemples.

Un document simple sur ce qu'est le déploiement en continue, son utilité, trouvez
des compagnies qui s'en servent et les outils qu'ils utilisent pour appuyer votre explication.

2 références et 2 exemples de compagnies.
`


const issues = [{"title": "[TP3] Setup auto deploy on Heroku by Travis-CI",
  "body": i1body},
{"title": "[TP3] Add software metrics calculations",
 "body": i2body},
{"title": "[TP3] Add code style check",
 "body": i3body},
{"title": "[TP3] Document what is continuous deployment, with examples",
 "body": i4body}];

teams.forEach( function(team){
  issues.forEach( function(issue){
    request({
      method: 'POST',
      headers: {
        'User-Agent': 'request',
        'Authorization' : `Bearer ${process.env['GITHUB_TOKEN']}`
      },
      uri: `https://api.github.com/repos/${team}/issues`,
      json: issue
    },function(error, response, body){
      if (error) {
        return console.error('upload failed:', error);
      }
      console.log('Upload successful!  Server responded with:', body);
    });
  });
});

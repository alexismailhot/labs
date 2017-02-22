var request = require("request");

var teams = [
    "glo2003/h17-team1",
    "glo2003/h17-team2",
    "glo2003/h17-team3",
    "glo2003/h17-team4",
    "glo2003/h17-team5",
    "glo2003/h17-team6",
    "glo2003/h17-team7",
    "glo2003/h17-team8-backend",
    "glo2003/h17-team9",
    "glo2003/h17-team10",
    "glo2003/h17-team11",
    "glo2003/h17-team12",
    "glo2003/h17-team13",
    "glo2003/h17-team14",
    "glo2003/h17-team16",
    "glo2003/h17-team17",
    "glo2003/h17-team18",
];

const i1body = `1. Setup Heroku
2. Setup your project on Heroku
3. Make travis-ci deploy to Heroku when tests passes
4. Comment this issue with the heroku adress and add it to the \`Readme.md\`
------------------

1. Préparez heroku pour votre projet
2. Déployez votre projet sur heroku
3. Faire que travis-ci déploie automatiquement sur heroku quand les tests passent
4. Commentez cet issue avec l'adresse heroku et **ajoutez la au \`README.md\`**

 https://devcenter.heroku.com/
`;

const i2body = `Add 1 or more software metric for travis-ci to compute

examples:
- Dependances update status
- Test coverage
- Function complexity
- ... (your idea)
**Add icons to your README.md https://docs.travis-ci.com/user/status-images/**

---------------
Ajoutez des métriques que travis-ci calcule

exemples:
- Est-ce que les dépendances sont à jours
- La couverture des tests dans le code
- La complexité du projet
- Votre idée ...
**Ajouter les icônes des outils utilisés au README https://docs.travis-ci.com/user/status-images/**
`;

const i3body = `Add code style check by travis and in build

---

Ajoutez la vérification du style de code par travis et dans vos build
`;

const i4body = `Document what is continuous deployment, with examples.

Document simply what is contiuous deployment, what it is used for, find companies
that uses it and tool they use to help. 2 References and at least 2 companies examples

---

Documentez ce qu'est le déployement en continue, avec des exemples.

Un document simple sur ce qu'est le déploiement en continue, son utilité, trouvez
des compagnies qui s'en servent et les outils qu'ils utilisent pour appuyer votre explication.

2 références et 2 exemples de compagnies.
`;

const i5body = `Écrivez 5 user stories selon les standards appris dans le cours
`;

const i6body = `Implémentez 2 user stories. Ouvrez des issues pour ces fonctionnalités. Fermez celle-ci en
mettant un lien vers les deux issues ouvertes.
`;


const i7body = `Faites une rétrospective sur la qualité de votre code. Idéalement, cela devrait être
fait à la toute fin du livrable 3.
Posez-vous des questions telles que:

- Est-ce que les outils mis en place permettent de faire ressortir des lacunes du code? Lesquelles?
- Est-ce que le code est uniforme ou on peut clairement voir qui l'a écrit?

Le but n'est pas de dire que tout va bien ou de blâmer un membre de l'équipe, mais d'avoir une réflexion critique sur votre code.
`;


const issues = [{"title": "[TP3] Setup auto deploy on Heroku by Travis-CI",
                 "body": i1body},
                {"title": "[TP3] Add software metrics calculations",
                 "body": i2body},
                {"title": "[TP3] Add code style check",
                 "body": i3body},
                {"title": "[TP3] Document what is continuous deployment, with examples",
                 "body": i4body},
                {"title": "[TP3] Write 8 user stories",
                 "body": i5body},
                {"title": "[TP3] Implement 2 user stories",
                 "body": i6body},
                {"title": "[TP3] Code quality retrospective",
                 "body": i7body},
               ];

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

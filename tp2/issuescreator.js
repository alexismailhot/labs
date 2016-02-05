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

const i1body = `
In your API add an \`open_issues:[issue1,issue2,...]\`   item which has a list of 5 of the open issues
in each projects.

Isue format must be the same has Github https://developer.github.com/v3/issues/

Dans votre API, ajoutez un champ \`open_issues:[issue1,issue2,...]\` qui contien
5 issue ouvertes dans chaque project.

Le format des issues doit être le meme que Github https://developer.github.com/v3/issues/
`


const i2body = `
Make Travis-ci compile your project and run your unit tests

Faire compiler et rouler les tests unitaires sur Travis-ci.com
`

const i3body = `
Make a dummy unit test that is runs on travis-ci
---------
Assert true = true is enough
But if you impress me it is better
----------

Faire un test unitaire (il peut être stupide)
-----------------------
Assert true = true est bien correct.
Si vous m'impressionnez c'est encore mieux
`

const i4body = `
Server must show in UI
(Ui has a bug which will be fixed feb 12)

Serveur doit afficher l'interface
(l'interface a un bug qui va être réglé le 12 février)

http://glo2003.xyz/?server=http://votreserveur:votreport/
`

const i5body = `
Document what is continuous integration, what are the good practices. Base your
knowledge on references that you will quote and resume.

Documentez qu'est-ce que l'intégration en continue et quelles sont les bonnes pratique.
Vos dire doivent être basé sur des références que vous allez résumer.

example :
- Martin Fowler
- Wikipedia
`

const issues = [{"title": "Add in API an open issues list",
  "body": i1body},
{"title": "Make it build on travis-ci",
 "body": i2body},
{"title": "Make a dummy unit-test",
 "body": i3body},
 {"title": "Must work in ui",
  "body": i4body},
  {"title": "Document what is continuous integration",
   "body": i5body}];

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

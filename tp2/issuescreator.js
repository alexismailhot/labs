var request = require("request");

var teams = [
"glo2003/team1",
"glo2003/team2",
"glo2003/team3",
"glo2003/team4",
"glo2003/team5",
"glo2003/team6",
"glo2003/team7",
"glo2003/team8-backend",
"glo2003/team9",
"glo2003/team10",
"glo2003/team11",
"glo2003/team12",
"glo2003/team13",
"glo2003/team14",
"glo2003/team16",
"glo2003/team17",
"glo2003/team18",
];

const i1body = `
Au livrable précédent, la route \`/menu/pizzas\` retournait des données arbitraires. Maintenant, connectez ce menu à la base de données de production.
L'URL de la base de données est mongodb://<dbuser>:<dbpassword>@ds131139.mlab.com:31139/glo2003-prod. Le nom d'utilisateur est \`teams\` et le mot de
passe est \`hickeyisright\`.
`;

const i2body = `
Faire compiler votre API et ses dépendances sur Travis-CI et faire exécuter les tests de votre système.
`;

const i3body = `
Ajoutez des routes à l'API pour obtenir des top 10 des ingrédients et des pizzas les plus populaires.
Ces top 10 doivent provenir des achats de la collection \`purchases\` de la base de données.
\`\`\`
/menu/top/ingredients

{
    top_ingredients : [
        {
            id: 1,
            name: 'Sauce tomate'
        },
        {
            id: 2,
            name: 'Fromage'
        },
        ...
    ]
}
\`\`\`

\`\`\`
/menu/top/pizzas

{
    top_pizzas : [
        {
            id: 456,
            name: 'Pep-fro'
        },
        {
            id: 789,
            name: 'Hawaiian'
        },
        ...
    ]
}
\`\`\`
`;

const i4body = `
Ajouter des tests automatisés sur le calcul des tops 10. Ces tests doivent fonctionner dans Travis-CI. Bien sûr, ces tests doivent
s'exécuter en isolation, c'est-à-dire sans utiliser la base de donnée de production.
`;


const i5body = `
Documentez ce comment vous avez testé la fonctionnalité des tops 10. Expliquer la technique utilisée et comment cette technique
permet d'avoir des tests reproductibles qui s'exécutent en isolation.
`;

const i6body = `
Documentez qu'est-ce que l'intégration en continue et quelles sont les bonnes pratique.
Vos dire doivent être basé sur des références que vous allez résumer. Vous serez évalués sur
la rigueur de vos explications ainsi que la qualité de la recherche. Cette documentation
doit être faite à partir d'au moins quatre sources citée.
`;

const i7body = `
Documentez votre processus de développement logiciel. Il s'agit de faire un schéma semblable à ce que vous avez vu avec UPEDU.
Vous devrez avoir une documentation personnalisée de VOTRE processus, avec les artefacts, rôles, activités, etc. en oeuvre dans les deux premiers TP,
et non pas une documentation exhaustive de tout ce qui est disponible dans le UPEDU.
Vous serez donc évalués à votre capacité de réflexion sur vos pratiques et votre capacité de synthèse.

Vous pouvez utilisez le logiciel Process Edit ou un autre logiciel semblable. Ajouter également un court texte explicatif en lien
avec le schéma.
`;

// Use semaine de plus? (et une de moins pour le livrable suivant)
const issues = [{"title": "Connecter le menu de pizzas à la base de données",
                 "body": i1body},
                {"title": "Ajoutez l'intégration continue Travis-CI",
                 "body": i2body},
                {"title": "Ajouter les routes pour les top 10 de pizzas et d'ingrédients",
                 "body": i3body},
                {"title": "Tester la fonctionnalité top 10",
                 "body": i4body},
                {"title": "Documentez comment vous avez tester la fonctionnalité du top 10",
                 "body": i5body},
                {"title": "Documenter ce qu'est l'intégration continue",
                 "body": i6body},
                {"title": "Modélisez votre processus de développement logiciel",
                 "body": i7body}];

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

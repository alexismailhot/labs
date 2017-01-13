var request = require("request");

var teams = [
    "glo2003/h17-team4",
    // "glo2003/h17-team2",
    // "glo2003/h17-team3",
    // "glo2003/h17-team4",
    // "glo2003/h17-team5",
    // "glo2003/h17-team6",
    // "glo2003/h17-team7",
    // "glo2003/h17-team8",
    // "glo2003/h17-team9",
    // "glo2003/h17-team10",
    // "glo2003/h17-team11",
    // "glo2003/h17-team12",
    // "glo2003/h17-team13",
    // "glo2003/h17-team14",
];

const i1body = `Using the github api (or the client available in your language),

this project should retrieve the github projects available from the github
token you'll have generated. The token should be injected in the software
using an environment variable named \`GITHUB_TOKEN\`.

For each contributor you should retrieve:

- Login
- ID
- AvatarURL
- URL
- HTMLURL
- Type
- Number of contributions`;


const i2body = `
The api should return the Items retrieved in #1 at the URL \`/contributors\` using that format
\`\`\`
   {
      "contributors":[
         {
            "login":"octocat",
            "id":1,
            "avatar_url":"https://github.com/images/error/octocat_happy.gif",
            "url":"https://api.github.com/users/octocat",
            "html_url":"https://github.com/octocat",
            "type":"User",
            "contributions":32
         }
      ]
   }
]\`\`\``;

const i3body = `
The api should return the pizza menu  at the URL \`/menu/pizzas\` using that format
\`\`\`
   {
      "pizzas":[
        {
         "id": 1234,
         "name": "Pep-fro",
         "img": "/img/some-img-url.png",
         "description": "Le grand classique à Gilles",
         "ingredients": [
            {
                "id": 30,
                "name": "Sauce tomate"
            },
            {
                "id": 33,
                "name": "Fromage"
            }
         ]
        }
      ]
   }
\`\`\``;

const i4body = `
When doing a GET request at the root `/` of the server, it should return the index.html.
All other static files (bundle.js, style.css, etc.) should be also configured to be access as static files.
You can verify this by looking in the chrome devtools (F12 in chrome).
`;


const i5body = `
Go look on the internet on how to document an http/json/rest api.
developers.github.com is a good one.

The API of this web service should be documented so the user interface at glo2003.xyz
can connect to it, January 22 the interface will be live and kicking ready to connect
to it
`;

const issues = [{"title": "Retrieve developers infos from github",
                 "body": i1body},
                {"title": "Add route to the API for developer infos",
                 "body": i2body},
                {"title": "Add route to the API for the pizza menu",
                 "body": i3body},
                {"title": "Add route to get the front end",
                 "body": i4body},
                {"title": "Document how to use your API",
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

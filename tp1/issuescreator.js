var request = require("request");

var teams = [
    "glo2003/h17-team1",
    "glo2003/h17-team2",
    "glo2003/h17-team3",
    "glo2003/h17-team4",
    "glo2003/h17-team5",
    "glo2003/h17-team6",
    "glo2003/h17-team7",
    "glo2003/h17-team8",
    "glo2003/h17-team9",
    "glo2003/h17-team10",
    "glo2003/h17-team11",
    "glo2003/h17-team12",
    "glo2003/h17-team13",
    "glo2003/h17-team14",
];

const i1body = `Using the github api (or the client available in your language),

this project should retrieve the github projects available from the github
token you'll have generated. The token should be injected in the software
using an environment variable named \`GITHUB_TOKEN\`.

The retrieved items should contain for each project retrieved:

- ID
- Name
- HTMLURL
- Contributors (an array)
- Main language
- All languages (an array)
- The open branches (array)
- The open issues count

For each contributor you should retreive:

- Login
- ID
- AvatarURL
- HTMLURL
- Type
- Number of contributions`;


const i2body = `
The api should return the Items retrieved in #1 using that format
\`\`\`[
   {
      "name":"glo2003/glo",
      "lastCommit":"",
      "ciStatus":"",
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
      ],
      "languages":{
         "C":78769,
         "Python":7769
      },
      "branches":[
         {
            "name":"master",
            "commit":{
               "sha":"6dcb09b5b57875f334f61aebed695e2e4193db5e",
               "url":"https://api.github.com/repos/octocat/Hello-World/commits/c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc"
            }
         }
      ],
      "openIssues":[

      ],
      "badges":[
         "one-of-em"
      ]
   }
]\`\`\``

const i3body = `
Go look on the internet on how to document an http/json/rest api.
developers.github.com is a good one.

The API of this web service should be documented so the user interface at glo2003.xyz
can connect to it, January 22 the interface will be live and kicking ready to connect
to it
`

const issues = [{"title": "Retrieve projects from github",
  "body": i1body},
{"title": "Show retrieved projects from github",
 "body": i2body},
{"title": "Document what how to use your API",
 "body": i3body}];

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

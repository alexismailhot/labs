var request = require("request");

var teams = [
    "glo2003/glo-2003-h18-team-01",
    "glo2003/glo-2003-h18-team-02",
    "glo2003/glo-2003-h18-team-03",
    "glo2003/glo-2003-h18-team-04",
    "glo2003/glo-2003-h18-team-05",
    "glo2003/glo-2003-h18-team-06",
    "glo2003/glo-2003-h18-team-07",
    "glo2003/glo-2003-h18-team-08",
    "glo2003/glo-2003-h18-team-09",
    "glo2003/glo-2003-h18-team-10",
    "glo2003/glo-2003-h18-team-11",
    "glo2003/glo-2003-h18-team-12",
    "glo2003/glo-2003-h18-team-13",
    "glo2003/glo-2003-h18-team-14",
    "glo2003/glo-2003-h18-team-15",
    "glo2003/glo-2003-h18-team-16",
    "glo2003/glo-2003-h18-team-17",
    "glo2003/glo-2003-h18-team-18"
];

const i1body = `
As a restaurant manager,
I want to see the schedule of the current week
In order to schedule my staff.

### Conditions of satisfaction
| Condition | Description |
|-|-|
| C1 | The schedule starts from a given date |
| C2 | The schedule is 7 days long |
| C3 | The restaurant is open from 11am to 22pm by default |

### Request
\`\`\`
GET \`/schedules/:startOfWeek\`
\`\`\`

Where \`startOfWeek\` has the following format: \`2018-01-15\`.

### Response
\`\`\`
200 HTTP OK
{
  "days": [
    {
      "datetime": "2018-01-15T00:00:00.000",
      "timeSlots": [
        {
          "datetime": "2018-01-15T11:00:00.000",
          "scheduledStaffs": []
        },
        {
          "datetime": "2018-01-15T12:00:00.000",
          "scheduledStaffs": []
        },
        ...
        {
          "datetime": "2018-01-15T22:00:00.000",
          "scheduledStaffs": []
        },
      ]
    },
    ...
  ]
}
\`\`\``;

const i2body = `
Go look on the internet on how to document an http/json/rest api.
developers.github.com is a good one.

The API of this web service should be documented so the user interface can connect to it.
`;

const issues = [{"title": "See the schedule of the current week",
                 "body": i1body},
                {"title": "Document how to use your API",
                 "body": i2body}];

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

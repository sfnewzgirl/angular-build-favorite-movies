//REQUIRE MODULES
var express = require('express'),
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//CROSS ORIGIN
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//REQUIRE DATABASE
var db = require('./models');

//STATIC ROUTE
app.use(express.static('public'));

//HOMEPAGE
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/api');
});

//UPDATE A VOTEUP OR DOWN
// app.put('/api/protips/:id', function (req, res) {
//   db.ProTip.findOne({_id: req.params.id}, function(err, selectedProTip) {
//       if (req.body.voteStatus == 'up') {
//         selectedProTip.tipScore = selectedProTip.tipScore + 1;
//       } else if (req.body.voteStatus == 'down') {
//         selectedProTip.tipScore = selectedProTip.tipScore - 1;
//       };
//     selectedProTip.save(function (err, updatedTipScore) {
//       if (err) {return console.log("put error: " + err);}
//       res.json(updatedTipScore);
//     });
//   });
// });


JSON ENDPOINTS
app.get('/api', function api_index(req, res) {
  res.json({
    AngularBuildMoviesEndpoints: true,
    message: "API endpoints for Angular Build Movies!",
    documentationUrl: "https://github.com/sfnewzgirl/angular-build-favorite-movies/blob/master/README.md",
    baseUrl: "https://angular-build-movies.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Homepage"},
      {method: "POST", path: "/api/movies/", description: "creates on movie"}
    ]
  })
});

// LISTEN TO LOCALHOST
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});

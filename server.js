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
  res.sendFile(__dirname + '/index.html');
});

//LIST ALL MOVIES
app.get('/api/movies', function (req, res) {
  db.Movie.find(function (err, movies){
    if (err) {return console.log("get error: " + err);}
    res.json(movies);
  });
});

//UPDATE VOTE SCORE
app.put('/api/movies/:id', function (req, res) {
  db.Movie.findOne({_id: req.params.id}, function(err, selectedMovie) {
    if (req.body.upVotes) {
      selectedMovie.tipScore = selectedProTip.tipScore + 1;
    }
    req.body.upVotes
    req.body.downVotes

      if (req.body.voteStatus == 'up') {
        selectedProTip.tipScore = selectedProTip.tipScore + 1;
      } else if (req.body.voteStatus == 'down') {
        selectedProTip.tipScore = selectedProTip.tipScore - 1;
      };
    selectedProTip.save(function (err, updatedTipScore) {
      if (err) {return console.log("put error: " + err);}
      res.json(updatedTipScore);
    });
  });
});


app.post('/api/protips/:proTipId/comments', function (req, res) {
   db.ProTip.findById(req.params.proTipId, function (err, selectedProTip) {
     var newComment = new db.Comment({commentBody: req.body.commentBody});
     selectedProTip.tipComment.push(newComment);
     selectedProTip.save(function(err, savedComment) {
       if (err) {return console.log("post error: " + err);
         } else {
           res.json(newComment);
         }
     });
   });
});




JSON ENDPOINTS
app.get('/api', function api_index(req, res) {
  res.json({
    AngularBuildMoviesEndpoints: true,
    message: "API endpoints for Angular Build Movies!",
    documentationUrl: "https://github.com/sfnewzgirl/angular-build-favorite-movies/blob/master/README.md",
    baseUrl: "https://angular-build-movies.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Homepage"},
      {method: "PUT", path: "/api/movies/:id", description: "creates on movie"}
    ]
  })
});

// LISTEN TO LOCALHOST
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});

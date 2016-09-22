var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Movie = new Schema({
  movieTitle: String,
  upVotes: Number,
  downVotes: Number,
});

var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;

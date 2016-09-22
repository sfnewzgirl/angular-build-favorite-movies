angular.module('moviesApp')
        .controller('MoviesIndexController', MoviesIndexController);

MoviesIndexController.$inject=['MovieService'];
function MoviesIndexController(MovieService) {
  console.log('index controller called');
  var vm = this;
  vm.movies= [];
  var upVotes= 1;
  var downVotes= 5;
  var movieTitles = [{title: 'The Godfather'}, {title: 'Legends of the Fall'}, {title: 'Wedding Crashers'}, {title: 'August: Osage County'}, {title: 'The Hunger Games'}, {title: 'Clue'}];

  angular.forEach(movieTitles, function(key, value) {
    console.log('each movie', key, value);
    var movieId = key.title;
    getMovie(movieId);

    function getMovie(movieId) {
      console.log('get movie called', movieId);
      MovieService.get(movieId).then(function(data){
        console.log('here is the movie data ', data);
        vm.movies.push(data);
      });
    }
  });

  // vm.update = function(movie) {
  //   vm.upVotes = angular.copy(movie);
  // };

  vm.voteUp = function(movie) {
    console.log('vote up button clicked', movie);
    vm.upVotes = upVotes ++;
    console.log(upVotes);
  }

  vm.voteDown = function(movie) {
    console.log('vote down button clicked', movie);
    vm.downVotes = downVotes ++;
    console.log(downVotes);
  }
console.log('index controller exit, query get');
}

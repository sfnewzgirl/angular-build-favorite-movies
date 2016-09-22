angular.module('moviesApp')
        .controller('MoviesIndexController', MoviesIndexController);

MoviesIndexController.$inject=['MovieService'];
function MoviesIndexController(MovieService) {
  console.log('index controller called');
  var vm = this;
  var movieTitles = [{title: 'The Godfather'}, {title: 'Legends of the Fall'}, {title: 'Wedding Crashers'}, {title: 'August: Osage County'}, {title: 'The Hunger Games'}, {title: 'Clue'}];
  angular.forEach(movieTitles, function(key, value) {
    console.log('each movie', key, value);
    var movieId = key.title;
    getMovie(movieId);

    function getMovie(movieId) {
      console.log('get movie called', movieId);
      MovieService.get(movieId).then(function(data){
        console.log('here is the movie data ', data);
        vm.movie = data;
      });
    }
  });

  vm.voteUp = function() {
    console.log('vote up button clicked');
  }

  vm.voteDown = function() {
    console.log('vote down button clicked');
  }

console.log('index controller exit, query get');
}

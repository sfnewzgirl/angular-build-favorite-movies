angular.module('moviesApp')
        .controller('MoviesIndexController', MoviesIndexController);

MoviesIndexController.$inject=['MovieService'];
function MoviesIndexController(MovieService) {
  console.log('index controller called');
  var vm = this;
  vm.movies = [{title: 'Clue'}, {title: 'Frozen'}, {title: 'The Hunger Games'}];
  angular.forEach(vm.movies, function(key, value) {
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
  console.log('index controller exit, query get');
}

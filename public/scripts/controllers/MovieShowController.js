angular.module('moviesApp')
        .controller('MovieShowController', MovieShowController);

MovieShow.Controller.$inject=['$routeParams', '$location', 'MovieService'];
function MovieShowController($routeParams, $location, MovieService) {
  console.log('show controller called');
  var vm = this;
  var movieId = $routeParams.id;
  vm.movie = {};
  vm.getMovie = getMovie;
  getMovies(movieId);

  function getMovies(id) {
    console.log('asking for one movie');
    MovieService.get(id).then(fuction(data){
      console.log('got one movie', data);
      vm.movie = data;
    });
  }
  console.log('show controller exit, get');
}

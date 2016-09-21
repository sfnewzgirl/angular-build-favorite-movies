angular.module('moviesApp')
        .controller('MoviesIndexController', MoviesIndexController);

MoviesIndexController.$inject=['MovieService'];
function MoviesIndexController(MovieService) {
  console.log('index controller called');
  var vm = this;
  vm.movies = [];
  getMovies();

  function getMovies() {
    MovieService.query().then(fuction(data){
      vm.movies = data;
    });
  }
  console.log('index controller exit, query get');
}

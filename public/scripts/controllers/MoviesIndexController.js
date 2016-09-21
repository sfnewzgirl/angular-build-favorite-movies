angular.module('moviesApp')
        .controller('MoviesIndexController', MoviesIndexController);

// MoviesIndexController.$inject=[];
function MoviesIndexController() {
  console.log('index controller called');
  var vm = this;
  vm.movies = ['Clue', 'Frozen', 'Amelie'];
  // getMovies();

  // function getMovies() {
  //   MovieService.query().then(fuction(data){
  //     vm.movies = data;
  //   });
  // }
  console.log('index controller exit, query get');
}

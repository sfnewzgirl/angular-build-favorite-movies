angular.module('moviesApp')
        .controller('MoviesIndexController', MoviesIndexController);

MoviesIndexController.$inject=[];
function MoviesIndexController() {
  //loop through array
  //grab movie id
  //make http called
  //append results to index page

  console.log('index controller called');
  var vm = this;
  vm.movies = [{title: 'Clue'}, {title: 'Frozen'}, {title: 'Amelie'}];
  angular.forEach(vm.movies, function(value, key) {
    console.log('each movie', value, key);
  });

  function getMovie(id) {
    console.log('movie service called');
    // MovieService.get(id).then(fuction(data){
    //   vm.movie = data;
    // });
  }
  console.log('index controller exit, query get');
}

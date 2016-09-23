angular.module('moviesApp')
        .controller('MoviesShowController', MoviesShowController);

MoviesShowController.$inject=['MovieService'];
function MoviesShowController(MovieService) {
  console.log('search show controller called');
  var vm = this;
  vm.movie= [];

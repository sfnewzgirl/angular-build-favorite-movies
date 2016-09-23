angular.module('moviesApp')
  .directive('movieSearch', movieSearch);

function movieSearch(){
  var directive = {
    restrict: 'C',
    scope: {
      title: '@'
    },
    replace: true,
    templateUrl: 'views/movieShow.html',
    controllerAs: 'searchMovieCtrl',
    controller: searchMovieController
  };

  searchMovieController.$inject = ['$http', '$scope'];
  function searchMovieController($http, $scope){
    var vm = this;
    var movieName = req.params.body;
    var url='http://www.omdbapi.com/?t=';
    var endUrl='&plot=short&r=json';
    vm.getMovie = function(movieName){
      console.log(movie search http call);
      $http({
        method: 'GET',
        url: url + movieName + endUrl
      }).then(function(response){
          console.log("after htpp call", response);
          vm.movie = response.data;
        }, function(err){
          console.log("http call error", err);
        });
    };
    vm.getMovie($scope.movieName);
  };

  return directive;
}

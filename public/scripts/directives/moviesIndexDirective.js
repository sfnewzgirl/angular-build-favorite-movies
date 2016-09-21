angular.module('moviesApp')
        .directive('movieInfo', movieInfo);

  function movieInfo() {
    var directive = {
      restrict: 'E',
      scope: {
        title: '@',
        rated: '@',
        released: '@',
        plot: '@'
      },
      replace: true,
      templateUrl: 'views/moviesindex.html',
      controller: 'MoviesIndexController',
      controllerAs: 'moviesIndexCtrl'
    };

  }

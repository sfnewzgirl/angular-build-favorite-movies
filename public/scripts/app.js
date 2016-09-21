console.log('sanity check, app.js linked');

// angular.module('moviesApp', []);
//

angular.module('moviesApp', ['ngRoute'])
        .config(config);
        // .controller('MoviesIndexController', function() {
        //   console.log('controller');
        // });

config.$inject = ['$routeProvider', '$locationProvider'];
function config ( $routeProvider, $locationProvider) {
  console.log('enter routeProvider');
  $routeProvider
    .when('/', {
      templateUrl: 'views/moviesindex.html',
      controller: 'MoviesIndexController',
      controllerAs: 'moviesIndexCtrl'
    })
    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false,
      rewriteLinks: true
    });
    console.log('exit routeProvider');
}
    // .when('/movies/:id', {
//       templateUrl: 'views/movieshow.html',
//       controller: 'MovieShowController',
//       controllerAs: 'movieShowCtrl'
//     })
//
//
//   console.log('exit routeProvider');
// }

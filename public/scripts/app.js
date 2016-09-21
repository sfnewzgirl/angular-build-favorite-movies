console.log('sanity check, app.js linked');
angular.module('moviesApp', ['ngRoute'])
        .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ( $routeProvider, $locationProvider) {
  console.log('enter routeProvider');
  $routeProvider
    .when('/', {
      templateUrl: 'views/moviesindex.html',
      controller: 'MoviesIndexController',
      controllerAs: 'moviesIndexCtrl'
    })
    .when('/movies/:id', {
      templateUrl: 'views/movieshow.html',
      controller: 'MovieShowController',
      controllerAs: 'movieShowCtrl'
    })


  console.log('exit routeProvider');
}


//     .when('/books/:id', {
//       templateUrl: 'templates/books/show.html',
//       controller: 'BooksShowController',
//       controllerAs: 'booksShowCtrl'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
//
//   $locationProvider
//     .html5Mode({
//       enabled: true,
//       requireBase: false
//     });
// }

console.log('sanity check, app.js linked');
angular.module('moviesApp', ['ngRoute'])
        .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ( $routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/moviesindex.html',
      controller: 'MoviesIndexController',
      controllerAs: 'moviesIndexCtrl'
    })
}


//
// function config (  $routeProvider,   $locationProvider  )  {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'templates/books/index.html',
//       controller: 'BooksIndexController',
//       controllerAs: 'booksIndexCtrl'
//     })
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

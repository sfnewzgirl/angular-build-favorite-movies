angular.module('moviesApp')
        .controller('MoviesIndexController', MoviesIndexController);

// MoviesIndexController.$injext=[''];
// function MoviesIndexController() {
//   var vm = this;
// }
//
// BooksIndexController.$inject=['BookService'];
// function BooksIndexController( BookService) {
//   var vm = this;
//   // exports
//   vm.books = [];
//
//   // initialize data
//   getBooks();
//
//   // implementations
//   function getBooks() {
//     BookService.query().then(function(data){
//       console.log('here\'s the books data in the controller', data);
//       vm.books = data;
//     });
//   }
// }

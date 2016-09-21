angular.module('moviesApp')
        .service('MovieService', MovieService);

MovieService.$injext = ['$http', '$q'];
function MovieService($http, $q) {
  console.log('entered movieservice');
  var self = this;
  self.movie = {}; //one movie object
  self.movies = []; //array of all movie objects
  self.query = query; //get all the movies
  self.get = get; //get one movie
  self.update = update; //update a movie, is this the like/dislike?
  self.remove = remove; //delete a movie, probably won't use
}
  //call to show all the movies
  fucntion



  function query() {
    console.log('someone requested all the books');
    // create a new 'deferred'
    var def = $q.defer();
    // fire off the request
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books'
    }).then(onBooksIndexSuccess, onError);

    // we return the promise here - whenever it's complete any other .then's you attach will get run too
    return def.promise;

    // note how these functions are defined within the body of another function?
    // that gives them access to variables from that function
    // - see lexical scope & closures https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
    function onBooksIndexSuccess(response){
      console.log('here\'s the get all books response data from the service', response.data);
      self.books = response.data.books;
      // ok, we got data, resolve the deferred - at this point we get to choose what we send on to the controller
      def.resolve(self.books);
    }
    function onError(error){
      console.log('there was an error: ', error);
      self.books.error = {error: error};
      // oh noes!  error - reject the deferred - at this point we get to choose what we send on to the controller
      def.reject(self.books.error);
    }
  }





}

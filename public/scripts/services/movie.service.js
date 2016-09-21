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
  // self.update = update; //update a movie, is this the like/dislike?
  // self.remove = remove; //delete a movie, probably won't use
}

  //call to show one movie
  function get(id) {
    console.log('one movie request', id);
    //create a deferred
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?t=' + id + '&plot=full&r=json'
    }).then(oneMovieSuccess, onError);

    //return promise
    return deferred.promise;

    //resolve
    function oneMovieSuccess(response) {
      console.log('one movie came back', response);
      self.movie = response.data;
      deferred.resolve(self.movie);
    }
    //reject
    function onError(response) {
      console.log('something went wrong with one movie', response);
      self.movie = {error: error};
      deferred.reject(self.movie);
    }
  }

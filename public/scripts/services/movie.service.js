angular.module('moviesApp')
        .service('MovieService', MovieService);

MovieService.$inject = ['$http', '$q'];
function MovieService($http, $q) {
  console.log('entered movieservice');
  var self = this;
  self.movie = {}; //one movie object
  self.get = get; //get one movie

  //call to show one movie
  function get(id) {
    console.log('one movie request', id);
    //create a deferred
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?t=' + id + '&plot=short&r=json'
    }).then(oneMovieSuccess, onError);

    //return promise
    return deferred.promise;

    //resolve
    function oneMovieSuccess(response) {
      console.log('one movie came back', response);
      self.movie = response.data;
      //get data from db
      //function to add to movie data
      deferred.resolve(self.movie);
    }
    //reject
    function onError(response) {
      console.log('something went wrong with one movie', response);
      self.movie = {error: error};
      deferred.reject(self.movie);
    }
  }
}



// function upVote (event) {
//   $.ajax({
//    method: 'PUT',
//    url: '/api/protips/'+$(this).attr('data-id'),
//    dataType: 'json',
//    data: {voteStatus: 'up'},
//    success: onSuccessVote,
//    error: error
//  });
// }
//
// function downVote (event) {
//   $.ajax({
//     method: 'PUT',
//     url: '/api/protips/'+$(this).attr('data-id'),
//     dataType: 'json',
//     data: {voteStatus: 'down'},
//     success: onSuccessVote,
//     error: error
//   });
// }

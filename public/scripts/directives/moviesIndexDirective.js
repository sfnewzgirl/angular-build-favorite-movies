angular.module('moviesApp')
        .directive('movieInfo', movieInfo);

  function movieVote() {
    var directive = {
      restrict: 'E',
      scope: {
        title: '@',
      },
      replace: true,
      templateUrl: 'views/moviesindex.html',
      controller: 'MovieVoteController',
      controllerAs: 'movieVoteCtrl'
    };

    movieVoteController.$inject = [$scope];
    function movieVoteController($scope) {
      console.log('movie vote directive controller');
      var vm = this;
      vm.postMovieVote = function(movieId) {
        vm.voteUp = function(movieId) {
          console.log('vote up button clicked', movieId);
        }
        vm.voteDown = function(movieId) {
          console.log('vote down button clicked', movieId);
        }
      }

    }

  }



  //   weatherCardController.$inject = ['$http', '$scope'];
  //   function weatherCardController($http, $scope){
  //     var vm = this;
  //     var url="http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&q=";
  //     var apikey = "&appid=" + '284c1c2d36e318ea0a389b743d94c747';
  //     vm.getWeather = function(city){
  //       console.log(url + city + apikey);
  //       $http({
  //         method: 'GET',
  //         url: url + city + apikey
  //       }).then(function(response){
  //           console.log(response);
  //           vm.weather = response.data;
  //         }, function(err){
  //           console.log(err);
  //         });
  //     };
  //     vm.getWeather($scope.city);
  //   };
  //
  //   return directive;
  // }

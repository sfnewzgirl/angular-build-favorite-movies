// this is the directive for the ajax call to send back to the controller
// for example
//
// angular.module('weatherApp')
//        .directive('currentWeather', currentWeather);
//
//   function currentWeather () {
//     var directive = {
//       scope: {
//         city: '@',
//       },
//       restrict: 'EA',
//       templateUrl: '/views/templates/weatherDirective.html',
//       replace: true,
//       controllerAs: 'weatherCtrl',
//       controller: ['$http', function($http){
//         var vm = this;
//         var url="api.openweathermap.org/data/2.5/weather?q=";
//         var apikey = "&appid=" + 'feabb831e3da04d66be31f4a618123ef';
//         vm.getWeather = function(city){
//           $http({
//             method: 'GET',
//             url: url + city + apikey
//            }).success(function(data){
//              vm.weather = res.data.weather[0].main;
//              console.log(data);
//              });
//           }
//          }]
//     };
//     return directive;
//   }
//
//
//   // ['$http', function($http){ var vm = this; var url="http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q="; var apikey = "&appid=" + 'feabb831e3da04d66be31f4a618123ef'
//   //   ; vm.getWeather = function(city){ $http({method: 'JSONP', url: url + city + apikey}) .success(function(data){ vm.weather = data; }); } }],

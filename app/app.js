angular.module('festivalsApp', ['festivalList', 'ngRoute', 'festivalDetails']);


angular.
  module('festivalsApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/festivals', {
          template: '<festival-list></festival-list>'
        }).
        when('/festivals/:festivalId', {
          template: '<festival-details></festival-details>'
        }).
        otherwise('/festivals');
    }
  ]);


  angular.
    module('festivalsApp').
    controller('FestivalListController', [ '$scope', function ($scope) {
      console.log('FestivalListController');
  }]);

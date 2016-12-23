angular.
  module('festivalDetails').
  component('festivalDetails', {
    //templateUrl: 'app/festival-list/festival-list.template.html',
    template:
            'Details: <span>{{festivalId}}</span>',
    controller: ['$routeParams', '$http', function FestivalDetailsController($routeParams, $http) {
      var ctrl = this;
      ctrl.festivalId = $routeParams.festivalId;

      $http.get('http://citysdk.dmci.hva.nl/CitySDK/pois/' + $routeParams.festivalId).then(function(response) {
        ctrl.description = response.description ? response.description[0].value : "No description"; // add locale switcher (language selection) 
      });
    }]
  });

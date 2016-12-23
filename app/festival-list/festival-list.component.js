angular.
  module('festivalList').
  component('festivalList', {
    //templateUrl: 'app/festival-list/festival-list.template.html',
    template:
        '<ul>' +
          '<li ng-repeat="event in $ctrl.events">' +
              '<a href="#/festivals/{{event.id}}">' +
                  '<span>{{event.label[0].value}}</span>' +
              '</a>' +
          '</li>' +
        '</ul>',
    controller: ['$http', function FestivalListController($http) {
      var ctrl = this;
      ctrl.events = [];

      $http.get('http://citysdk.dmci.hva.nl/CitySDK/events/search?category=festival').then(function(response) { // move to services
        ctrl.events = response.data.event;
      });
    }]
  });

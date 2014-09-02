var fredMake = angular.module('fredMake', ['ngRoute', 'templates']);

fredMake.config(['$routeProvider', function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: 'home.html',
      controller: 'CalendarController'
    })
  // $routeProvider.
  //   otherwise({
  //     templateUrl: 'views/angularjs_views/home.html',
  //     controller: 'CalendarController'
  //   })

}]);
fredMake.controller('CalendarController', ['$scope', function($scope){

  $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];


}]);
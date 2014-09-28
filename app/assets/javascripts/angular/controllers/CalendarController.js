var fredMake = angular.module('fredMake', ['ngRoute', 'templates', 'fredMake.filters',]);

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
fredMake.controller('CalendarController', ['$scope', '$http', function($scope, $http){

  $http.get('/events').success(function(returnData){
      console.log('something did happen')
      $scope.events = returnData;
  })

  Array.prototype.fill = function(val){
    for (var i = 0; i < this.length; i++){
      this[i] = val * Math.random();
    }
    return this;
  };

  function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}
  $scope.calendarDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  $scope.calendarWeeks = new Array(52).fill((Math.random()));

  $scope.moveCalendar = function(direction){
    console.log('we are trying to move ' + direction)
    console.log(this)
    if(direction == 'left'){
      $('.sourse-gallery').toggleClass('moveleft')
    }
    if(direction == 'right'){
      $('.sourse-gallery').toggleClass('moveright')
    }

    }


  


}]);

angular.module('fredMake.filters', [])

.filter('allCAPS', [function () {
  return function (item) {
    return item.toUpperCase();
  };
}]);

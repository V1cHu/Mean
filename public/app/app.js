var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
            templateUrl: 'app/views/login.html',
            controller: 'MainCtrl'
        })
        .when('/home', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/add', {
            templateUrl: 'app/views/add.html',
            controller: 'AddCtrl'
        })
        .when('/edit/:param', {
            templateUrl: 'app/views/edit.html',
            controller: 'EditCtrl'
        }).
    otherwise({
        redirectTo: '/'
    });

}])

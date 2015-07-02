app.controller('HomeCtrl', function($rootScope, $http, $scope, $location, $routeParams, UserService) {

    if ($rootScope.isLoggedIn == true) {
        $scope.user = {
            'fname': '',
            'lname': '',
            'password': ''
        }

        var users;

        $http.get('/list').success(function(data) {
            console.log("list obtained");
            users = data;
            $scope.users = users;
        }).error(function(data) {
            console.log("cannot get list");
        });

        $scope.delete = function($index) {
            UserService.delete($index);
        }

        $scope.edit = function($index) {
            $location.path('/edit' + $index);
        }
        $scope.add = function() {
            $location.path('/add');
        }
        $scope.logout = function() {
            $rootScope.isLoggedIn = false;
            $location.path('/');
        }
    } else {
        $location.path('/');
    }
})

app.controller('HomeCtrl', function($rootScope, $http, $scope, $location, $routeParams, UserService) {

    if ($rootScope.isLoggedIn == true) {
        $scope.user = {
            'fname': '',
            'lname': '',
            'password': ''
        }

        var users;

        $http.get('/list').success(function(data) {
            users = data;
            $scope.users = users;
        }).error(function(data) {
            console.log("ERROR: Cannot get list from server!");
        });

        $scope.delete = function($index) {
            console.log($index);
        }

        $scope.edit = function($index) {
            $location.path('/edit/' + $index);
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

app.controller('MainCtrl', function($rootScope, $http, $scope, $location, UserService) {
    $scope.information = '';

    $scope.login = function() {
        console.log($scope.user);
        $http.post('/login', $scope.user).success(function(data) {
            var status = data;

            if (status === 'Success') {
                $rootScope.isLoggedIn = true;
                $location.path('/home');
            } else {
                $scope.information = "Username/Password is invalid!";
            }
        }).error(function(data) {
            $location.path('/login');
        });
    }

});

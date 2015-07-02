app.controller('AddCtrl', function($rootScope, $scope, $location, $routeParams, UserService) {

    if ($rootScope.isLoggedIn == true) {
        var user = {
            'fname': $scope.fname,
            'lname': $scope.lname,
            'password': $scope.password
        }

        $scope.cancel = function() {
            $rootScope.isLoggedIn = true;
            $location.path('/home');
        }

        $scope.add = function(user) {
            console.log(user);
            if (user.fname != 'undefined' && user.lname != 'undefined' &&
                user.password != 'undefined' && user.fname != '' && user.lname != '' &&
                user.password != '') {
                UserService.add(user);
                $rootScope.isLoggedIn = true;
                $location.path('/home');
            }
        }
    } else {
        $location.path('/');
    }

})

app.controller('EditCtrl', function($rootScope, $scope, $location, $routeParams, UserService) {

    if ($rootScope.isLoggedIn == true) {
        var users = UserService.list();
        $scope.users = users;

        var index = $routeParams.param;
        console.log(index)

        var user = {
            'fname': users[index].fname,
            'lname': users[index].lname,
            'password': ''
        };
        $scope.user = user;

        $scope.cancel = function() {
            $rootScope.isLoggedIn = true;
            $location.path('/home');
        }

        $scope.save = function(user) {
            console.log(user);
            console.log(index);

            if (user.fname != 'undefined' && user.lname != 'undefined' &&
                user.password != 'undefined' && user.fname != '' && user.lname != '' &&
                user.password != '') {
                UserService.save(user, index);
                $rootScope.isLoggedIn = true;
                $location.path('/home');
            }
        }
    } else {
        $location.path('/');
    }

})
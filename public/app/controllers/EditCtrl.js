app.controller('EditCtrl', function($rootScope, $http, $scope, $location, $routeParams, UserService) {

    if ($rootScope.isLoggedIn == true) {

        var index = $routeParams.param;

        var user = {
            'fname': '',
            'lname': '',
            'password': ''
        };
        $http.get('/edit/' + index).success(function(data) {
            user = data;
            user.password = '';
            $scope.user = user;
        }).error(function(data) {
            console.log(date);
        });


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

                $http.put('/edit/' + index + '/save', user).success(function(data) {
                    console.log(data);
                    $rootScope.isLoggedIn = true;
                    $location.path('/home');

                }).error(function(data) {
                    console.log(data);
                });


            }
        }
    } else {
        $location.path('/');
    }

})

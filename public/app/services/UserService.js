app.service('UserService', function() {

    var users = [{
        'fname': 'Robert',
        'lname': 'Downey Jr.',
        'password': 'ironman'
    }, {
        'fname': 'Chris',
        'lname': 'Evans',
        'password': 'cap'
    }, {
        'fname': 'Chris',
        'lname': 'Hemsworth',
        'password': 'thor'
    }, {
        'fname': 'Jeremy',
        'lname': 'Renner',
        'password': 'hawk'
    }, {
        'fname': 'Mark',
        'lname': 'Ruffalo',
        'password': 'hulk'
    }, {
        'fname': 'Scarlett',
        'lname': 'Johansson',
        'password': 'widow'
    }];

    this.login = function(user) {
        for (i in users) {
            if (users[i].fname.toUpperCase() == user.fname.toUpperCase() && users[i].password == user.password) {
                console.log("Success")
                isLoggedIn = true;
                return "Success";
            }
        }
    }

    this.add = function(user) {
        users.push(user)
    }

    this.save = function(user, index) {
        this.delete(index);
        this.add(user);
    }

    this.delete = function(index) {
        users.splice(index, 1);
    }


    this.list = function() {
        return users;
    }

})

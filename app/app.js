var fs = require('fs');

var file = JSON.parse(fs.readFileSync('users.json', 'utf8'));

var printer = function(x) {
    console.log('Hi ' + x);
};

var login = function(user, password) {
    console.log(user);
    console.log(password);
    return "Success";
};

var getList = function() {
    return file;
}

module.exports.login = login;
module.exports.printer = printer;
module.exports.getList = getList;

var fs = require('fs');

var name = "HHH";
var printer = function(x) {
    console.log('Hi ' + x);
};


var login = function(user, password) {
    console.log(user);
    console.log(password);
    return "Success";
};

var getList = function() {
    var file = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    return file;
}

module.exports.login = login;
module.exports.printer = printer;
module.exports.x = name;
module.exports.getList = getList;
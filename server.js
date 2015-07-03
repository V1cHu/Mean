var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    path = require('path'),
    func = require('./app/app');

var app = express();
var printer = func.printer;
var login = func.login;
var getList = func.getList;

app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

printer("vishnu");

app.get('/', function(req, res) {
    res.sendFile('index.html');
})


app.post('/login', function(req, res) {
    var username = req.body.fname;
    var password = req.body.password;
    console.log(username + ' - ' + password);
    printer(username);
    var status = login(username, password);
    res.send(status);
});

app.get('/edit/:index', function(req, res) {
    console.log("index===" + req.params.index);
    res.send(getList().users[req.params.index]);
});

app.get('/list', function(req, res) {
    var file = getList();
    console.log(file);
    res.send(file.users);
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server started successfully on port:3000')
})

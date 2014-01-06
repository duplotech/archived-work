var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.logger());
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(request, response) {
    response.render('home.jade');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});

#!/usr/bin/env node
var express = require("express"),
    keenio = require('express-keenio');

var app = express();

keenio.configure({
    client: {
        projectId: '52e5d99dce5e431e34000007',
        writeKey: 'abbbca1201fd62369c6fbff9f042420f87ca2167a90feed220f832c37aff09db1c05247e4b50eb976421fe5888279ad04ba1c96a0b2b144d0afbda81b8829152d38958442ead2ae02355b2a3f180da998be890eb68931f8f5e6f1438943aa7add68b60ea68b39e8a6e23fc10054d79fd'
    },
    whitelistProperties: {
        query: [],
        body: [],
        reaction: []
    }
});

app.use(express.static(__dirname + '/public'));
app.use(express.logger());
app.use(keenio);
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(request, response) {
    response.render('home.jade', { currentYear: new Date().getFullYear() });
});

var PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log("Listening on " + PORT);
});

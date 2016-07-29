var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var multipart = require('connect-multiparty');

var parser = require('./lib/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.post('/api/parse', multipart(), function(req, res) {
    parser(req.files.image.path, function(err, text) {
        res.send({
            error: err,
            text: text
        });
    });
});

app.listen(3000, function() {
    console.log('node-document-parser listening at http://localhost:3000');  // eslint-disable-line no-console
});

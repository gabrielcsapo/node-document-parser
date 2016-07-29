var request = require('supertest');
request = request('http://localhost:3000');

request
    .post('/api/parse')
    .attach('image', 'test/receipt.jpg')
    .end(function(err, res) {
        if (err) throw err;
        console.log(res.body); // eslint-disable-line no-console
    });

var request = require('supertest');
var app     = require('../index');

describe('GET /', function() {
  it('responds with the basic h1', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});

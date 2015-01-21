'use strict';

var express = require('express');
var nodejsx = require('node-jsx').install();
var http    = require('http');
var app     = express();

// Global config
app.configure(function() {
  app.use('port', process.env.PORT || 8080);
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
});

// Import API
require('./api')(app);

// Inject env config
app.configure('development', require('../config/server').development.bind(null, app, express));
app.configure('production',  require('../config/server').production.bind(null, app, express));

// Injrect component rendering
app.use(require('../../lib/renderRouteComponent'));

// Start server
//TODO: Update to express 4
var server = app.listen(80, function() {
  console.log('Listening on port ' + server.address().port);
});

module.exports = app;

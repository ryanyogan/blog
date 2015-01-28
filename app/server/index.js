'use strict';

var express = require('express');
var nodejsx = require('node-jsx').install();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes  = require('./api');
var url     = require('url');
var app     = express();
var logger  = require('morgan');
var path         = require('path');
var reactAsync   = require('react-async');

// Global config
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Import API
app.use('/api', routes);

app.get("*", function(req, res) {
  var path = url.parse(req.url).pathname;
  ReactAsync.renderComponentToStringWithAsyncState(ReactApp({path: path}), function(err, markup, data) {
    res.send(ReactAsync.injectIntoMarkup(markup, data, ['/js/bundle.js']));
  });
});

module.exports = app;

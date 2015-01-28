var path = require('path');
var getPosts = require('../../lib/getPosts');
var DIR = path.resolve(__dirname, '../../posts');

var express = require('express');
var Router  = express.Router();

Router.get('/api/posts', function(req, res) {
  getPosts(DIR).then(function(posts) {
    res.send(posts);
  })
});

Router.get('/api/posts/:slug', function(req, res) {
  getPosts(DIR).then(function(posts) {
    var post = posts.filter(function(post) {
      return post.slug === req.params.slug;
    });
    res.send(post);
  })
});

module.exports = Router;

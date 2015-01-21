var superagent = require('superagent');
var isServer   = require('./isServer');

['get','post','put','path','del'].forEach(function(method) {
  exports[method] = function(path, callback) {
    var args = Array.prototype.slice.call(arguments, 1);
    return superagent[method].apply(null, [formatUrl(path)].concat(args));
  };
});

function formatUrl(path) {
  var url;
  if (isServer()) {
    url = 'http://localhost:80' + path;
  } else {
    url = path;
  }
  return url;
}

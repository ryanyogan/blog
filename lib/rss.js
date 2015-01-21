var fs = require('fs');
var RSS = require('rss');

exports.feed = new RSS({
  title: 'Ryan Yogan',
  description: 'My Blog',
  feed_url: 'http://ryanyogan.com/rss.xml',
  site_url: 'http://ryanyogan.com',
  image_url: 'http://ryanyogan.com/ryan.jpg'
});

exports.rssify = function(post) {
  return exports.feed.item({
    title: post.meta.title,
    date: post.meta.date,
    url: 'http://ryanyogan.com/posts/' + post.slug
  });
};

exports.createXML = function(path) {
  var rssstream = fs.createWriteStream(path);
  rssstream.write(exports.feed.xml());
  rssstream.end();
};

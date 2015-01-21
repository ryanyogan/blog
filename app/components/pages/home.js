/**
 * @jsx React.DOM
 */

var React    = require('react');
var Layout   = require('../layout');
var PostList = require('./partials/postList');

var Home = React.createClass({
  render: function() {
    return (
      <Layout>
        <h1 className="f-welcome">
          Hi, I'm <strong>Ryan</strong> - <br />Developer, Scrum Master, Aviation Enthusiast
        </h1>
        <PostList itemCount={3} />
      </Layout>
    );
  }
});

module.exports = Home;

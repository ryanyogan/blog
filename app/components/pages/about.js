/**
 * @jsx React.DOM
 */

var React  = require('react');
var Layout = require('../layout');

var About = React.createClass({
  render: function() {
    return (
      <Layout>
        <article className="post">
          <header>
            <h1 itemprop="headline" className="post__heading">About me</h1>
          </header>
          <div itempropr="articleBody" className="post__content">
            <p>I suppose I will get around to adding some content in here...</p>
          </div>
        </article>
      </Layout>
    );
  }
});

module.exports = About;

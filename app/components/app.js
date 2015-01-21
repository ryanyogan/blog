/**
 * @jsx React.DOM
 */

var React       = require('react');
var ReactRouter = require('react-router-component');
var ReactMount  = require('react/lib/ReactMount');
var Pages       = ReactRouter.Pages;
var Page        = ReactRouter.Page;
var NotFound    = ReactRouter.NotFound;
var isServer    = require('../../lib/isServer');

// Pages
var Home         = require('./pages/home');
var About        = require('./pages/about');
var Posts        = require('./pages/posts');
var Post         = require('./pages/post');
var NotFoundPage = require('./pages/notFound');

ReactMount.allowFullPageRender = true;

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Ryan Yogan, a nerd</title>
          <meta name="description" content="Ryan Yogan, Nerd" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="/rss.xml" type="application/rss+xml" rel="alternate" />
          <link rel="stylesheet" href="/css/bundle.css" />
        </head>
        <Pages className="page" path={this.props.path}>
          <Page path="/" handler={Home} />
          <Page path="/posts" handler={Posts} />
          <Page path="/posts/:slug" handler={Post} />
          <Page path="/about" handler={About} />
          <NotFound handler={NotFoundPage} />
        </Pages>
      </html>
    );
  }
});

if (!isServer()) {
  window.onload = function() {
    React.renderComponent(App(), document);
  }
}

module.exports = App;

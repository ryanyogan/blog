/**
 * @jsx React.DOM
 */

var React = require('react');

var TwitterFollow = React.createClass({
  render: function() {
    return (
      <div className="tw-follow">
        <a href="https://twitter.com/ryanyogan" className="twitter-follow-button" data-show-count="false">
          Follow @ryanyogan
        </a>
      </div>
    );
  }
});

var Address = React.createClass({
  render: function() {
    return (
      <address className="address">
        <span itemprop="name">Ryan Yogan</span>
        <span className="sep">-</span><span itemprop="jobTitle" className="is-hidden">Awesome dude</span>
        <div>
          <a href="mailto:ryanyogan@gmail.com" itemprop="email">ryanyogan@gmail.com</a>
          <TwitterFollow />
        </div>
      </address>
    );
  }
});

var VCard = React.createClass({
  render: function() {
    return (
      <div itemscope="" itemtype="http://schema.org/Person" className="vcard">
        <figure className="myface">
          <img alt="Picture of Ryan Yogan" width="66" height="66" src="/img/ryan-small.jpp" />
        </figure>
        <Address />
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer role="contentinfo" className="page-footer l-module">
        <VCard />
      </footer>
    );
  }
});

module.exports = Footer;

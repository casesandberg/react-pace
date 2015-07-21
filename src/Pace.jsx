/* jshint node: true, esnext: true */
"use strict";

var React = require('react');
var pace = require('../vendor/pace/pace');


module.exports = class Pace extends React.Component {

  componentDidMount() {
    pace.start({
      ajax: false,
      document: false,
      eventLag: false,
      extraSources: ['.progress']
    });
  }

  render() {
    return (
      <div>Pace</div>
    )
  }
}

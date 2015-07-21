/* jshint node: true, browser: true, esnext: true */
"use strict";

var React = require('react');
require('../node_modules/normalize.css/normalize.css');

var Controller = require('./components/Controller');

React.render(
  React.createElement(Controller),
  document.getElementById('root')
);

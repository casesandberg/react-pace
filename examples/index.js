/* jshint node: true, browser: true, esnext: true */
"use strict";

var React = require('react');
require('../node_modules/normalize.css/normalize.css');

console.log('yep');

React.render(
  React.createElement('div', null, 'Examples'),
  document.getElementById('root')
);

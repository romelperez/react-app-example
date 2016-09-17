window.$ = window.jQuery = require('jquery');

require('babel-polyfill');
require('vulcanval');
require('vulcanval/bundle/js/jquery/intern');

import analytics from './analytics';
import loader from './loader';

$(document).ready(function ($) {
  loader();
  analytics();
});

require('babel-polyfill');

window.$ = window.jQuery = require('jquery');

require('vulcanval');
require('vulcanval/src/js/jquery');
require('tools/validators');

import analytics from './analytics';
import loader from './loader';

$(document).ready(function ($) {
  loader();
  analytics();
});

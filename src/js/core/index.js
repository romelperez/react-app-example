require('babel-polyfill');

import $ from 'jquery';
import injectTapEventPlugin from 'react-tap-event-plugin';
import analytics from './analytics';
import loader from './loader';

window.$ = window.jQuery = $;

injectTapEventPlugin();

$(document).ready(function ($) {
  loader();
  analytics();
});

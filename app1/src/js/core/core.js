import $ from 'jquery';
import analytics from './analytics';
import loader from './loader';

window.$ = $;

$(document).ready(function ($) {
  analytics();
  loader();
});

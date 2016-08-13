import $ from 'jquery';
import ReactTapEventPlugin from 'react-tap-event-plugin';
import analytics from './analytics';
import loader from './loader';

window.$ = $;

ReactTapEventPlugin();

$(document).ready(function ($) {
  analytics();
  loader();
});

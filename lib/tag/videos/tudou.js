'use strict';

var config  = require('./config');
// tudou
module.exports = function (hexo, args) {
  var id = args[0];
  return '<div class="owl-media owl-video owl-tudou"><embed src="http://www.tudou.com/v/' + id + '/&bid=05&resourceId=0_05_05_99/v.swf" allowscriptaccess="always" wmode="opaque" ' + config.embed + '></embed></div>';
}
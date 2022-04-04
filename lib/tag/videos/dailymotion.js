'use strict';

var config = require('./config');
// dailymotion
module.exports = function (hexo, args) {
  var id = args[0];
  return '<div class="owl-media owl-video owl-dailymotion"><div class="dmplayer" dailyid="'+id+'" playoption="off"></div></div>';
}

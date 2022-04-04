'use strict';

var config = require('./config');
// youtube 9:16
module.exports = function (hexo, args) {
  var id = args[0];
  //return '<div class="owl-media owl-video owl-youtube"><iframe src="//www.youtube.com/embed/' + id + '" ' + config.iframe + '></iframe></div>';
  return '<div class="owl-media owl-video owl-youtube"><div class="movie-wrap"><div id="yt__'+id+'" class="youtube-video" width="854" height="480" data-video-id="'+id+'"></div></div></div>';
  //return '<div class="owl-media owl-video owl-youtube"><iframe id="'+id+'" width="80%" height="80%" class="youtube-video" data-video-id="'+id+'" src="//www.youtube.com/embed/' + id + '" ' + config.iframe + '></iframe></div>';
}

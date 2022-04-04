'use strict';

var config = require('./config');
// niconico
module.exports = function (hexo, args) {
  var id   = args[0],
      type = args[1] || 'thumb',
      res  = '';
  if ('thumb' === type) {
    // thumb
    res += '<div class="owl-media owl-video owl-niconico niconico-thumb"><iframe src="//ext.nicovideo.jp/thumb/' + id + '" scrolling="no" ' + config.iframe + '></iframe></div>';
  }
  else {
    // watch
    //res += '<div class="niconico-video owl-media owl-video owl-niconico niconico-watch" data-video-id="'+id+'"><script type="text/javascript" src="//ext.nicovideo.jp/thumb_watch/' + id + '"></script></div>';
    res += '<div class="niconico-video owl-media owl-video owl-niconico niconico-watch" data-video-id="'+id+'"><div class="movie-wrap" data-video-id="'+id+'"></div></div>';
  }
  return res;
}

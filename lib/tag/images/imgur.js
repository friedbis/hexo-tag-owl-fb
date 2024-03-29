'use strict';

module.exports = function (args, contents) {
  var id     = args[0],
      mode   = args[1] || 'photo',
      res    = '';
  if (mode === 'photo') {
    res += '<div class="owl-media owl-image owl-imgur"><a href="http://imgur.com/' + id + '"><img src="http://i.imgur.com/' + id + '.png" title="source: imgur.com" /></a></div>';
  }
  else if (mode === 'album') {
    res += '<div class="owl-media owl-image owl-imgur"><iframe class="imgur-album" width="100%" height="550" frameborder="0" src="//imgur.com/a/' + id + '/embed"></iframe></div>';
  }
  return res;
}
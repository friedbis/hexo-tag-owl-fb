'use strict';

/**
 *  tag list
**/
// tag list
var list = {
  videos: {
    path: ['.', 'videos'],
    tags: ['youtube', 'nicovideo', 'niconico', 'bilibili', 'vimeo', 'tudou', 'youku', 'tencent', 'ted', 'dailymotion']
  },
  images: {
    path: ['.', 'images'],
    tags: ['local', 'giphy', 'imdb']
  }
};

// selector for recording a lot of videos and images tags
var selector = {};
Object.keys(list).forEach(function (type) {
  var path = list[type].path.join('/');
  list[type].tags.forEach(function (tag) {
    selector[tag] = require(path + '/' + tag);
  })
});

module.exports = selector;

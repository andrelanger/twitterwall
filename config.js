 'use strict'

/*jshint camelcase: false */

var e = process.env

module.exports = {
  title: e.TITLE || '.concat() 2015 Twitterwall',
  hashtag: e.HASHTAG || '#concat15',
  port: e.PORT || 8000,
  twitter: {
    throttle: 1000,
    tracks: (e.HASHTAGS || '#concat,#concat15,#concat2015').split(','),
    users: (e.USERS || 'conc_at').split(','),
    tweetHistory: true,
    auth: {
      access_token: e.ACCESS_TOKEN,
      access_token_secret: e.ACCESS_TOKEN_SECRET,
      consumer_key: e.CONSUMER_KEY,
      consumer_secret: e.CONSUMER_SECRET
    }
  },
  lanyrd: {
    overwriteDate: '2017-09-27', // for debugging
    year: e.LANYRD_YEAR || '2015',
    id: e.LANYRD_ID || 'concat',
    showNext: 15000,
    roomColors: {
      'Audimax': '#c30813',
      'Room 110': '#169c19',
      'Lounge': '#c35a18'
    }
  },
  admin: {
    enableAPI: e.ADMIN_USER && e.ADMIN_PASSWORD,
    username: e.ADMIN_USER,
    password: e.ADMIN_PASSWORD,
    blocked: e.BLOCKED_USERS ? e.BLOCKED_USERS.split(',') : [],
    blockRetweets: true,
    blockPossiblySensitive: true
  },
  sponsors: [{
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/04/sponsor-cloudandheat.png',
    name: 'Cloud&Heat',
    duration: 20000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/06/sponsor-visualworld.png',
    name: 'Visual World',
    duration: 15000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/06/sponsor-itelligence.png',
    name: 'BIT.Group',
    duration: 10000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/04/sponsor-degruyter.png',
    name: 'DE GRUYTER',
    duration: 10000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/04/sponsor-euroengineering.png',
    name: 'euro engineering AG',
    duration: 10000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/04/sponsor-intergator.png',
    name: 'intergator',
    duration: 10000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/03/sponsor-megware.png',
    name: 'Megware',
    duration: 10000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/06/sponsor-springervieweg.png',
    name: 'Springer Vieweg',
    duration: 10000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/03/sponsor-dmk.jpg',
    name: 'DMK E-BUSINESS GmbH',
    duration: 5000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/07/sponsor-tuvit.png',
    name: 'TÜV IT GmbH',
    duration: 5000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/07/sponsor-proetcon.png',
    name: 'pro et con',
    duration: 5000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2017/08/sponsor-baselabs.png',
    name: 'Baselabs',
    duration: 5000
  }, {
    image: 'https://informatik2017.de/files/2016/11/bmbf.png',
    name: 'BMBF',
    duration: 10000
  }, {
    image: 'https://medien.informatik.tu-chemnitz.de/informatik2017/files/2016/06/TU_Chemnitz_positiv_gruen.png',
    name: 'TU Chemnitz',
    duration: 10000
  }, {
    image: 'https://www.gi.de/fileadmin/_processed_/csm_GI-Logo-text-2012_deutsch_421684ec57.png',
    name: 'GI',
    duration: 10000
  }]
}

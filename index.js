'use strict'

var http = require('http')
var path = require('path')

var debug = require('debug')('twitterwall')
var express = require('express')
var Twit = require('twit')

var lib = require('./lib')
var config = require('./config')

var app = express()
var server = http.Server(app)
var io = require('socket.io')(server)
var T = new Twit(config.twitter.auth)

debug('resolving screen names')
T.get('users/lookup', {screen_name: config.twitter.users.join(',')}, function (err, data, response) {
  if(err) return debug('error: %s', err)
  var userids = []
  data.forEach(function(u){
    userids.push(u.id_str)
  })
  var searchConf = lib.twitter.config.parse(config.twitter.tracks, config.twitter.users, userids)
  debug('starting streams...')
  var hashStream = T.stream('statuses/filter', searchConf.hashtags)
  var userStream = T.stream('statuses/filter', searchConf.users)
  var stream = lib.twitter.unify([hashStream, userStream])

  stream.on('tweet', function (tweet) {
    debug('tweet: %s', tweet.text)
    io.emit('tweet', tweet)
  })

  stream.on('error', function (err) {
    debug('error: %s', err.message)
  })

  io.on('connection', function(socket){
    T.get('search/tweets', {
      q: searchConf.qstr,
      count: 10
    }, function(err, data, response) {
      if(err) return
      lib.twitter.stagger(socket, data.statuses)
    })
  })
})

var testTweets = require('./data/tweets.json')
io.of('/test').on('connection', function(socket){
  lib.twitter.stagger(socket, testTweets.statuses)
})

app.use(express.static(path.join(__dirname, 'build')))

var port = process.env.PORT || 8000

server.listen(port, function() {
  debug('Listening on %d', port)
})

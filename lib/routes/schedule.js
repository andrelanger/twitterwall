'use strict'

var request = require('request')
var Lanyrd = require('lanyrd')

var getRows = function(rows){
  var merged = [];
  if ( typeof rows !== 'undefined' && rows )
  {
	  for(var i=0; i<rows.length; i++) {
		merged = merged.concat(rows[i]['rows']);
	  }
  }
  return merged
}

var Lanyrd2 = {
  get: function (path, cb){
    var opts = {
                url: 'http://lanyrd.com/mobile/ios2/'+path,
                json: true,
                headers: {
                  'X-Lanyrd-Auth': Math.random().toString()
                }}
    request(opts, cb)
  },
  schedule: function (today, slug, year, cb){
	this.get(year +'/' + slug + '/schedule/' + today, function(error, response, body){
      cb(error, response, getRows(body['sections']))
    })
  }
}

module.exports = function (app, lib) {
  app.get('/schedule', function (req, res) {
    app.debug('sending schedule...')
    var today = app.configjs.lanyrd.overwriteDate || (new Date()).toISOString().substr(0, 10)
    Lanyrd2.schedule(today, app.configjs.lanyrd.id, app.configjs.lanyrd.year, function (err, resp, schedule) {
      if (err) return res.send({error: err})
      res.send(lib.lanyrd.prettify(schedule))
    })
  })
  
}

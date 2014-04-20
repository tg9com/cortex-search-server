var couche = require('couch-db');
var config = require('../configure').config;
var url = require('url');
var modified = require('modified');


var request = modifid({
    cacheMapper: function(options, callback){
        var path = url.parse(options.url).pathname;
        if (path) {
            callback(
                null, 
                path.join(__dirname, 'cache', path)
            );
        } else {
            callback(null, null);
        }
    }
});


var server = couche(config.couchdb, { request: request });

server.bind('registry');

module.exports = server.registry;
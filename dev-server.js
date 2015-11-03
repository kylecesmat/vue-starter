var path             = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack          = require('webpack');
var config           = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    hot    : true,
    noInfo : true
});

server.listen(8080, function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:8080');
});

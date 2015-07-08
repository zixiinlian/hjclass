// "use strict";
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: "/assets/",

    stats: { colors: true }
});

server.listen(8081, "localhost", function() {});
app.listen(8080);
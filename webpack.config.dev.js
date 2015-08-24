// 'use strict';

var path = require('path'),
    webpack = require('webpack'),
    glob = require('glob'),
    args = process.argv,
    debug = args.indexOf("--debug") > -1,
    _commonStaicPath = 'http://class.hujiang.com',
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    // PathRewriterPlugin = require('webpack-path-rewriter'),
    // AssetsPlugin = require('assets-webpack-plugin'),
    defauleCompilePath = __dirname + '/app/**/*.js',
    compilePath = null;

function getEntry() {
    var entry = {},
        file = compilePath ? compilePath : defauleCompilePath;

    glob.sync(file).forEach(function (name) {
        var value = name.match(/\/app\/[^\s]*\.js/),
            file = name.match(/([^/]+?)\/app\.js/),
            key = name.match(/\/app\/[^\s]*(?=app.js)/);

        if (!file) {
            return;
        }
        entry[key] = [
            './vendor/jquery-1.8.3.min.js',
			'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
			'.' + value
		];
    });
    return entry;
}

module.exports = {
    //    devServer: {
    //        //        host: "172.16.13.102",
    //        contentBase: "./",
    //        noInfo: true,
    //        hot: true,
    //        inline: true
    //    },
    //    refreshEntry: function () {
    //        this.entry = getEntry();
    //    },
    context: __dirname,
    entry: getEntry(),
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: 'assets/',
        filename: '[name]app.js'
    },
    devtool: 'source-map',
    resolve: {
        root: path.join(__dirname, '/app/'),
        extensions: ['', '.js', '.json', '.coffee'],
        alias: {
            //            jquery: './vendor/jquery-1.8.3.min.js'
        }
    },
    module: {
        loaders: [{
                test: /\.coffee$/,
                loader: 'coffee'
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        },
//                  {
    //			test: /\.(png|jpg)$/,
    //			loader: 'url-loader'
    //		},
            {
                test: /[.]css$/,
                loader: ExtractTextPlugin.extract("style", "css!autoprefixer")
		}
//                  , {
     //                test: path.resolve(path.join(__dirname, 'vendor'), 'jquery-1.8.3.min.js'),
     //                loader: 'expose?jQuery'
     //            }
                 ]
    },
    plugins: [
		new webpack.DefinePlugin({
            __DEBUG__: debug,
        }),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('[name]app.css', {
            allChunks: true
        }),
		// new AssetsPlugin(),
		new webpack.ProvidePlugin({
            //            $: path.join(__dirname, './vendor/jquery-1.8.3.min.js'),
            //            $: './vendor/jquery-1.8.3.min.js'
        })
	]
}

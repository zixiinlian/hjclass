// 'use strict';

var path = require('path'),
	webpack = require('webpack'),
	glob = require('glob'),
	args = process.argv,
	debug = args.indexOf("--debug") > -1,
	_commonStaicPath = 'http://class.hujiang.com';
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'),
	PathRewriterPlugin = require('webpack-path-rewriter'),
	AssetsPlugin = require('assets-webpack-plugin'),
	defauleCompilePath = __dirname + '/app/**/*.js',
	compilePath = null,
	imagePath = path.join(__dirname, '/app/class/home/images'),
    spriteOutput = imagePath;


function getEntry() {
	var entry = {},
		file = compilePath ? compilePath : defauleCompilePath;

	glob.sync(file).forEach(function(name) {
		var value = name.match(/\/app\/[^\s]*\.js/),
			file = name.match(/([^/]+?)\/app\.js/),
			key = name.match(/\/app\/[^\s]*(?=app.js)/);

		if (!file) {
			return;
		}
		entry[key] = [
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080',
			'.' + value
		];
	});

	return entry;
}

module.exports = {
	devServer: {
		contentBase: "./",
		noInfo: true,
		hot: true,
		inline: true
	},
	refreshEntry: function() {
		this.entry = getEntry();
	},
	entry: getEntry(),
	context: __dirname,
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/assets/',
		filename: '[name]app_dev.js'
	},
	devtool: 'source-map',
	resolve: {
		root: path.join(__dirname, '/app/'),
		extensions: ['', '.js', '.json', '.coffee'],
		alias: {
            jquery : './vendor/jquery-1.8.3.min.js'
        }
	},
	module: {
		loaders: [{
			test: /\.coffee$/,
			loader: 'coffee'
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass")
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=1000'
		}, {
			test: /[/]images[/]/,
			loader: 'file?name=[path][name]-[hash].[ext]'
		}, {
			test: /[.]css$/,
			loader: ExtractTextPlugin.extract("style", "css!autoprefixer")
		}]
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEBUG__: debug,
		}),
		new webpack.HotModuleReplacementPlugin(),
		commonsPlugin,
		new ExtractTextPlugin('[name]/app_dev.css', {
			allChunks: true
		}),
		new AssetsPlugin(),
		new webpack.ProvidePlugin({
			$: path.join(__dirname,'/vendor/jquery-1.8.3.min.js')
		})
	]
}
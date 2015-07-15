// 'use strict';

var path = require('path'),
	webpack = require('webpack'),
	glob = require('glob'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'),
	PathRewriterPlugin = require('webpack-path-rewriter'),
	defauleCompilePath = __dirname + '/app/**/*.js',
	compilePath = null;

function getEntry() {
	var entry = {},
		file = compilePath ? compilePath : defauleCompilePath;

	glob.sync(file).forEach(function(name) {
		var value = name.match(/\/app\/[^\s]*\.js/),
			key = name.match(/([^/]+?)\/app\.js/);

		if (!key) {
			return;
		}

		entry[key[1]] = [
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
		path: path.join(__dirname, '/dist/app/'),
		publicPath: '/dist/',
		filename: '[name]/app-[hash].js'
	},
	module: {
		loaders: [
			{
				test: /\.coffee$/,
				loader: 'coffee'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass")
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=1000'
			}, 
			{
				test: /[/]images[/]/,
				loader: 'file?name=[path][name]-[hash].[ext]'
			},
			{
				test: /[.]css$/,
				loader: ExtractTextPlugin.extract("style", "css!autoprefixer")
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		commonsPlugin,
		new ExtractTextPlugin('[name]/app-[hash].css', {
			allChunks: true
		})
	]
}
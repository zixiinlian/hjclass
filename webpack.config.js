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
		contentBase: "./", //server根目录;
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
		path: path.join(__dirname, '/dist/'),
		publicPath: '/dist/',
		filename: 'app-[hash].js'
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
				loaders: [
				ExtractTextPlugin.extract("style", "css!autoprefixer"),
				'file?name=[path][name]-[hash].[ext]'
				]
			},
			 {
				test: /[.]js$/,
				exclude: [/app.js/,/node_modules/],
				loader: 'file?name=[path][name]-[hash].[ext]'
			}
			,
			 {
				test: /[.]aspx$/,
				loader: PathRewriterPlugin.rewriteAndEmit({
					name: '[name].aspx'
				})
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
		}),
		new PathRewriterPlugin()
	]
}
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
			key = name.match(/([^/]+?)\/js\/main\.js/);

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
	// refreshEntry: function() {
	// 	this.entry = getEntry();
	// },
	entry: {
		class: ['webpack/hot/dev-server',
			'webpack-dev-server/client?http://localho',
			'./app/class/home/js/main.js'
		],
		mydeskmate: ['webpack/hot/dev-server',
			'webpack-dev-server/client?http://localho',
			'./app/class/mydeskmate/js/main.js'
		]
	},
	context: __dirname,
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/dist/',
		filename: '[name]-[chunkhash].js'
	},
	module: {
		loaders: [{
				test: /\.coffee$/,
				loader: 'coffee'
			}, {
				test: /\.html$/,
				loader: PathRewriterPlugin.rewriteAndEmit({
					name: '[name].html'
				})
			},
			// {test: require.resolve('jquery'), loader: 'expose?jQuery'},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style", "css!autoprefixer")
			}, {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass")
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=1000'
			}
		]
	},
	plugins: [
		// new ExtractTextPlugin('[name]-[hash].css', {allChunks: true}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	}
		// }),
		// new webpack.HotModuleReplacementPlugin(),
		// commonsPlugin,
		// new PathRewriterPlugin()
	]
}
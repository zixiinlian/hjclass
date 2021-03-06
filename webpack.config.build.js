// 'use strict';

var path = require('path'),
	webpack = require('webpack'),
	glob = require('glob'),
	args = process.argv,
	debug = args.indexOf("--debug") > -1,
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	PathRewriterPlugin = require('webpack-path-rewriter'),
	AssetsPlugin = require('assets-webpack-plugin'),
	defauleCompilePath = __dirname + '/app/**/*.js',
	compilePath = null;


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
		publicPath: 'assets/',
		filename: '[name]app-[hash].js'
	},
	resolve: {
		root: path.join(__dirname, '/app/'),
		extensions: ['', '.js', '.json', '.coffee'],
		alias: {
            // jquery : './vendor/jquery.min.js'
        }
	},
	module: {
		loaders: [
			{test: /\.coffee$/, loader: 'coffee'}, 
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=1000'}, 
			{test: /[/]images[/]/, loader: 'file?name=[path][name]-[hash].[ext]'}, 
			{test: /[.]css$/, loader: ExtractTextPlugin.extract("style", "css!autoprefixer") }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('[name]app-[hash].css', {
			allChunks: true
		}),
		new AssetsPlugin(),
		new webpack.ProvidePlugin({
			// $: path.join(__dirname, '/vendor/jquery.min.js')
		})
	]
}
// 'use strict';

var path = require('path'),
	webpack = require('webpack'),
	glob = require('glob'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'),
	defauleCompilePath = __dirname + '/app/**/*.js',
	compilePath = null;

// var appRoot = path.join(__dirname, 'app');
// var appModuleRoot = path.join(__dirname, 'app/components');
// var bowerRoot = path.join(__dirname, 'bower_components');
// var nodeRoot = path.join(__dirname, 'node_modules');

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
	refreshEntry: function() {
		this.entry = getEntry();
	},
	entry: getEntry(),
	context: __dirname,
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/asset/[hash]',
		filename: '[name]_[hash].js',
		chunkFilename: '[id]_[hash].js'
	},
	module: {
		loaders: [{
				test: /\.coffee$/,
				loader: 'coffee'
			}, {
				test: /\.html$/,
				loader: 'html'
			},
			// {test: require.resolve('jquery'), loader: 'expose?jQuery'},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader?sourceMap')
			}, {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].css'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	]
	//  	resolve: {
	//     // root: [appRoot, nodeRoot, bowerRoot],
	//     // modulesDirectories: [appModuleRoot],
	//     extensions: ['', '.js', '.coffee', '.html', '.css', '.scss']
	// },
	// plugins: [commonsPlugin]
}
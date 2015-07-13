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
	devServer: {
        contentBase: "./",//server根目录;
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
		publicPath: '/dist/',
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
		    {test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!autoprefixer")},
		    {test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass")},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=1000'
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
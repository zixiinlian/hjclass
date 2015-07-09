// var path = require('path');
var webpack = require('webpack');
var glob = require('glob');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// var appRoot = path.join(__dirname, 'app');
// var appModuleRoot = path.join(__dirname, 'app/components');
// var bowerRoot = path.join(__dirname, 'bower_components');
// var nodeRoot = path.join(__dirname, 'node_modules');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
function getEntry() {
    var entry = {};
    glob.sync(__dirname + '/app/**/*.js').forEach(function (name) {
        var value = name.match(/\/app\/[^\s]*\.js/);
        var key = name.match(/([^/]+?)\.js/)[1];
        entry[key] = [
        'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
        '.' + value
        ];
    });

    return entry;
}

module.exports = {
	refreshEntry: function () {
        this.entry = getEntry();
    },
	entry: getEntry(),
	context: __dirname,
	output: {
		path: __dirname + '/dist',
		publicPath: '/asset/',
		filename: '[name].bundle.js'
	},
	module: {
	    loaders: [
	    	{test: /\.coffee$/, loader: 'coffee'},
	    	{test: /\.html$/,   loader: 'html'},
		    // {test: require.resolve('jquery'), loader: 'expose?jQuery'},
      		{test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader?sourceMap")},
		    {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")},
		    {test: /\.(png|jpg)$/, loader: 'url-loader'}
	    ]
  	},
  	plugins: [
		new ExtractTextPlugin("[name].css"),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
	        	warnings: false
	    	}
	    }),
		new webpack.HotModuleReplacementPlugin()
	],
 //  	resolve: {
	//     // root: [appRoot, nodeRoot, bowerRoot],
	//     // modulesDirectories: [appModuleRoot],
	//     extensions: ['', '.js', '.coffee', '.html', '.css', '.scss']
	// },
  	plugins: [commonsPlugin]
}
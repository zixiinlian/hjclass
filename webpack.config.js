// var path = require('path');
var webpack = require('webpack');

// var appRoot = path.join(__dirname, 'app');
// var appModuleRoot = path.join(__dirname, 'app/components');
// var bowerRoot = path.join(__dirname, 'bower_components');
// var nodeRoot = path.join(__dirname, 'node_modules');

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry: {
		main: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		'./app/class/home/js/main.js'
		]
	},
	output: {
		path: './build',
		filename: '[name].bundle.js'
	},
	module: {
	    loaders: [
	    	{test: /\.coffee$/, loader: 'coffee'},
	    	{test: /\.html$/,   loader: 'html'},
		    // {test: require.resolve('jquery'), loader: 'expose?jQuery'},
      		{test: /\.scss$/, loader: 'style!css!autoprefixer!sass'},
		    {test: /\.css$/, loader: 'style!css!autoprefixer' },
		    {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
	    ]
  	}
 //  	resolve: {
	//     // root: [appRoot, nodeRoot, bowerRoot],
	//     // modulesDirectories: [appModuleRoot],
	//     extensions: ['', '.js', '.coffee', '.html', '.css', '.scss']
	// },
  	// plugins: [commonsPlugin]
}
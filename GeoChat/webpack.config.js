var webpack = require('webpack');
var path = require('path');

module.exports = {
	// React code we wrote
	// Code is entered here, bundled and sent somewhere else
	entry: {
		// Tell webpack where to find our react code
		app: './src/app.js'
	},
	// React output code
	output: {
		// Transpiled and outputed result code put here
		filename: 'public/build/bundle.js',
		sourceMapFilename: 'public/build/bundle.map'
	},
	devtool: '#source-map',
	// Tell webpack HOW to transpile code
	module: {
		// Use babel and use these presets
		loaders: [
			{

				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
} // 2:10
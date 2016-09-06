const webpack = require('webpack');
var path = require("path");

var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const METADATA = {
	title: 'Angular2 Schema Form',
	baseUrl: '/'
};


module.exports = {

	metadata: METADATA,

	resolve: {
		extensions: ['', '.ts', '.js']
	},
	debug: true,


	module: {
		preLoaders: [{
			test: /\.js$/,
			loader: "source-map-loader",
			exclude: [ /node_modules/]
		}],
		loaders: [{
			test: /\.ts$/,
			loader: "awesome-typescript-loader",
			exclude: /node_modules/
		},{
			test: /\.json$/,
			loader: "json-loader"
		},{
			test: /\.css$/,
			loader: 'raw-loader',
		},{
			test: /\.(png|jpg|gif|woff|ttf|eot|svg)$/,
		    loader: 'file-loader'
		}]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(true),
		new ForkCheckerPlugin()
	],

	node: {
		global: 'window',
		crypto: 'empty',
		module: false,
		clearImmediate: false,
		setImmediate: false,
	}

};

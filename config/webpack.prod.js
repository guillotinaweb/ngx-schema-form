const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require("webpack-node-externals");
var path = require("path");
var package = require("../package.json");
var DEPENDENCIES = package.dependencies;
const METADATA = {
	title: "Angular2 Schema Form",
	baseUrl: "/"
};

module.exports = {
	metadata: METADATA,
	output: {
		path: path.resolve("./dist"),
		filename: "form.js",
		"library": "angular2-schema-form",
		"libraryTarget":"commonjs"
	},
	entry: {
		"form": path.resolve("src/form/form.component")
	},
	resolve: {
		extensions: ["", ".ts", ".js"]
	},
	debug: true,
	devtool: 'cheap-module-source-map',
	module: {
		preLoaders: [{
			test: /\.js$/,
			loader: "source-map-loader",
//			exclude: [
//				// these packages have problems with their sourcemaps
//				path.resolve("./node_modules/rxjs"),
//				path.resolve("./node_modules/@angular")
//			]
			exclude: [ /node_modules/]
		}],
		loaders: [{
			test: /\.ts$/,
			loader: "awesome-typescript-loader",
			exclude: path.resolve("./node_modules")
		},{
			test: /\.json$/,
			loader: "json-loader"
		},{
			test: /\.css$/,
			loader: 'raw-loader'
		},{
			test: /\.html$/,
			loader: 'raw-loader',
			exclude:[path.resolve("demo/index.html")]
		}]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(true)
	],
	externals: [nodeExternals({whitelist:["z-schema"]})],
	node: {
		global: 'window',
		crypto: 'empty',
		process: true,
		module: false,
		clearImmediate: false,
		setImmediate: false
	}
}

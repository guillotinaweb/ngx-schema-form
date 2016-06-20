const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

const METADATA = {
	title: "Angular2 Schema Form",
	baseUrl: "/"
};

module.exports = {
	metadata: METADATA,
	output: {
		path: path.resolve("./dist"),
		filename: "[name].bundle.js"
	},
	entry: {
		//"form": path.resolve("src/form/form.component"),
		"demo": "./demo/main.browser",
		"vendor": "./src/vendor",
		"polyfills":"./src/polyfills"
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
			exclude: [
				// these packages have problems with their sourcemaps
				path.resolve("./node_modules/rxjs"),
				path.resolve("./node_modules/@angular")
			]
		}],
		loaders: [{
			test: /\.ts$/,
			loader: "awesome-typescript-loader",
			exclude: "./node_modules"
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
		new webpack.optimize.OccurenceOrderPlugin(true),
		new HtmlWebpackPlugin({
			template: 'demo/index.html',
			chunksSortMode: 'dependency'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['demo', 'vendor',"polyfills"]
		})],
	node: {
		global: 'window',
		crypto: 'empty',
		process: true,
		module: false,
		clearImmediate: false,
		setImmediate: false
	}
}

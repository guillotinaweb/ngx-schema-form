const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
var path = require("path");

const METADATA = {
	title: "Angular2 Schema Form",
	baseUrl: "/"
};

module.exports = merge(require("./webpack.common.js"),{
	metadata: METADATA,
	output: {
		path: path.resolve("./dist"),
		filename: "[name].js"
	},
	entry: {
		"demo": "./demo/main.browser",
		"vendor": "./demo/vendor",
		"polyfills":"./demo/polyfills"
	},
	devtool: 'cheap-module-source-map',
	module: {
		loaders:[{
			test: /\.html$/,
			loader: 'raw-loader',
			exclude:[path.resolve("demo/index.html")]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'demo/index.html',
			chunksSortMode: 'dependency'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['demo', 'vendor',"polyfills"]
		})]
})

const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require("webpack-node-externals");
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
		filename: "index.js",
		libraryTarget: "commonjs2",
		library: true
	},
	entry: {
		"index": path.resolve("src/index.ts")
	},
	devtool: 'cheap-module-source-map',
	module: {
		loaders:[{
			test: /\.html$/,
			loader: 'raw-loader',
		}]
	},
	plugins: [],
	externals: [nodeExternals({whitelist:["z-schema"]})],
});

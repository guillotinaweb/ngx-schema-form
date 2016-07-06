const webpack = require("webpack");
const merge = require("webpack-merge");
var path = require("path");
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = merge(require("./webpack.common.js"), {

	// Necessary for karma
	devtool: 'inline-source-map',

	module: {

		preLoaders: [

			{
				test: /\.ts$/,
				loader: 'tslint-loader',
				exclude: /'node_modules'/
			}
		],
		loaders:[{
			test: /\.html$/,
			loader: 'raw-loader',
			exclude:[path.resolve("demo/index.html")]
		}],

		postLoaders: [
			{
				test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
				include: path.resolve('src'),
				exclude: [
					/\.(spec)\.ts$/,
					/node_modules/
				]
			}

		]
	},

	tslint: {
		emitErrors: false,
		failOnHint: false,
		resourcePath: 'src'
	}
})

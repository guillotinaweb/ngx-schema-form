const webpack = require("webpack");
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
		"form": path.resolve("./src/form/form.component.ts"),
		"polyfills": "./src/polyfills.ts",
		"vendor": "./src/vendor.ts"
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
			loader: "awesome-typescript-loader"
		},{
			test: /\.json$/,
			loader: "json-loader"
		},{
			test: /\.html$/,
			loader: 'raw-loader'
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
	],
	node: {
		global: 'window',
		crypto: 'empty',
		process: true,
		module: false,
		clearImmediate: false,
		setImmediate: false
	}
}

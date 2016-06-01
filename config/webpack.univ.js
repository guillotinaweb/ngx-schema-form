var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

var webpackConfig = require('./config/webpack.common')

const ENV = process.env.NODE_ENV = process.env.ENV = 'universal';

var clientConfig = {
  target: 'web',
  entry: './src/client',
  output: {
    path: path.join(__dirname, 'dist', 'client')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};


var serverConfig = {
  target: 'node',
  entry: './src/server',
  output: {
    path: path.join(__dirname, 'dist', 'server')
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};


// Default config
var defaultConfig = {

  module: {
    noParse: [
      path.join(__dirname, 'zone.js', 'dist'),
      path.join(__dirname, 'angular2', 'bundles')
    ],
    preLoaders: [
      {
        test: /\.(html|css)$/,
        loader: "plonetheme-preloader?backend=" + METADATA.PLONE // LOAD FROM PLONE
      }
    ],
  },
  context: __dirname,
  resolve: {
    root: path.join(__dirname, '/src')
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: 'Plone webpack',
      alwaysNotify: true
    })
  ]
}

var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, defaultConfig, webpackConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, webpackConfig, serverConfig)
]

// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

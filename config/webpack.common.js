const webpack = require('webpack');
const helpers = require('./helpers');

var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const METADATA = {
  title: 'Angular2 Schema Form',
  baseUrl: '/'
};


module.exports = {

  metadata: METADATA,

  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helpers.root('src'),
    modulesDirectories: ['node_modules']
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular'),
        ]
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {   test: /\.scss$/,
          exclude: [
            helpers.root('node_modules')
          ],
          loaders: ['raw-loader', 'sass-loader']},
      {   test: /\.(png|jpg|gif)$/,
          exclude: [
            helpers.root('node_modules')
          ],
          loader: "url-loader?limit=50000&name=[path][name].[ext]" },
      {   test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
          exclude: [
            helpers.root('node_modules')
          ],
          loader: "file-loader?mimetype=application/font-woff&name=[path][name].[ext]" },
      {   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          exclude: [
            helpers.root('node_modules')
          ],
          loader: "file-loader?mimetype=application/x-font-ttf&name=[path][name].[ext]" },
      {   test: /\.eot(\?v=\d+\.\d+\.\d+)?\??$/,
          exclude: [
            helpers.root('node_modules')
          ],
          loader: "file-loader?mimetype=application/vnd.ms-fontobject&name=[path][name].[ext]" },
      {   test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
          exclude: [
            helpers.root('node_modules')
          ],
          loader: "file-loader?mimetype=application/font-otf&name=[path][name].[ext]" },
      {   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          exclude: [
            helpers.root('node_modules')
          ],
          loader: "url-loader"   },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      }
    ]
  },
  sassLoader: {
    includePaths: [helpers.root('src/static/scss')]
  },
  plugins: [

    new ForkCheckerPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills'].reverse()
    }),
    new CopyWebpackPlugin([{
      from: 'src/static',
      to: 'static'
    }]),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    })

  ],

  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};

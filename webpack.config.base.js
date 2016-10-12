const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './src/sass/main.scss',
    './src/js/index.js'
  ],

  output: {
    path: `${__dirname}/dist/`,
    filename: 'js/bundle.js'
  },

  resolve: {
    root: `${__dirname}/src/js/`
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, './src')
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('raw!sass', { publicPath: '../' })
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/html/index.html',
      to: 'index.html'
    }]),
    new CopyWebpackPlugin([{
      from: 'src/images',
      to: 'images/'
    }]),
    new CopyWebpackPlugin([{
      from: 'node_modules/styleguide-baas/src/fonts',
      to: 'fonts/'
    }]),
    new ExtractTextPlugin('css/main.css', {})
  ]
};


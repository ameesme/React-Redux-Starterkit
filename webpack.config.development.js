const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

module.exports = Object.assign(baseConfig, {
  devtool: 'source-map',

  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ])
});

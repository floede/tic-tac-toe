var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './babel/index.babel',
  output: { path: __dirname, filename: './js/index.js' },
  module: {
    loaders: [
      {
        test: /.babel?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};

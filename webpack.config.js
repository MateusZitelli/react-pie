'use strict';
var webpack = require('webpack');

var IS_PRODUCTION = 'production' === process.env.NODE_ENV;

var webpackConfig = module.exports = {
  entry: __dirname + "/src/Pie.jsx",
  output: {
    path: __dirname + '/dist',
    filename: 'react-pie.js',
    library: 'Pie',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    d3: {
      root: 'd3',
      commonjs: 'd3',
      commonjs2: 'd3',
      amd: 'd3'
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.es6']
  },
  plugins: []
};

if(IS_PRODUCTION){
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  );

  webpackConfig.output.filename = 'react-pie.min.js';
}

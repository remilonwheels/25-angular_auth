'use strict';

require('dotenv').load();

const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },
  plugins: [
    new HTMLPlugin({ template: `${__dirname}/app/index.html` }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({__API_URL__: JSON.stringify(process.env.API_URL)}),
  ],
  module: {
    rules: [
      { //:::: babel ::::
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {//:::: html ::::
        test: /\.html$/,
        use: 'html-loader',
      },
      { //:::: sass ::::
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      { //:::: fonts ::::
        test: /\.(eot|woff|tff|svg).*/,
        use: 'url-loader?limit=10000&name=fonts/[hash].[ext]',
      },
      {

      },
    ],
  },
};

'use strict';

let path = require('path');

modules.exports = {
  mode: 'production',
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
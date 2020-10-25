const path = require('path');
const merge = require('webpack-merge');
const sass = require('./webpack-sass.config');
const dev = require('./webpack-dev.config');

module.exports = merge(dev);
'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')
var conf = require('./conf');

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  config: conf.test
})

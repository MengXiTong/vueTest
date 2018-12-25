'use strict'
var conf = require('./conf');
/**
 * 读取命令参数确定使用dev，test还是prod
 * 例子：npm run build dev，第一个参数为run，第二个参数为build，第三个参数是我们需要的（确认哪个环境）
 */
var argv;
var env;
var defaultVal = 'dev';
try {
  argv = JSON.parse(process.env.npm_config_argv).original;
} catch (ex) {
  argv = process.argv;
}
if (argv) {
  try {
    env = argv[2];
  } catch (e) {
    env = defaultVal;
  }
}
if (env !== 'dev' && env !== 'test' && env !== 'prod') {
  env = process.env.buildType || defaultVal;
}
console.log('use ' + env);

module.exports = {
  NODE_ENV: '"production"',
  config: conf[env],
  type: env
}

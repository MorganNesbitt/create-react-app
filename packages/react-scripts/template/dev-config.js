const base = require('./base-config.json')

const devConfig = {
  devConfig: true
};

module.exports = Object.assign({}, base, devConfig);

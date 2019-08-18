const base = require('./base-config.json')

const prodConfig = {
  prodConfig: true
};

module.exports = Object.assign({}, base, prodConfig);

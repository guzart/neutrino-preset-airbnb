const merge = require('deepmerge');
const eslint = require('@neutrinojs/eslint');

module.exports = (neutrino, options = {}) => {
  neutrino.use(eslint, merge({
    eslint: {
      baseConfig: {
        extends: ['airbnb']
      }
    }
  }, options));
};

const merge = require('deepmerge');
const eslint = require('neutrino-middleware-eslint');

module.exports = (neutrino, options) => {
  neutrino.use(eslint, merge({
    eslint: {
      baseConfig: {
        extends: ['airbnb']
      },
      rules: {
        // handled by babel rules
        'new-cap': 'off',

        // handled by babel rules
        'object-curly-spacing': 'off',

        // require a capital letter for constructors
        'babel/new-cap': ['error', { newIsCap: true }],

        // require padding inside curly braces
        'babel/object-curly-spacing': ['error', 'always'],
      }
    }
  }, options));
};
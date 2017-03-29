import test from 'ava';
import { Neutrino } from 'neutrino';

test('loads preset', t => {
  t.notThrows(() => require('..'));
});

test('uses preset', t => {
  const api = Neutrino();
  t.notThrows(() => api.use(require('..')));
});

test.only('supports custom properties', t => {
  const api = Neutrino();
  api.use(require('..'));

  api.config.module
    .rule('lint')
    .use('eslint')
    .tap(options => Object.assign(options, { envs: ['browser', 'mocha'] }));
  
  const outputConfig = api.config.toConfig();
  const moduleOptions = outputConfig.module.rules[0].use[0].options;
  t.deepEqual(moduleOptions.envs, ['browser', 'mocha'])
});

import { Plugin } from '/Users/bino/Desktop/my-app/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','getInitialState','request',],
});
plugin.register({
  apply: require('/Users/bino/Desktop/my-app/src/app.js'),
  path: '/Users/bino/Desktop/my-app/src/app.js',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };

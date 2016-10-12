
/**
 * In order to test our components against the full DOM API we need to setup a global document.
 * This is done using jsdom, and should be run before importing React. The npm test command
 * already does this for you.
 *
 * See https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md for more details on
 * why this is needed
 *
 * This file also sets up babel so all of the app's code, the baas-styleguide's code
 * and the shared styleguide's code gets compiled correctly.
 *
 */

require('babel-register')({
  ignore: false,
  only: /(src|node_modules\/styleguide|node_modules\/styleguide-baas)/,
  sourceMaps: 'inline'
});

const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

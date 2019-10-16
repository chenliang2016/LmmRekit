// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  DemoPage,
} from './';

export default {
  path: 'demo-1',
  name: 'Demo 1',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: '/demoPage', name: 'Demo page', component: DemoPage },
  ],
};

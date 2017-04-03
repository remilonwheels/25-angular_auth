'use strict';

import './scss/main.scss';

import path from 'path';
import angular from 'angular';
import camelcase from 'camelcase';
import pascalcase from 'pascalcase';
import uiRouter from 'angular-ui-router';
import ngTouch from 'angular-touch';
import ngAnimate from 'angular-animate';

const ayogram = angular.module('ayogram', [ngTouch, ngAnimate, uiRouter]);

// const angularLoaderObject = {
//   config: {
//     dir: './config',
//     fn: file => ay
//   },
// };


let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( key => {
  ayogram.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  ayogram.controller(name, module);
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ayogram.factory(name, module);
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ayogram.component(name, module);
});

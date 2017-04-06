'use strict';

require('./scss/main.scss');

const
  path = require('path'),
  angular = require('angular'),
  camelcase = require('camelcase'),
  pascalcase = require('pascalcase'),
  uiRouter = require('angular-ui-router'),
  ngTouch = require('angular-touch'),
  ngAnimate = require('angular-animate'),
  ngFileUpload = require('ng-file-upload');

const ayogram = angular.module('ayogram', [ngTouch, ngAnimate, uiRouter, ngFileUpload]);


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
  ayogram.service(name, module);
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ayogram.component(name, module);
});

context = require.context('./filter/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ayogram.filter(name, module);
});

context = require.context('./directive/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ayogram.directive(name, module);
});

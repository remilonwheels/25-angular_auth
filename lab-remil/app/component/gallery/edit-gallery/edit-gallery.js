'use strict';

import './_edit-gallery.scss';
import template from './edit-gallery.html';
import {EditGalleryController as controller} from './edit-gallery-controller.js';

module.exports = {
  template,
  controller,
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<',
  },
};

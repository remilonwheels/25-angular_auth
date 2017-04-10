'use strict';

require('./_thumbnail-modal.scss');

module.exports = {
  template: require('./thumbnail-modal.html'),
  controller: ['$log', ThumbnailModalController],
  controllerAs: 'thumbnailModalCtrl',
  bindings: {
    modalInstance: '<',
    resolve: '<',
  },
};

function ThumbnailModalController($log) {
  $log.debug('ThumbnailModalController');

}

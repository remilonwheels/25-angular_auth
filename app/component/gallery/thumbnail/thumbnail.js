'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'picService', '$uibModal',ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<',
  },
};

function ThumbnailController($log, picService, $uibModal) {
  $log.debug('ThumbnailController');

  this.deletePic = function() {
    $log.debug('thumbnailCtrl.deletePic');

    picService.deletePic(this.gallery,this.pic._id);
  };

  this.open = function() {
    $uibModal.open({
      component: 'thumbnail-modal',
      resolve: {
        modalPic: this.pic,
      },
    });
  };
}

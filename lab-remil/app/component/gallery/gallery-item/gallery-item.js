'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controller: ['$log', 'galleryService', GalleryItemController],
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<',
    deleteDone: '&',
  },
};

function GalleryItemController($log, galleryService) {
  $log.debug('GalleryItemController');

  this.showEditGallery = false;

  this.deleteGallery = function() {
    console.log(this);
    galleryService.deleteGallery(this.gallery._id)
    .then(() => {
      this.deleteDone(this.gallery);
    });

  };
}

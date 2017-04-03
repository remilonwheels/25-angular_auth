'use strict';


export const EditGalleryController = ['$log', 'galleryService', Controller];

class Controller {
  constructor($log, galleryService){
    $log.debug('EditGalleryController');

    this.updateGallery = function() {
      $log.debug('editGalleryCtrl.updateGallery');
      galleryService.updateGallery(this.gallery._id, this.gallery);
    };
  }
}
// function Controller($log, galleryService) {
//   $log.debug('EditGalleryController');
//
//   this.updateGallery = function() {
//     $log.debug('editGalleryCtrl.updateGallery');
//     galleryService.updateGallery(this.gallery._id, this.gallery);
//   };
// }

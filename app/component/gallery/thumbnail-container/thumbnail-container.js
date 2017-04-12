'use strict';

require('./_thumbnail-container.scss');

module.exports = {
  template: require('./thumbnail-container.html'),
  // controller: ['$log', '$uibModal', ThumbnailContainerController],
  controllerAs: 'thumbnailContainerCtrl',
  bindings: {
    gallery: '<',
  },
};
// 
// function ThumbnailContainerController($log, $uibModal) {
//   this.open = function () {
//     var modalInstance = $uibModal.open({
//       animation: this.animationsEnabled,
//       ariaLabelledBy: 'modal-title',
//       ariaDescribedBy: 'modal-body',
//       templateUrl: 'myModalContent.html',
//       controller: 'ModalInstanceCtrl',
//       controllerAs: 'ModalInstanceCtrl',
//       appendTo: parentElem,
//       resolve: {
//         items: function () {
//           return $ctrl.items;
//         }
//       }
//     });
//   };
// }

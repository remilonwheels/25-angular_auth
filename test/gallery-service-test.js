'use strict';

describe('Gallery Service', function() {

  beforeEach(() => {
    angular.mock.module('ayogram');
    angular.mock.inject(($rootScope, authService, galleryService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.galleryService = galleryService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('galleryService.createGallery()', () => {
    it('should create a new swag gallery', () => {
      let galleryData = {
        name: 'swaggy gallery',
        desc: 'swaggy description',
      };

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer test token',
      };

      this.$httpBackend.expectPOST(`${__API_URL__}/api/gallery`, galleryData, headers)
      .respond(200, {
        _id: '12345',
        username: 'ayoplaya',
        name: galleryData.name,
        desc: galleryData.desc,
        pics: [],
      });

      this.galleryService.createGallery(galleryData);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.deleteGallery()', () => {
    it('should create delete a gallery', () => {
      let galleryData = {
        _id: '12345',
        name: 'swaggy gallery',
        desc: 'swaggy description',
      };

      let headers = {
        Authorization: 'Bearer test token',
        Accept:'application/json',
      };

      let resHeaders =  {
        Authorization:'Bearer test token',
        Accept:'application/json',
      };

      console.log('delete headers', headers);

      this.$httpBackend.expectDELETE(`${__API_URL__}/api/gallery/${galleryData._id}`, headers)
      .respond(204, resHeaders);

      this.galleryService.deleteGallery(galleryData._id);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });
});

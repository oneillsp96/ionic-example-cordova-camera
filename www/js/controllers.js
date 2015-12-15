angular.module('starter.controllers', ['firebase'])

  .config(function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  })



  // .controller('FriendsCtrl', function ($scope, Friends, Camera) {
  //   $scope.friends = Friends.all();
  //   $scope.getPhoto = function () {
  //     console.log('Getting camera');
  //     Camera.getPicture({
  //       destinationType: Camera.DestinationType.DATA_URL,//
  //       sourceType: Camera.PictureSourceType.CAMERA,//
  //       allowEdit: true,//
  //       encodingType: Camera.EncodingType.JPEG,//
  //       //popoverOptions: CameraPopoverOptions,
  //       quality: 75,
  //       targetWidth: 320,
  //       targetHeight: 320,
  //       saveToPhotoAlbum: false
  //     }).then(function (imageURI) {
  //       console.log(imageURI);
  //       $scope.lastPhoto = imageURI;
  //     }, function (err) {
  //       console.err(err);
  //     });


  //   }
  // })
          
/*
navigator.camera.getPicture(function(imageURI) {
  console.log(imageURI);
}, function(err) {
}, { 
  quality: 50,
  destinationType: Camera.DestinationType.DATA_URL
});
*/



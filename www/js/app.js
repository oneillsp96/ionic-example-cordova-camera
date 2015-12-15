// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'firebase'])

  .config(function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .controller('MainCtrl', function ($scope, Camera, $firebaseArray) {

    var ref = new Firebase("https://glaring-heat-7252.firebaseio.com/picList");
    var picList = $firebaseArray(ref);
    $scope.picList = picList;
    
    $scope.getPhoto = function () {
      Camera.getPicture().then(function (imageURI) {
        console.log(imageURI);
        $scope.lastPhoto = imageURI;
        picList.$add({ "imageUri": imageURI });
        $scope.picList = picList;
      }, function (err) {
        console.err(err);
      },  
        
        //options
        {
          
          
          // destinationType: Camera.DestinationType.DATA_URL,//
          // sourceType: Camera.PictureSourceType.CAMERA,//
          // allowEdit: true,//
          // encodingType: Camera.EncodingType.JPEG,//
          //popoverOptions: CameraPopoverOptions,
          quality: 75,
          targetWidth: 320,
          targetHeight: 320,
          saveToPhotoAlbum: false
        });
    };

  })

//example from cordova camera 
//Take photo and retrieve Base64-encoded image:

// navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
//     destinationType: Camera.DestinationType.DATA_URL
//  }); 

// function onSuccess(imageData) {
//     var image = document.getElementById('myImage');
//     image.src = "data:image/jpeg;base64," + imageData;
// }

// function onFail(message) {
//     alert('Failed because: ' + message);
// }
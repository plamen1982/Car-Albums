'use strict';

carAlbums.controller('ListAllModelsController', function($scope, $routeParams, carsData){

   /*      if($routeParams.id) {
       carsData.getCarsData($routeParams.id)
           .$promise
           .then(function (brands) {

               //TODO : Refactoring - models => models
               //$scope.chornologyBrand =
               // data is the current car brand( all Audies, BMW's and so on)
               // function getmodels(brands){
               // in this array i'm expecting to assign the id's of the current brand
               var allModels = [];
               var models = brands.models;
               for (var i = 0; i < brands.length; i = i + 1) {
                   if (models) {
                       for (var j = 0; j < models.length; j = j + 1) {
                           models[j].brandId = brand.id;
                           allModels.push(models[j])
                       }
                       $scope.modelsList = allModels;
                   }
               }    */
               /* for(var i = 0; models.length < 0; i = i +1){
                for(var j = 0;
                if(models[i].id == parseInt($routeParams.modelId)) {
                $scope.models = models[i];
                break;
                }
                } */



       if($routeParams.id){
           carsData.getCarsData($routeParams.id)
               .$promise
               .then(getModel)
       }
function getModel(currentBrand){

   $scope.models  = currentBrand.models;


   }



});
//--------------------------------------------------------------PRIVATE(FUNCTIONS)

/*
 function getModel(currentBrand){
     var models  = currentBrand.models;
         for(var i = 0; i < models.length; i ++){
            if(models[i].id == parseInt($routeParams.modelId)){
                $scope.models = models[i];
                    break;
                }
            }
         }

         */
    /*var albums = artist.albums;
    for(var i = 0; i < albums.length;i++) {

        //here we assign to the scope the album with ID matched with the Id provided from routeParams
        if (albums[i].id == parseInt($routeParams.albumId)) {
            $scope.album = albums[i];
            break;
        }
    }*/

   /* $scope.averageRating = averageRating;
    function averageRating(newReview) {
        var sum = 0;
        var length = $scope.cars.models.ratingsBrand.length;
        for (var i = 0; i < length; i++) {
            sum += parseInt($scope.cars.models.ratingsBrand[i]);
        }

        return sum / length;
    } */

'use strict';
carAlbums.controller('ModelDetailsController',
    function ModelDetailsController ($scope, $route, carsData, $routeParams, $location, $log, author){

        //----------------------------------------------------------------ASSIGNING DATA TO THE SCOPE
        $scope.author = author;
        $scope.$route = $route;
        $scope.$routeParams = $routeParams;

        if($routeParams.modelId){
             carsData.getCarsData($routeParams.id)
             .$promise
             .then(getModel)
            }
        if($routeParams.brandId){
            carsData.getCarsData($routeParams.brandId)
            .$promise
            .then(getmodels)
        }

        function getModel (data) {
            var models = data.models;
            var model = [];
            for(var i = 0; i < models.length; i = i + 1){
                if(models[i].id == parseInt($routeParams.modelId)){
                    model = models[i];
                    break;
                }
            }
            $scope.model = model;
        }

        //---------------------------------------------------------------SCOPE FOR STYLING
        $scope.boldTextClass = {
            fontWeight: 'bold'
        };
        //---------------------------------------------------------------SCOPE FOR RATING
       //
        //---------------------------------------------------------------SCOPE FOR REVIEW

        //--------------------------------------------------------------PRIVATE(FUNCTIONS)
        $scope.showFormReview = showFormReview;
        $scope.isHideReview = true;
        $scope.nameButtonReview = 'Add Review';

        function showFormReview(){
            if($scope.isHideReview === true){
                $scope.isHideReview = false;
                $scope.nameButtonReview = 'Hide';
            }
            else {
                $scope.isHideReview = true;
                $scope.nameButtonReview = 'Add Review';
            }
        }

        $scope.switchPictures = switchPictures;
        $scope.isInterior = true;
        $scope.nameButtonInterior = 'Interior ';

        function switchPictures() {
            if ($scope.isInterior === true) {
                $scope.isInterior = false;
                $scope.nameButtonInterior = 'Exterior';
                $scope.model.imageCar = $scope.model.imageInside;
            }
            else {
                $scope.isInterior = true;
                $scope.nameButtonInterior = 'Interior';
                $scope.model.imageCar = $scope.model.imageOutside;
            }
        }

        function showModels(){
            if($scope.isShowBrands === true){
                $scope.isShowBrands = false;
                $scope.nameButtonBrands = 'Check the chronology';
            }
            else {
                $scope.isShowBrands = true;
                $scope.nameButtonBrands = 'Hide';

            }
        }

        $scope.addReview = addReview;
        var countNumbersOfReviews = 0;

        function addReview(newReview){
            if(newReview.$valid) {
                carsData.saveUser(newReview);
                    if (countNumbersOfReviews < 1) {
                         countNumbersOfReviews++;
                        $scope.model.reviewsBrand.push(newReview.review);
                        $scope.model.ratingsBrand.push(parseInt($scope.newReview.rate));
                    }
                    else {
                        alert('You can add only one review');
                    }
                }
            }

    });


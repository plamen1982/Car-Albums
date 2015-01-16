'use strict';

    carAlbums.controller('ListAllBrandsController',
        function ListAllBrandsController ($scope, $route, carsData){

            // in brands are all json-s
            $scope.brands = carsData.getAllBrands();

            $scope.brands.range = function(){
               var carsRange = [];
                for(var i = 0; i < $scope.brands.length; i = i + 4){
                    carsRange.push(i)
                }
            return carsRange;
        };
               carsData.getAllBrands()
                .$promise
                .then(getAllFlags);

            function getAllFlags(brands) {
                var countries = ["Germany", "USA", "England", "Italy"],
                    count = 0,
                    imageCountryFlags = [],
                    tempArray = [],
                    currentCountry,
                    currentPosition;

                //The array(imageCountryFlags) filled with objects with properies image and country
                for (var i = 0; i < brands.length; i = i + 1) {

                    for (var j = 0; j < countries.length; j = j + 1) {

                        if (countries[j] === brands[i].country) {
                            imageCountryFlags.push({
                                image: brands[i].imageCountry,
                                country: brands[i].country });
                            break;

                        }
                    }
                }
                //sort the array imageCountryFlags in new array(tempArray)
                tempArray = imageCountryFlags.sort(function (a, b) {
                    if (a.country > b.country) {
                        return 1;
                    }
                    if (a.country < b.country) {
                        return -1;
                    }
                    return 0;
                });

                // Delete every one of these objects that are more than one in the array

                for (var k = 0; k < tempArray.length - 1; k = 1 + k) {
                    count = 0;
                    for (var m = k + 1; m < tempArray.length; m = 1 + m) {

                        if (tempArray[k].image === tempArray[m].image) {
                            if (count === 0) {
                                count = count + 1;
                                currentPosition = m;
                            }
                            else {
                                count = count + 1;
                            }
                        }
                    }
                    tempArray.splice(currentPosition, count);
                }
                $scope.imageCountryFlag = tempArray;
            }

    });

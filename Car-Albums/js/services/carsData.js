'use strict';

carAlbums.factory('carsData', function ($http, $resource) {
    var resource = $resource('/data/cars/:id ', {id: '@id'});
    return {
        getCarsData: function (id) {
            return resource.get(
                {id: id}
            )
        },
        saveUser: function (newReview) {

                window.alert("Saving is disabled for security reasons");
            /*
            var cars = resource.query(function(cars) {
                newReview.id = cars.length + 1;
                resource.save(newReview)
             */

        },
        getAllBrands: function () {
            return resource.query();
        }
    }
});

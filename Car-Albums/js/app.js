'use strict';


// Declare app level module which depends on filters, and services
var carAlbums = angular
    .module('carAlbums', ['ngResource', 'ngRoute' ])
    .config(function($routeProvider) {

             $routeProvider
            .when('/', {
                templateUrl:'templates/list-all-brands.html' })
            .when('/models/:id', {
                templateUrl: 'templates/list-all-models.html'})//template with name list-all-models.html
            .when('/brand/:id/model/:modelId', {
                templateUrl: 'templates/model-details.html'  //template model-details.html
            })
            .otherwise({
                redirectTo: '/'});
    })
    .constant('author','Plamen Hristov');

//------------------------------------------------------BOOTSTRAP-------------------------------------------------------
$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});
'use strict';

carAlbums.filter('status', function(){
    return function(input){
        switch (input){
            case 1: return 'Released'; break;
            case 2: return 'Unreleased'; break;
        }
    }
})

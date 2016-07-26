var services = angular.module('external_services', []);


// for each module we can set the provider configuration 
services.config(['$httpProvider', function($httpProvider) {
 $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);


     

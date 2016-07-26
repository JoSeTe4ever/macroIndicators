
 
 services.factory("worldBankResource", ["$http", function($http) {

     // it returns an exposed API.
     var WORLD_BANK_API = 'http://api.worldbank.org';
     var INDICATOR_URL = '/countries/{COUNTRY_CODE}/indicators/{INDICATOR_CODE}';
     var COUNTRIES_LIST_URL = '/countries?format=jsonP&per_page=999999999&prefix=Getdata';
     var JSON_FORMAT = '?format=jsonP';
     var PREFIX_JSONP = '&prefix={PREFIX_FUNCTION}';
     //private function to parse the data 
     
     return {
         getGDPperYear: getGDPperYear,
         getCountriesList: getCountriesList,
         getIndicatorPerCountry: getIndicatorPerCountry
     };

     function getGDPperYear(year) {
         return $http.get(WORLD_BANK_API + year).then(function(gdpInfo) {
             return gdpInfo;
         }, function() {
             throw new Error("Error Retrieving the information from the World Bank API");
         });
     };

     function getCountriesList() {
         return $http.jsonp(WORLD_BANK_API + COUNTRIES_LIST_URL).success(function(countriesList) {
             return countriesList;
         }, function() {
             throw new Error("Error Retrieving the information from the World Bank API");
         });
     };

     function getIndicatorPerCountry(indicatorCode, countryCode, callbackMethodName) {

         var customINDICATOR_URL = INDICATOR_URL.replace("{INDICATOR_CODE}",indicatorCode).replace("{COUNTRY_CODE}", countryCode)
         var customPREXIX_JSONP = PREFIX_JSONP.replace("{PREFIX_FUNCTION}",callbackMethodName);
         
         return $http.jsonp(WORLD_BANK_API + customINDICATOR_URL + JSON_FORMAT + customPREXIX_JSONP).then(function(countriesList) {

         }, function(error) {
             console.log("got " + indicatorCode+ " data for country " + countryCode)
         });
     };
 }]);
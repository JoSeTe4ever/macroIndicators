var countryComponent = components.component('countrySummary', {
  templateUrl: 'angular_components/country_component/html/country.html',
  controller: countryCtrl,
  bindings: {
    countryCode: '<'
  }
});
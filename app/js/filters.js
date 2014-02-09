
// register a filter
angular.module('phonecatFilters', []).filter('checkmark', function() {
    return function(input) {
        // checkmark or x if input is true
        return input ? '\u2713' : '\u2718';
    };

});
var myApp = angular.module('myApp', []);

myApp.directive('makeEditable', function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true
    }
});
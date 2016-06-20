var myApp = angular.module('myApp', []);

myApp.directive('makeEditable', function() {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        scope: true
    }
});
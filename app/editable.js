var myApp = angular.module('myApp', []);

myApp.directive('makeEditable', function() {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: './template.html',
        replace: true,
        scope: true
    }
});
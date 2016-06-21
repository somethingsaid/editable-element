var myApp = angular.module('myApp', []);

myApp.directive('makeEditable', function() {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: './template.html',
        replace: true,
        scope: true,
        link: function(scope, element, attrs) {
	        element.bind("keydown keypress", function (event) {
	            if(event.which === 13) {
	                scope.$apply(function (){
	                    scope.editable = false;
	                });

	                event.preventDefault();
	            }
	        });
    	}
    }
});
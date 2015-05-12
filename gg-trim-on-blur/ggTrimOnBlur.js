angular.module('gg.directives')
    .directive('ggTrimOnBlur', function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                angular.element(element).on('blur', trim);
            },
            controller: function() {
                trim = function(event) {
                    var inputBox = event.target;
                    var trimmedValue = inputBox.value.trim();
                    inputBox.value = trimmedValue;
                }
            }
        }
    });
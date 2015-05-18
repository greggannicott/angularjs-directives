angular.module('gg.directives')
    .directive('ggTreeView', function(treeViewService) {
        return {
            restrict: "E",
            scope: {
                treeData: "=",
                displayCheckboxes: "="
            },
            templateUrl: "ggTreeView.html",
            link: function(scope, element, attributes) {
                
                treeViewService.init(scope.treeData);

                // Determine if we're going to display checkboxes or not
                if (scope.displayCheckboxes !== "undefined" && scope.displayCheckboxes === true) {
                    scope.areCheckboxesDisplayed = true;
                }
                else {
                    scope.areCheckboxesDisplayed = false;
                }

            },
            controller: function($scope) {

                $scope.areCheckboxesDisplayed = false;
                
                $scope.getRootNodes = function() {
                    return treeViewService.getRootNodes();
                }
                
                $scope.getChildNodes = function(node) {
                    return treeViewService.getChildNodes(node);
                }

                $scope.getNodeIcon = function(node) {
                    return treeViewService.getNodeIcon(node);
                }

                $scope.selectNode = function(node) {
                    if ($scope.areCheckboxesDisplayed === false) {
                        treeViewService.toggleNodeSelection(node);
                    } else {
                        $scope.toggleCheckbox(node);
                    }
                }
                
                $scope.toggleCheckbox = function(node) {
                    treeViewService.toggleCheckbox(node);
                }

                $scope.getCheckboxIcon = function(node) {
                    return treeViewService.getCheckboxIcon(node);
                }

            }
        }
    });
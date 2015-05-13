angular.module('gg.directives')
    .directive('ggTreeView', function() {
        return {
            restrict: "E",
            scope: {
                treeData: "="
            },
            templateUrl: "ggTreeView.html",
            controller: function($scope) {
                $scope.getNodeIcon = function(node) {
                    if (typeof node.isExpanded !== "undefined" && node.isExpanded === true) {
                        return "fa-caret-down";
                    }
                    else if (!hasChildNodes(node)) {
                        return "";
                    }
                    else {
                        return "fa-caret-right";
                    }
                }

                hasChildNodes = function(node) {
                    if (typeof node.childNodes === "undefined") {
                        return false;
                    }
                    else if (node.childNodes.length > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }

                $scope.toggleNodeSelection = function(node) {
                    $scope.deselectAllNodes($scope.treeData);
                    node.isSelected = !node.isSelected;
                }
                
                $scope.deselectAllNodes = function(nodes) {
                    $.each(nodes, function() {
                        if (typeof this.childNodes !== 'undefined' && this.childNodes.length > 0) {
                            $scope.deselectAllNodes(this.childNodes);
                        }
                        this.isSelected = false;
                    });
                }

            }
        }
    });
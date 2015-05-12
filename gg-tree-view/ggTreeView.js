angular.module('gg.directives')
    .directive('ggTreeView', function() {
        return {
            restrict: "E",
            scope: {
                treeData: "="
            },
            templateUrl: "ggTreeView.html",
            link: function(scope, element, attributes) {

            }
        }
    })
    .directive('ggTreeViewNode', function($compile) {
        return {
            restrict: "E",
            scope: {
                node: "="
            },
            templateUrl: "ggTreeViewNode.html",
            compile: function(tElement, tAttr) {
                var contents = tElement.contents().remove();
                var compiledContents;
                return function(scope, iElement, iAttr) {
                    if (!compiledContents) {
                        compiledContents = $compile(contents);
                    }
                    compiledContents(scope, function(clone, scope) {
                        iElement.append(clone);
                    });
                };
            },
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
                    } else if (node.childNodes.length > 0) {
                        return true;
                    } else {
                        return false;
                    }
                }
                
                $scope.toggleNodeSelection = function(node) {
                    console.log("selected...");
                    node.isSelected = !node.isSelected;
                }
            }
        }
    });
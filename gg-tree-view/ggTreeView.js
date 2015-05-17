angular.module('gg.directives')
    .directive('ggTreeView', function() {
        return {
            restrict: "E",
            scope: {
                treeData: "=",
                displayCheckboxes: "="
            },
            templateUrl: "ggTreeView.html",
            link: function(scope, element, attributes) {

                // Determine if we're going to display checkboxes or not
                if (scope.displayCheckboxes !== "undefined" && scope.displayCheckboxes === true) {
                    console.log("yes");
                    scope.areCheckboxesDisplayed = true;
                }
                else {
                    scope.areCheckboxesDisplayed = false;
                    console.log("no");
                }

            },
            controller: function($scope) {

                //var getStateOfChildNodes;

                $scope.areCheckboxesDisplayed = false;

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
                        if (hasChildNodes(this)) {
                            $scope.deselectAllNodes(this.childNodes);
                        }
                        this.isSelected = false;
                    });
                }
                
                
                $scope.toggleCheckbox = function(node) {
                    // if (hasChildNodes(node)) {
                    //     var stateOfDescendantNodes = getStateOfDescendantNodes(node);
                    //     console.log(stateOfDescendantNodes);
                    //     if (stateOfDescendantNodes === "none") {
                    //         node.isChecked = true;
                    //         checkAllDescendantNodes(node);
                    //     }
                    //     else if (stateOfDescendantNodes === "mixed") {
                    //         node.isChecked = false;
                    //         uncheckAllDescendantNodes(node);
                    //     }
                    //     else {
                    //         node.isChecked = false;
                    //         uncheckAllDescendantNodes(node);
                    //     }
                    // }
                    // else {
                        node.isChecked = !node.isChecked;
                    // }
                }

                $scope.getCheckboxIcon = function(node) {
                    // // If it has children, check the state of them
                    // if (hasChildNodes(node)) {
                    //     var stateOfDescendantNodes = getStateOfDescendantNodes(node);
                    //     if (stateOfDescendantNodes === "none") {
                    //         return "fa-circle-o";
                    //     }
                    //     else if (stateOfDescendantNodes === "mixed") {
                    //         return "fa-dot-circle-o";
                    //     }
                    //     else {
                    //         return "fa-check-circle-o";
                    //     }
                    // }
                    // else {
                        if (node.isChecked === true) {
                            return "fa-check-circle-o";
                        }
                        else {
                            return "fa-circle-o";
                        }
                    // }
                }

                // var getStateOfDescendantNodes = function(node) {
                //     var totalNumberOfDescendantNodes = getTotalNumberOfDescendantNodes(node);
                //     var totalNumberOfDescendantNodesChecked = getTotalNumberOfDescendantNodesChecked(node);
                    
                //     // console.log("Name", node.displayText);
                //     // console.log("totalNumberOfDescendantNodes",totalNumberOfDescendantNodes);
                //     // console.log("totalNumberOfDescendantNodesChecked",totalNumberOfDescendantNodesChecked);

                //     if (totalNumberOfDescendantNodesChecked === 0) {
                //         return "none";
                //     }
                //     else if (totalNumberOfDescendantNodesChecked > 0 && totalNumberOfDescendantNodesChecked < totalNumberOfDescendantNodes) {
                //         return "mixed";
                //     }
                //     else {
                //         return "all";
                //     }
                // }

                // var getTotalNumberOfDescendantNodes = function(node) {
                //     var total = 0;
                //     $.each(node.childNodes, function() {
                //         if (hasChildNodes(this)) {
                //             total += getTotalNumberOfDescendantNodes(this);
                //         }
                //         total++;
                //     });
                //     return total;
                // }

                // var getTotalNumberOfDescendantNodesChecked = function(node) {
                //     var total = 0;
                //     $.each(node.childNodes, function() {
                //         if (hasChildNodes(this)) {
                //             total += getTotalNumberOfDescendantNodesChecked(this);
                //         }
                //         if (this.isChecked === true) {
                //             total++;
                //         }
                //     });
                //     return total;
                // }


                // var checkAllDescendantNodes = function(node) {
                //     $.each(node.childNodes, function() {
                //         if (hasChildNodes(this)) {
                //             checkAllDescendantNodes(this);
                //         }
                //         this.isChecked = true;
                //     })
                // }

                // var uncheckAllDescendantNodes = function(node) {
                //     $.each(node.childNodes, function() {
                //         if (hasChildNodes(this)) {
                //             uncheckAllDescendantNodes(this);
                //         }
                //         this.isChecked = false;
                //     })
                // }

                // var hasChildNodes = function(node) {
                //     return (typeof node.childNodes !== "undefined" && node.childNodes.length > 0)
                // }

            }
        }
    });
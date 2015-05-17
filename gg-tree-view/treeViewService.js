angular.module('gg.directives')
    .service("treeViewService", function() {
        
        var self = this;

        var icons = {
            expandedNode: "fa-caret-down",
            collapsedNode: "fa-caret-right",
            checkedCheckbox: "fa-check-circle-o",
            uncheckedCheckbox: "fa-circle-o"
        };
        
        var checkedStates = {
            checked: "checked",
            mixed: "mixed",
            unchecked: "unchecked"
        }

        var allNodes;

        this.init = function(treeNodes) {
            allNodes = treeNodes;
        }

        this.getRootNodes = function() {
            var rootNodes = [];
            $.each(allNodes, function() {
                if (this.pid === null) {
                    rootNodes.push(this);
                }
            });
            return rootNodes;
        }

        this.getChildNodes = function(parentNode) {
            var childNodes = [];
            $.each(allNodes, function() {
                if (typeof this.pid !== "undefined" && this.pid === parentNode.id) {
                    childNodes.push(this);
                }
            })
            return childNodes;
        }

        this.getNodeIcon = function(node) {
            if (isNodeExpanded(node)) {
                return icons.expandedNode;
            }
            else if (!hasChildNodes(node)) {
                return "";
            }
            else {
                return icons.collapsedNode;
            }
        }

        var isNodeExpanded = function(node) {
            return (typeof node.isExpanded !== "undefined" && node.isExpanded === true);
        }

        this.toggleNodeSelection = function(node) {
            deselectAllNodes(allNodes);
            node.isSelected = !node.isSelected;
        }

        var deselectAllNodes = function(nodes) {
            $.each(allNodes,function() {
                this.isSelected = false;
            });
        }

        var hasChildNodes = function(parentNode) {
            var children = 0;
            $.each(allNodes, function() {
                if (typeof this.pid !== "undefined" && this.pid === parentNode.id) {
                    children++;
                }
            })
            return (children > 0);
        }

        this.toggleCheckbox = function(node) {
            var newCheckedState = toggleCheckedState(node);
            // Toggle the current node
            node.checkedState = newCheckedState;
            // Check if it has any children. If it does, set them accordingly.
            if (hasChildNodes(node)) {
                this.applyStateToChildNodes(node,newCheckedState);
            }
            // Check if it updates the state of it's parent. If so, it should adjust it's state accordingly.
            if (typeof node.pid !== "undefined" && node.pid !== null) {
                //updateStateOfParent(node,newCheckedState);
            }
        }
        
        var toggleCheckedState = function(node) {
            if (node.checkedState === checkedStates.checked) {
                return node.checkedState = checkedStates.unchecked;
            } else if (typeof node.checkedState === "undefined" || node.checkedState === "" || node.checkedState === checkedStates.unchecked) {
                return node.checkedState = checkedStates.checked;
            }
        }
        
        this.applyStateToChildNodes = function(parentNode,newCheckedState) {
            $.each(this.getChildNodes(parentNode), function() {
                if (hasChildNodes(this)) {
                    self.applyStateToChildNodes(this,newCheckedState);
                }
                this.checkedState = newCheckedState;
            })
        }


        this.getCheckboxIcon = function(node) {
            if (node.checkedState === checkedStates.checked) {
                return icons.checkedCheckbox;
            }
            else {
                return icons.uncheckedCheckbox;
            }
        }

    });
angular.module('gg.directives')
    .service("treeViewService", function() {

        var icons = {
            expandedNode: "fa-caret-down",
            collapsedNode: "fa-caret-right",
            checkedCheckbox: "fa-check-circle-o",
            uncheckedCheckbox: "fa-circle-o"
        };

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
            node.isChecked = !node.isChecked;
        }

        this.getCheckboxIcon = function(node) {
            if (node.isChecked === true) {
                return icons.checkedCheckbox;
            }
            else {
                return icons.uncheckedCheckbox;
            }
        }

    });
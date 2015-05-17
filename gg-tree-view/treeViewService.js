angular.module('gg.directives')
    .service("treeViewService", function() {
        
        var icons = { 
            expandedNode: "fa-caret-down"
            , collapsedNode: "fa-caret-right" 
            , checkedCheckbox: "fa-check-circle-o"
            , uncheckedCheckbox: "fa-circle-o"
        };
        
        var tree;

        this.init = function(inTree) {
            tree = inTree;
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
            deselectAllNodes(tree);
            node.isSelected = !node.isSelected;
        }

        var deselectAllNodes = function(nodes) {
            $.each(nodes, function() {
                if (hasChildNodes(this)) {
                    deselectAllNodes(this.childNodes);
                }
                this.isSelected = false;
            });
        }

        var hasChildNodes = function(node) {
            return (typeof node.childNodes !== "undefined" && node.childNodes.length > 0)
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
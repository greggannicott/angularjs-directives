angular.module('gg.directives')
    .service("treeViewService", function() {

        var tree;

        this.init = function(inTree) {
            tree = inTree;
        }

        this.getNodeIcon = function(node) {
            if (isNodeExpanded(node)) {
                return "fa-caret-down";
            }
            else if (!hasChildNodes(node)) {
                return "";
            }
            else {
                return "fa-caret-right";
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
                return "fa-check-circle-o";
            }
            else {
                return "fa-circle-o";
            }
        }

    });
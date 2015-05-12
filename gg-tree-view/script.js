angular.module('gg').controller('demoController', function($scope) {
    $scope.treeData = [
        {"id": "1", "displayText": "Entry 1", "isExpanded":true, "childNodes":
            [
            {"id": "1.1", "displayText": "Entry 1.1"},
            {"id": "1.1", "displayText": "Entry 1.1", "isExpanded":true, "childNodes": [
                {"id": "1.1.1", "displayText": "Entry 1.1.1"},
                {"id": "1.1.2", "displayText": "Entry 1.1.2"}
                ]
            },
            {"id": "1.1", "displayText": "Entry 1.1"},
            ]
        },
        {"id": "2", "displayText": "Entry 2"},
        {"id": "3", "displayText": "Entry 3", "childNodes": [
            {"id": "3.1", "displayText": "Entry 3.1"}
            ]
        },
        {"id": "4", "displayText": "Entry 4"},
        {"id": "5", "displayText": "Entry 5"}
        ];
});
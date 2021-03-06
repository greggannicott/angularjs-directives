angular.module('gg').controller('demoController', function($scope) {
    // $scope.treeData = [
    //     {"id": "1", "displayText": "Entry 1", "isExpanded":true, "childNodes":
    //         [
    //         {"id": "1.1", "displayText": "Entry 1.1", "isChecked": true },
    //         {"id": "1.2", "displayText": "Entry 1.2", "isExpanded": true, "isSelected": true, "childNodes": [
    //             {"id": "1.2.1", "displayText": "Entry 1.2.1", "childNodes": [
    //                 {"id": "1.2.1.1", "displayText": "Entry 1.2.1.1"},
    //                 {"id": "1.2.2.2", "displayText": "Entry 1.2.1.2", "childNodes": [
    //                     {"id": "1.2.2.1", "displayText": "Entry 1.2.2.1"}
    //                     ]
    //                 },
    //                 ]
    //             },
    //             {"id": "1.2.2", "displayText": "Entry 1.2.2"}
    //             ]
    //         },
    //         {"id": "1.3", "displayText": "Entry 1.3"},
    //         {"id": "1.4", "displayText": "Entry 1.4"},
    //         ]
    //     },
    //     // {"id": "2", "displayText": "Entry 2"},
    //     // {"id": "3", "displayText": "Entry 3", "childNodes": [
    //     //     {"id": "3.1", "displayText": "Entry 3.1"}
    //     //     ]
    //     // },
    //     // {"id": "4", "displayText": "Entry 4"},
    //     // {"id": "5", "displayText": "Entry 5"}
    //     ];
        
    $scope.treeData = [
        {"id": "1", "displayText": "Entry 1", "checkedState": "unchecked", "isExpanded": true, pid: null},
        {"id": "2", "displayText": "Entry 2", "isSelected": false, pid: null},
        {"id": "3", "displayText": "Entry 3", pid: null},
        {"id": "4", "displayText": "Entry 4", "isExpanded": true, pid: "1"},
        {"id": "5", "displayText": "Entry 5", "checkedState": "checked", pid: "4"},
        {"id": "6", "displayText": "Entry 6", "checkedState": "checked", pid: "4"},
        {"id": "7", "displayText": "Entry 7", "checkedState": "checked", pid: "6"},
        {"id": "8", "displayText": "Entry 8", "checkedState": "checked", pid: "6"},
        {"id": "9", "displayText": "Entry 9", "checkedState": "unchecked", pid: "6"},
        {"id": "10", "displayText": "Entry 10", "checkedState": "checked", pid: "6"},
        {"id": "11", "displayText": "Entry 11", "checkedState": "checked", pid: "6"},
        {"id": "12", "displayText": "Entry 12", "checkedState": "checked", pid: "11"}
    ];
        
    // $scope.treeData = [
    //     {"id": "0", "displayText": "Select All", "isExpanded": true, pid: null},
    //     {"id": "1", "displayText": "Parent 1", "checkedState": "unchecked", "isExpanded": true, pid: "0"},
    //     {"id": "2", "displayText": "Parent 2", "isSelected": false, pid: "0"},
    //     {"id": "3", "displayText": "Parent 3", pid: "0"},
    //     {"id": "4", "displayText": "Parent 4", "isExpanded": true, pid: "0"},
    //     {"id": "5", "displayText": "Child 1", "checkedState": "checked", pid: "1"},
    //     {"id": "6", "displayText": "Child 2", "checkedState": "checked", pid: "1"},
    //     {"id": "7", "displayText": "Child 3", "checkedState": "checked", pid: "1"},
    //     {"id": "8", "displayText": "Child 1", "checkedState": "checked", pid: "2"},
    //     {"id": "9", "displayText": "Child 2", "checkedState": "checked", pid: "2"},
    //     {"id": "10", "displayText": "Child 3", "checkedState": "checked", pid: "2"},
    //     {"id": "11", "displayText": "Child 1", "checkedState": "checked", pid: "3"},
    //     {"id": "12", "displayText": "Child 2", "checkedState": "checked", pid: "3"},
    //     {"id": "13", "displayText": "Child 3", "checkedState": "checked", pid: "3"}
    // ];
});
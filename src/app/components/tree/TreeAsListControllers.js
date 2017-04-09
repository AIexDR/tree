(function() {
    'use strict';
    var controllers = window.angular.module('TreeAsList.controllers', []);
    
    controllers.controller('TreeAsListController', ['$rootScope',  '$scope', 'ListElement', 'DataConvertor', 'LocalStorageService', function($rootScope, $scope, ListElement, DataConvertor, LocalStorageService) {
        $scope.tree = LocalStorageService.tree;

/*      $scope.tree = [{"name":"Music","nodes":[{"name":"Pop","nodes":[]},{"name":"Electronic","nodes":[]},{"name":"Instrumental","nodes":[]},{"name":"Rock","nodes":[{"name":"Metal","nodes":[{"name":"Heavy Metal","nodes":[]}]}]},{"name":"Classic","nodes":[]}]}];*/

        $scope.treeAsList = DataConvertor.convertTreeToArray($scope.tree);

/*      $scope.treeAsList = [
            {id: 0, name: 'Root', level: 0, parent: null, hasChild: true, expanded: true}, 
            {id: 1, name: 'Child 1', level: 1, parent: 0, hasChild: true, expanded: true},
            {id: 2, name: 'Child 1-1', level: 2, parent: 1, hasChild: false, expanded: true}, 
            {id: 3, name: 'Child 2', level: 1, parent: 0, hasChild: false, expanded: true}];*/

        $scope.rename = function(element) {
            var newName = prompt('Enter new node name', element.name);
            if (newName === null) {
                return;
            }
            element.name = newName;
            LocalStorageService.tree = DataConvertor.convertArrayToTree($scope.treeAsList);
            
        };

        $scope.addChild = function(element) {
            var treeAsList = $scope.treeAsList;
            var index = treeAsList.indexOf(element);

            var newName = prompt('Enter new node name', 'Node');
            if (newName === null) {
                return;
            }

            var arrElement = new ListElement(newName, element.level + 1, element);
            
            var childrenCount = 0;
            for (var i = index + 1; i < treeAsList.length; i++) {
                if (treeAsList[i].level > element.level) {
                    childrenCount++;
                } else {
                    break;
                }
            }
            var newChildIndex = $scope.treeAsList.indexOf(element) + childrenCount + 1;
            $scope.treeAsList.splice(newChildIndex, 0, arrElement);
            element.hasChild = true;
            LocalStorageService.tree = DataConvertor.convertArrayToTree($scope.treeAsList);
        };

        $scope.remove = function(element) {
            var treeAsList = $scope.treeAsList;
            var index = treeAsList.indexOf(element);
     
            // remove element's children
            var childrenCount = 0;
            for (var i = index + 1; i < treeAsList.length; i++) {
                if (treeAsList[i].level > element.level) {
                    childrenCount++;
                } else {
                    break;
                }
            }
            treeAsList.splice(index + 1, childrenCount);

            // remove element
            if (index > -1) {
                treeAsList.splice(index, 1);
                //LocalStorageService.tree = $scope.tree;
            }

            var parentIndex = treeAsList.indexOf(element.parent);
            var parentChildrenCount = 0;
            for (var j = parentIndex + 1; j < treeAsList.length; j++) {
                if (treeAsList[j].parent === element.parent) {
                    parentChildrenCount++;
                } else {
                    break;
                }
            }
            if (parentChildrenCount > 0) {
                element.parent.hasChild = true;
            } else {
                element.parent.hasChild = false;
            }
            LocalStorageService.tree = DataConvertor.convertArrayToTree($scope.treeAsList);
        };

        $scope.toggle = function(element) {
            element.expanded = !element.expanded;
            var treeAsList = $scope.treeAsList;
            var index = treeAsList.indexOf(element);
            for (var i = index + 1; i < treeAsList.length; i++) {
                if (treeAsList[i].level > element.level) {
                    treeAsList[i].hidden = !element.expanded;
                } else {
                    break;
                }
            }
        };

        $scope.getNumber = function(num) {
            return new Array(num);   
        };

    }]);
})();

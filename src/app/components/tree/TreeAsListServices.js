(function() {
    'use strict';
    var services = window.angular.module('TreeAsList.services', []);
    services.factory('ListElement', function(){
        var index = 0;
/*        class ListElement {
            constructor(name, level, parent) {
                this.id = index++;
                this.name = name;
                this.level = level;
                this.parent = parent;
                this.hasChild = false;
                this.expanded = true;
            }
        }*/
        function ListElement(name, level, parent) {
                this.id = index++;
                this.name = name;
                this.level = level;
                this.parent = parent;
                this.hasChild = false;
                this.expanded = true;
        }
        return ListElement;
    });

    services.factory('DataConvertor', ['ListElement', function(ListElement){
        var index = 0;
        function convertTreeToArray(treeArr) {
            var tree = treeArr[0];
            var arr = [];
            function addNextElement(element, level, parent) {
                var arrElement = new ListElement(element.name, level, parent);
                if (element.nodes.length) {
                    arrElement.hasChild = true;
                }
                arr.push(arrElement);
                for (var i=0; i < element.nodes.length; i++) {
                    addNextElement(element.nodes[i], level+1, arrElement);
                }
            }
            if (typeof tree === "object" && tree !== null) {
                addNextElement(tree, 0, null);
            }
            return arr;
        }

        function convertArrayToTree(arr) {
            var tree = [];
            var helpMap = {};

            for (var i=0; i < arr.length; i++) {
                var arrElement = arr[i];
                var treeElement = {name: arrElement.name, nodes: []};
                helpMap[arrElement.id] = treeElement;
                if (arrElement.parent) {
                    helpMap[arrElement.parent.id].nodes.push(treeElement);
                } else {
                    tree.push(treeElement);
                }
            }
            return tree;
        }

        return {
            convertTreeToArray: convertTreeToArray,
            convertArrayToTree: convertArrayToTree
        };

    }]);
})();

(function() {
    'use strict';
    var services = window.angular.module('StorageServices', []);
    services.factory('LocalStorageService', function () {

        var defaultTree = [{name: "Node", expanded: true, nodes: []}];

        return {
            get tree() {
                return JSON.parse(window.localStorage.getItem('tree')) || defaultTree;
            },
            set tree(tree) {
                window.localStorage.setItem('tree', JSON.stringify(tree));
            }
        };
    });
})();


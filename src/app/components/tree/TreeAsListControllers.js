(function() {
    'use strict';
    var controllers = window.angular.module('TreeAsList.controllers', []);
	
	controllers.controller('TreeAsListController', ['$scope', 'Node', 'LocalStorageService', function($scope, Node, LocalStorageService) {
		//$scope.treeAsList = LocalStorageService.treeAsList;
		$scope.treeAsList = [
			{id: 0, name: 'Root', level: 0, parent: null, hasChild: true, expanded: true}, 
			{id: 1, name: 'Child 1', level: 1, parent: 0, hasChild: true, expanded: true},
			{id: 2, name: 'Child 1-1', level: 2, parent: 1, hasChild: false, expanded: true}, 
			{id: 3, name: 'Child 2', level: 1, parent: 0, hasChild: false, expanded: true}];
	}]);

	controllers.controller('ListElementController', ['$scope', 'Node', 'LocalStorageService', function($scope, Node, LocalStorageService) {
		$scope.getNumber = function(num) {
			return new Array(num);   
		};
		var tree = LocalStorageService.tree;
	}]);

})();

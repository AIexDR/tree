(function() {
	
    'use strict';
    var controllers = window.angular.module('Tree.controllers', []);
	
	controllers.controller('TreeController', ['$scope', 'Node', 'LocalStorageService', function($scope, Node, LocalStorageService) {
		$scope.delete = function(data) {
			data.nodes = [];
		};
		$scope.add = function(data) {
			var newName = prompt('Enter new node name', 'Node');
			if (newName === null) {
				return;
			}
			data.nodes.push(new Node(newName));
			LocalStorageService.tree = $scope.tree;
		};
		
		$scope.rename = function(data) {
			var newName = prompt('Enter new node name', data.name);
			if (newName === null) {
				return;
			}
			data.name = newName;
			LocalStorageService.tree = $scope.tree;
		};

		$scope.toggle = function(data) {
			data.expanded = !data.expanded;
		};
		
		$scope.tree = LocalStorageService.tree;
	}]);
	
	controllers.controller('NodeController', ['$scope', 'LocalStorageService', function($scope, LocalStorageService) {

		$scope.remove = function(data) {
			$scope.$emit('removeChild', data);
			console.log($scope.$parent);
		};
		
		$scope.$on('removeChild', function($event, node){
			var index = $scope.data.nodes.indexOf(node);
			if (index > -1) {
				$scope.data.nodes.splice(index, 1);
				LocalStorageService.tree = $scope.tree;
			}
			$event.stopPropagation();
		});
	}]);
})();

(function() {
    'use strict';
    var tree = window.angular.module('Tree.services', []);
	tree.factory('Node', function(){
/*		class Node {
			constructor(name) {
				this.name = name;
				this.expanded = true;
				this.nodes = [];
			}
		}
*/		
		function Node(name) {
			this.name = name;
			this.expanded = true;
			this.nodes = [];
		}
		return Node;
	});
})();

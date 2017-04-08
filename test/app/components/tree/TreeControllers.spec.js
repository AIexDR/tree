(function() {

	'use strict';
		
	describe('TreeControllers', function() {

		beforeEach(module('myApp'));
		var $rootScope, $controller;
		
		describe('NodeController', function() {
			beforeEach(inject(function(_$controller_, _$rootScope_){
				$controller = _$controller_;
				$rootScope = _$rootScope_;
			}));

			it('should remove child nodes', function() {
			  var $scope = $rootScope.$new();;
			  spyOn($scope, '$emit');
			  var controller = $controller('NodeController', { $scope: $scope });
			  $scope.data = {nodes: [1, 2]};
			  $scope.remove($scope.data);
			  expect($scope.$emit).toHaveBeenCalledWith('removeChild', $scope.data);
			});
		});
	});
})();

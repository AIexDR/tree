(function() {

    'use strict';
        
    describe('TreeControllers', function() {

        beforeEach(module('myApp'));
        var $rootScope, $controller;

        describe('TreeController', function() {
            beforeEach(inject(function(_$controller_, _$rootScope_){
                $controller = _$controller_;
                $rootScope = _$rootScope_;
            }));

            it('should delete child nodes', function() {
                var $scope = $rootScope.$new();;
                var controller = $controller('TreeController', { $scope: $scope });
                $scope.data = {nodes: [1, 2]};
                $scope.delete($scope.data);
                expect($scope.data.nodes).toEqual([]);
            });

            it('should add child node', function() {
                var $scope = $rootScope.$new();
                var controller = $controller('TreeController', { $scope: $scope });
                $scope.data = {nodes: []};
                spyOn(window, 'prompt');
                $scope.add($scope.data);
                expect(window.prompt).toHaveBeenCalled();
            });

            it('should rename node', function() {
                var $scope = $rootScope.$new();
                var controller = $controller('TreeController', { $scope: $scope });
                $scope.data = {name: 'Root', nodes: []};
                spyOn(window, 'prompt');
                $scope.rename($scope.data);
                expect(window.prompt).toHaveBeenCalled();
            });
        });
        
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

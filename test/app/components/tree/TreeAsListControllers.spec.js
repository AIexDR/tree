(function() {

    'use strict';
        
    describe('TreeAsListControllers', function() {

        beforeEach(module('myApp'));
        var $rootScope, $controller, DataConvertorMock, LocalStorageServiceMock;
        
        describe('TreeAsListController', function() {
            beforeEach(function(){
                DataConvertorMock = {
                    convertTreeToArray: function(){
                        return [
                            {id: 0, name: 'Root', level: 0, parent: null, hasChild: true, expanded: true}, 
                            {id: 1, name: 'Child 1', level: 1, parent: 0, hasChild: true, expanded: true},
                            {id: 2, name: 'Child 1-1', level: 2, parent: 1, hasChild: false, expanded: true}, 
                            {id: 3, name: 'Child 2', level: 1, parent: 0, hasChild: false, expanded: true}];
                    },
                    convertArrayToTree: function(){
                        return 'test';
                    }
                };
                LocalStorageServiceMock = {tree: {}};

                inject(function(_$controller_, _$rootScope_){
                    $controller = _$controller_;
                    $rootScope = _$rootScope_;
                });
            });

            it('should remove child nodes', function() {
                var $scope = $rootScope.$new();
                var controller = $controller('TreeAsListController', 
                { 
                    $scope: $scope,
                    DataConvertor: DataConvertorMock,
                    LocalStorageService: LocalStorageServiceMock
                });
                var element = {name: 'name', nodes: [], parent: {hasChild: true}};
                $scope.remove(element);
                expect(element.parent.hasChild).toEqual(false);
            });

            it('should rename node', function() {
                var $scope = $rootScope.$new();
                var controller = $controller('TreeAsListController', { $scope: $scope });
                $scope.data = {name: 'Root', nodes: []};
                spyOn(window, 'prompt');
                $scope.rename($scope.data);
                expect(window.prompt).toHaveBeenCalled();
            });

        });
    });
})();
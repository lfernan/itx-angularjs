'use strict';

describe('Controller: CreateEmployeeCtrl', function () {

  // load the controller's module
  beforeEach(module('itxApp'));

  var CreateEmployeeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateEmployeeCtrl = $controller('CreateEmployeeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateEmployeeCtrl.awesomeThings.length).toBe(3);
  });
});

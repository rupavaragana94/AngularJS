//creation of angular module
var app = angular.module('NestedCtrlApp', []);

//creation of Parent controller
app.controller('ParentCtrl',function ($scope) {
    $scope.test = "";
    //$scope
});
//creation of child controller
app.controller('ChildCtrl',function ($scope) {
    $scope.test = "";
});

//creation of angular module
var app = angular.module('NestedCtrlAsApp',[]);
//creation of Parent controller
app.controller('ParentAsCtrl',function ($scope) {
    //$scope.
    this.test = "";
});
//creation of child controller
app.controller('ChildAsCtrl',function ($scope) {
    this.test = "";
});
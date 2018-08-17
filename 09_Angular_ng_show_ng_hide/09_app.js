//creation of module
var app = angular.module('HobbiesApp',[]);
//creation of controller
app.controller('HobbiesAppCtrl',function () {
    this.eating = false ;
    this.coding = false;
    this.sleeping = false;
});
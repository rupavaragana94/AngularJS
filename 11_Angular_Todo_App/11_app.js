//creation of module
var app = angular.module('GroceryApp',[]);

//creation of controller
app.controller('GroceryAppCtrl',function () {
    this.item = '';
    this.groceryList = [];
    this.addItem = function (item) {
        //this.groceryList.push(this.item);

        if (this.item === ''){
            alert("Boss!! plz enter a value");
            this.item = '';
        }
        if (!(this.groceryList.indexOf(item) === -1)){
            alert("Boss !!  The "+ item + "Already exits");
            this.item = '';
        }
        else{
            this.groceryList.push(item);
            this.item = '';
        }
    };
});

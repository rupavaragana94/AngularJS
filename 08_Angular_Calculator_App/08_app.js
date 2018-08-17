//creating a module * //creating a controller in one statement
var app = angular.module('CalculatorApp',[]).controller('CalculatorAppCtrl',function () {
    this.operator = '+';
    this.firstNumber = '';
    this.secondNumber = '';
    this.result = 'RESULT';
    this.changeOperator = function (opr) {
      this.operator = opr.trim();
    };

    this.fetchResults = function () {
        this.firstNumber = parseFloat(this.firstNumber);
        this.secondNumber = parseFloat(this.secondNumber);
        switch (this.operator) {
            case '+':
                this.result = this.firstNumber + this.secondNumber ;
                break;
            case '-':
                this.result = this.firstNumber - this.secondNumber ;
                break;
            case '/':
                this.result = this.firstNumber / this.secondNumber ;
                break;
            case '*':
                this.result = this.firstNumber * this.secondNumber ;
                break;
            default :
                this.result = "";
                break;
        }
    };
    this.clearAll
});



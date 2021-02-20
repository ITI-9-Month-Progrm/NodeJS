var customModule = require('../Task3/moduls/calculation_methods.js');
var numbers = process.argv;
switch(numbers[3]){
    case '+' :{
        let res = customModule.sum(parseInt(numbers[2]),parseInt(numbers[4]));
        console.log(res);
        break;
    }
    case '-' :{
        let res = customModule.subtract(parseInt(numbers[2]),parseInt(numbers[4]));
        console.log(res);
        break;
    }
    case '*' :{
        let res = customModule.multiply(parseInt(numbers[2]),parseInt(numbers[4]));
        console.log(res);
        break;
    }
    case '/' :{
        let res = customModule.divide(parseInt(numbers[2]),parseInt(numbers[4]));
        console.log(res);
        break;
    }
    default : {
        console.log("not found any operation")
    }
}
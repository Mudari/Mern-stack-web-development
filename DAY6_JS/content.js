// function temp(){
//     let car = "bmw";
//     console.log(car);
// }
// temp();

// const { CancellationToken } = require("mongodb");

let a = 5;
let b = 6;
if(a == b) {
    console.log("true");
} else{
    console.log("false");
}

function sum(a , b){
    console.log(a + b);
}
sum(2 , 3);


// 1. function declarations using function method
      function sum(a , b) {
        console.log(a + b);
      };

    //   funcation Call
    
      sum(5 , 6);


// 2. function assignment ( with named function)

const add1 = function(a,b) {
    console.log(a + b);
};

add1(6 , 5); //function call

//3. function assignment (with anonymous function)

const sum1 = function( a, b){
    console.log(a + b);
};

sum1(4 , 2);

//4. function assignment (with arrow function - ES6-2015)
 
const num1 = (a , b) => {
    console.log(a + b);
};

num1(7 , 8);


//switch - case

// const userName  = "sai";
// switch(userName) {
//     case "sai": {
// console.log("hello", userName);
// break;
//     }
//     case "ram": {
//         console.log("where is", userName);
//         break;
//     }
//     case "gopi": {
//         console.log("good",userName);
//         break;
//     }
//     default: {
//         console.log("who are you?");
//     }
// }


const cars = "bmw";
switch(cars) {
    case "bmw" :{
        console.log("nice", cars);
    }
    case "oddi": {
        console.log("good", cars);
    }
    case "toyato": {
        console.log("big", cars);
    }
    default : {
        console.log("buy one car");
    }
}


// ****************************** object ********************************************

const obj = {
    fullName : "karthik sai",
    lastName : "mudari",
    age : 20,
    isVerified : true,
    2 : "two",
};
console.log(obj);

console.log(obj.fullName);

obj.city = "delhi"
console.log(obj);



const paint = {
    name :"sai",
    age : 20,
};
console.log(paint);



// **************************** Array ****************************************

const name = [
    "orange",
    "grapes",
    30,
    true,
];
console.log(name);
console.log(name.length);
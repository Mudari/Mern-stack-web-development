console.log(2*5);

var x = 5;
var y = 10;
var z = x + y;
console.log(z);

var city ="delhi";
console.log(city);

// re-assignment is allowed

city = "mumbai";
console.log(city);

//re-declaration is allowed

var city = "goa";
console.log(city);

// scope is function scoped

function abc() {
    var name = 'karthik sai';
    console.log(name);
}
abc();


// ************************** var **********************
//1. re-assignment is allowed
//2.re-declaration is allowed
//3. if you access it before declaration --> (no error) --> it gives undefined
//4. the scope the var variable is "function scoped".


// ************************* let ************

let team = "srh";
console.log(team);

// re-assignment is allowed

team = "kkr";
console.log(team);


{
    let team = "lsg";
    console.log(team);
}

//re-declaration is not-allowed

// let team = "gt";
// console.log(team);

// ************************** let **********************
//1. re-assignment is allowed
//2.re-declaration is not-allowed
//3. if you access it before declaration --> (error) 
//4. the scope the let variable is "Block scoped"

// ***************** const **********************

const car = "bmw";
console.log(car);

// car ="oddi";
// console.log(car);

{
    const car = "range rover";
    console.log(car);
}


// ************************** const **********************
//1. re-assignment is not-allowed
//2.re-declaration is not-allowed
//3. if you access it before declaration --> (error) 
//4. the scope the let variable is "Block scoped"
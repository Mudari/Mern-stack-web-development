const person = {
    fullName : "karthik",
    hobbies : "playing cricket",
    studies : "b-tech",
    place : "telangana",
}
console.log(person);

//delete something in object

delete person.place;

console.log(person);


//add something data in object
person.fullName = "sai";
console.log(person);


let str = "hyd";
let str2 = "hyd";

if(str == str2){
    console.log("yes");
} else{
    console.log("no");
}



const p1 = {
    fullName: "sai",
    age: 30,
    hobbies:["cricket","books","hockey"],
};
const p2 = {...p1};
console.log(p2);


p2.hobbies[1] = "carrom";
console.log(p2);
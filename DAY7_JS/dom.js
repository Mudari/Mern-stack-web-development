// console.log(document);
// console.dir(document);

// ********************* DOM ***************************

// console.dir(document);
const ram = document.getElementById('l1');
console.log(ram);
// console.dir(ram);
ram.style.backgroundColor = "lime";
ram.style.padding = "8px";

//inner html

 ram.innerHTML = "<ul><li>access the courses</li><li>copy right</li></ul>"

 // inner text make text in web browser

 ram.innerText = "<ul><li>access the courses</li><li>copy right</li></ul>"

 const dm = document.getElementsByClassName("parent");
 console.log(dm);

 dm[0].style.border = "2px dashed blue";

 const cm = document.getElementsByClassName("child");
 console.log(cm);

 //change style in css

 cm[0].style.border = "2px dashed yellow";

 // change text in HTML

 cm[0].innerHTML = "<p>helloWorld</p>";

 dm[0].innerText = "karthik sai";



 //********************* DOM:- QUERY-SELECTOR */////////////
 
 const p = document.querySelector("p");
 console.log(p);

//  const parent = document.querySelector(".parent:last-child");
//  console.log(parent);

 const l1 = document.querySelector("#l1");
 console.log(l1);




 //dom:-  create a element

 const child = document.querySelector(".child");
 
 const old = document.createElement("h2");
 old.innerText = "follow me?";
 child.appendChild(old);

 const parent = document.querySelector(".parent");
 
 const nice = document.createElement("h2");
 nice.innerText = "follow me?";
 parent.appendChild(nice);






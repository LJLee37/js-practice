/*
console.log('Im Working. Im JS. Im Beautiul Im worth it');
let temp1 = 1;//variable
const temp2 = 2;//constant
var temp3 = 3;//old_version_variable; don't use
//comments are as same as C, C++
//use const unless it REALLY needs variable.
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", 1, true, temp2]//Array
const nicoInfo = 
{
    name:"Nico",
    age:33,
    gender:"Male",
    favMovies:["신과함께","Lord of the ring"],
    favFood:[{name:"Kimchi",isFatty:false},{name:"Burger",isFatty:true}]
};//Object. JSON == List of Objects?
//JS error won't affect HTML|CSS
console.log(console);
//Programmers, we are lazy
function sayHello(name)
{
    console.log("Hello,", name);
};

sayHello("Nico");
console.log(`Hello ${nicoInfo.name}!`);

const calculator = {
    plus: function(a, b){
        return a + b;
    }
};



console.log(title);

console.errer("Test");
*/
const title = document.getElementById("title");// = document.querySeloctor("#title");
//title.innerHTML = "Hi! From JS"
//title.style.color = "red"
//console.dir(title);
//document.title = "I own you now"
/*
function handleResize(){
	console.log("I have been resized");
}

function handleResize1(event){
	console.log(event);
}

window.addEventListener("resize", handleResize1);
window.addEventListener("resize", handleResize);//IMPORTANT!!
*/

/*
if(condition){
    //block;
}
else{
    //block;
}
*/
// true true;
//let a = 1;
//let b = 1;
//let c = '1';
// (a === b) true; 
// true && true and
// true || true or
//
/*
const age = prompt ("How old are you?");
//stops until prompt is done
console.log(age);
*/
/*

const BASE_COLOR = "rgb(52, 73, 94)"; // color code like #ffffff won't work with if condition.
const OTHER_COLOR = "rgb(127, 140, 141)";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR)
    {
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = OTHER_COLOR;
    //title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", handleClick);
    
}
init();

//Always use MDN if you want to find where the events come from.

function handleOffline(){
    console.log("Bye bye.");
}

function handleOnline(){
    console.log("Welcome Back!");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

*/


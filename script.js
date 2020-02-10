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

const title = document.getElementById("title");

console.log(title);
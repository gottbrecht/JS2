//Function Declaration : //Observe no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
}

//Function Expression
const sub = function (n1,n2) {
    return n1 - n2
}

//Callback example
const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

console.log( add(1,2) ) //3
console.log( add ) //add presents a function
console.log( add(1,2,3) ) ; //3
console.log( add(1) ); //NaN
console.log( cb(3,3,add) ); //Result from the two numbers: 3+3=6
console.log( cb(4,3,sub) ); //-||- 4+3=1
//console.log( cb(3,3,add()));//TypeError: callback is not a function. Failed do to missing/wrong arguments.Failed at runtime
//NOTE : Failed at Runtime,not like Java, at compile time
//console.log( console.log(cb(3,"hh",add)); //SyntaxError: missing )

typeof n1 === "number"
typeof callback === "function"


//This function execute following oprerations:
//It returns the sum of the 2 arguments
function addVersion2(n1, n2, ...rest) { //rest : array
    return n1 +n2 + rest.reduce((acc,cur)=> acc +cur)
}
//This function execute following oprerations:
//It returns the sum of the 2 arguments(n1 and n2)
//After that it uses rest.reduce((acc, cur) => acc + cur , hvor den anvender en reducerings funtion på arrayet 'rest'.
//Reduceringsfunktionen tager to argumenter acc and cur, og akkumulerer værdierne: addV2(1,2,3,4,5,6)
//n1 er 1
// n2 er 2
// rest er [3, 4, 5, 6]

console.log(addVersion2(1,2,3,4,5,6)) //addV2 is not defined - Skal være identisk med addVersion2 funktionen
//= 21


function mul(n1, n2, callback) {
    return n1*n2;
}

console.log( cb())

const names = ["Sigurd","Mogens","Viggoline","Bo","Pil"];

const shortNames = names.filter(name => name.length <= 3);

console.log(shortNames);

//forEach(nameArray.length)
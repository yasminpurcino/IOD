
/*
let name= "Yasmin"
let boolvalue= true
let nullvalue=null
let age

console.log(typeof name)
console.log(typeof boolvalue)
console.log(typeof nullvalue)
console.log(typeof age)

let age= null;
let dob;

console.log(age);
console.log(dob);

if (age) console.log ( age+ "count as true");
else console.log (age+ "count as false");

if (dob) console.log ( dob+ "count as true");
else console.log (dob+ "count as false");
*/



/*  
let falseString= String(false)
console.log(falseString)
console.log(typeof false)
console.log(typeof falseString)
 

function sum( val1, val2)
{
    console.log("sum")
    return val1+ val2
}
result = sum(10,15)
console.log (result)

const sum1 = (a, b) => a + b;
console.log(sum1(1,2)) 
*/


/*

let x= "" - 1 + 0
console.log(x)

"" + 1 + 0 // 10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3"//6
4 + 5 + "px" // 9px
"$" + 4 + 5//$45
"4" - 2 //2
"4px" - 2 //NaN
"  -9  " + 5 // -9 5
"  -9  " - 5 // -14
null + 1 //1
undefined + 1 // NaN
" \t \n" - 2 // -2

*/

/*

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

console.log(+a + + b); // 12




let x= null === +"\n0\n"
console.log(x)


5 > 4 // true
"apple" > "pineapple" // false 
"2" > "12" //true
undefined == null //true
undefined === null // false  - typeof Operator section different 
null == "\n0\n" // false
null === +"\n0\n" // false

if ("0") {
    console.log( 'Hello' );
  }

  // hello 


  let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let result1= (a + b < 4)? 'Below' : 'Over'


const hello = ( who )=> 
console.log("Hello " + who );
const delayHello = delay(hello, 300);
delayHello("world");


  delay = ( who, time)=> {

  } 

  function timeFunction() {
    setTimeout(function(){ alert("word"); }, 300);
   }


   let schedule = {};

   console.log( isEmpty(schedule) ); // true
   
   schedule["8:30"] = "get up";
   
   console.log( isEmpty(schedule) ); // false

   function isEmpty(obj) {
    for (let key in obj) {
      return true;
    }
    return false;
  }



  let employee_obj ={
    "Name": "Yasmin",
     "Age":35  
     
  }  

     
  

  if (employee_obj.number===undefined)
  {
  }else{

    }
  

  console.log ("number" in employee_obj)

  for(let i=0 ; i<0 ; i++)
{
  console.log(i)
}

/*

for ( const propName in employee_obj){
  console.log( propName );
}
*/



/*
const apple = {
  price: 100,
  valueOf() {
  return this.price;
  }
  };
  console.log( apple*3 ); //300

  

  let x= "567.34"
  console.log(parseInt(x))

  let x1= "567.34ab45"
  console.log(parseInt(x1))

  let x2= "56734"
  console.log(parseInt(x2))

  let y= "567.34"
  console.log(parseFloat(y))

  const employeeList = "Names:\n *A\n *B\n *C";
  console.log(employeeList);

  console.log(isNaN(62/2))
  console.log(isFinite(3/3))




let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
      street: 'North 1st street',
      city: 'San Jose',
      state: 'CA',
      country: 'USA'
  }
};

console.log(person)

let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Jane';

copiedPerson.address.street = 'Amphitheatre Parkway'; 
copiedPerson.address.city = 'Mountain View'; 

console.log(copiedPerson);



//shallow cloning means that some values are still connected to the original variable






function ucFirst(str) {
   
  return str[0].toUpperCase() + str.slice(1);  //The slice() method returns selected elements in an array, as a new array. 
}

console.log(ucFirst("john"))




//truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(text, maxlength) {     //dentro dos parenteses coloca o argumento eh o q a funcao precisa passar para executar  
  // Truncate the text
  // Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
  // The result of the function should be the truncated (if needed) string.
  
  // For instance:
  // truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

  // truncate("Hi everyone!", 20) = "Hi everyone!"



  if (text.length<maxlength) { 
    
  } 
  // if ( condition ) {
  //    something happens
  // }

  let truncate = text.slice(0, maxlength - 1) + "..."
  return truncate
   
}
console.log(truncate("What I'd like to tell on this topic is:",15))


console.log(truncate("What I'd like to tell on this topic is:", 150000))


// contar quantos caractries

let x = "What I'd like to tell on this topic is: Something here"

function myAwesomeCountLength(qlqrcoisa){
  return qlqrcoisa.length
}

let xLength = myAwesomeCountLength("This phrase")

console.log(xLength)
// Create a variable called 'myVar' that contains the length of x
let myVar = myAwesomeCountLength(x)

//  Now create a variable called myResult that contains the sum of myVar  and xLength
// And prints it
let myResult= xLength + myVar
console.log(myResult)

//let myAwesomeText = myAwesomeCountLength ("hi puba luba pig lambusa")
let myAwesomeText = "hi puba luba pig lambusa"
// Prints the length of myAwesomeText
let myNewVar = myAwesomeCountLength(myAwesomeText)
 
 console.log(myNewVar) 
 
 // To learn
 // - Variable scopes
 // - Return

*/






/*
let x = myAwesomeText

console.log(x)


// Implement these functions:


// function add(value1, value2) {
//  return value1+value2 
// }
// console.log(add(5,3))


// function subtract(value1, value2) {
// return value1-value2
// }
// console.log(subtract(5,3))


// function  divide(value1, value2) {
//   return value1/value2

// }
// console.log(divide(5,3))


const map = new Map();
map.set("banana","1")
map.set("orange","2")
map.set("apple","3")
map.set("melon","4")
map.set("kiwi","5")

console.log(map);
console.log(map.has("1"))

const priceMap = new Mas ([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
  ["kiwi", 3],

])

//another way to write 

const priceMap = new Map();
priceMap .set("banana", 1)
priceMap .set("orange",2)
priceMap .set("meat",4)
priceMap .set("kiwi",3)

const prices = Object.fromEntries(priceMap.entries ());

console.log(prices);

const car_registration = new Map();
car_registration .set(1,"XBC124")
car_registration.set(2,"AWB123")
car_registration.set(3,"QWE456")
car_registration.set(4,"ZXD345")
car_registration.set(3,"QWE456")

//const car_registration = Object.fromEntries(car_registration.entries ());


car_registration.delete(1)
console.log(car_registration.size);
console.log(car_registration)
console.log(car_registration.keys())
console.log(car_registration.values())
console.log(car_registration.entries())


let guest = "Jane"
let admin = "Pete"
console.log(guest);
console.log(admin);
[guest, admin] = [admin, guest]



const arr = ["John", "Smith"]
const [firstName, surname] = arr;
console.log(firstName); // John
console.log(surname); // Smith


const [name, ,city]= ["John", "Smith", "Auckland"]
console.log(city);


const user = {
  name: "John",
  surname: "B",
  City:"Auckland"  // why is not working and i add 
  age: 30
};
for (const [key, value] of Object.entries(user)) {  //qual a ideia ?
  
  console.log(key+ ":" +value)  // esse no meio o q significa?
  }



  const options = {
    title: "My menu",
    items: ["Item1", "Item2"]
    };
    function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    console.log( `${title} ${width} ${height}` ); // My Menu 200 100
    console.log( items ); // Item1, Item2
    }
  */

// 3 exerc
/*

    const styles= ["Jazz", "Blues"];
    styles.push("Rock-n-Roll")
    console.log(styles)

    let newStyles = styles.indexOf("Blues");

if (newStyles !== -1) {
    styles[newStyles] = "Classic";
}
console.log(styles)

const firstElement = styles.shift()
console.log(styles)

styles.unshift("Rap", "Reggae");
console.log(styles)


//4 exerc 

let str= ["background-color","list-style-image","-webkit-transition" ]

function camelize(str: str) { //'my-short-string'
  let newStr = "";
  let isDash = false;
  //console.log(str);
  //console.log(newStr);

  for (let i = 0; i <str.length; i++)
  {
    var char = str.charAt(i)
    //console.log(char)

    // if synyax
    //  if ( condition ) {
    //      do something
    // }

    if (char == "-"){ 
      isDash = true;
    }
else { 
  if (isDash == true) {
      newStr += char.toUpperCase();
      isDash = false;
  }
  else {
      newStr += char
  }
}    
}
  return newStr
}



  

  // i++ is the same as i = i  + 1
  // repetir  ( comeca;  enquanto   ;  proximo valor)
  // for      (let i = 0; i < X.length; i++) {
  //   // Some logic here
  // }
  // str.charAt(bla)  // Get char from position (in this case bla)
  //.toUpperCase()  //  Converts the chart to uppercase

/*
str.forEach(qqc => {
  console.log(camelize(qqc))
});

console.log(camelize("background-color") == "backgroundColor");
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition'); 


// google for each syntax
//  console.log(camelize(str))















// //  Write a function that adds 4 numbers (calling the add function you wrote)
// function add4 (val1,val2,val3,val4){
//   // // how to get val1 + val2?
//   // let add1 = add(val1, val2)
//   // // how to get val3 + val4?
//   // let add2 = add(val3, val4)
//   // // return both results added
//   // return add(add1, add2)
   
//   // return add(add(val1, val2), add(val3, val4))

// }

// //example of call
// add4(1, 2, 3, 4)   // Should return 10



// truncate("Hi everyone!", 20) = "Hi everyone!"
// truncate("Hi everyone!", 20) = "Hi everyone!"





const now = new Date ();
console.log(typeof now)
console.log (now.toString());

console.log(now.getFullYear());



  const date = new Date("2017-01-26");

  

    //Create Person object (incuding social security number), stringify it, try replacer function

    const employee = {
      name: 'John',
      age: 30,
      ISN: 101010 
      };

      // const room = {
      //  number:23
      //}

      // room.occupiedBy = employee;

      //console.log( JSON.stringify(employee ["name","ISN"]));

   
    console.log(JSON.stringify(employee, function(key, value) {
  
    if( typeof value === 'function') {
    return value.toString();
    }
    console.log(value)
    console.log(typeof value)
    
    if( typeof value === "number" ) {
      console.log("name")
    return ''; // convert number value to empty string
    }
    return value;
    }))

    console.log (JSON.stringify(employee))
   


// RangeError - A number out of range has occurred, for example 1.toPrecision(500). toPrecision basically gives numbers a decimal value, for example 1.000, and a number cannot have 500 of that.
// ReferenceError -  Using a variable that has not been declared
// syntaxError - When evaluating a code with a syntax error
// TypeError - If you use a value that is outside the range of expected types: for example 1.toUpperCase()




    let data="Yasmin"
try{ 
if(data==="") throw new Error("data is empty") 
else console.log(`Hi ${data} how do you do today`) 
} catch(e){     
console.log(e) 
} finally { 
console.log("welcome to the try catch example")
}


      
let data1= "Yasmin"
try{
  if(data1==="") throw new Error("data is empty")
  else console.log(`Hi ${data} how do you do today`)
}
catch(e){
  console.log(e)
} finally {
  if(data1=== String) throw new Error("data is empty")
  console.log(`welcome ${data1}` )
}

let data3 ="Yasmin"
try{ 
if (data3 === "") throw new Error("data is empty")
else console.log(`Hi ${data3} `) }
catch(e){
  console.log(e)
}
finally {
  console.log(`Welcome ${data3}`)
}




console.log("I am Yasmin")
function greeting (){
  console.log("Hello World"); // nao deveria aparecer? mesmo com cleartime
}

console.log ("I am Yasmin1")
const timeoutId = setTimeout(greeting,5000);

clearTimeout(timeoutId);
console.log("I am Yasmin3")

let counter = 2

let timer = setInterval(function() {
  console.log ("I am an asynchronous message");


counter +=1;

if (counter >= 5){
  clearInterval(timer);
}
}, 2000);

console.log("I am a synchronous message")

let promiseValue= new Promise(function(resolve,reject){
  resolve("The promise is resolved Successfully")
  reject(new Error("Something went wrong"))
 // resolve("The promise is resolved Successfully")
});

promiseValue.then(
  (result) =>{
      console.log(result)
  },
  (error) =>{
      console.log(error)
  }
)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

/*


// 9 exerc 

/*
Sum the properties
There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0.
For instance:


//  9 ex 

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries){
  let sum= 0
  for ( let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;     // pq usar esse return 
}


console.log (sumSalaries(salaries))

// 10 ex 
The maximal salary
There is a salaries object:
const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.
If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs


const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries){
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)){
    if (maxSalary < salary) {
      maxName = name;
      maxSalary = salary;
    }
  }
return maxName;

}

console.log (topSalary(salaries));



Filter unique array members
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
For instance:

P.S. Here strings are used, but can be values of any type.


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


function unique(arr) {
  return Array.from(new Set(arr));
}



console.log( unique(values) ); 

// 7 exerc

Iterable keys
We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
But that doesn’t work:

// Error: keys.push is not a function
keys.push("more");

Why? How can we fix the code to make keys.push work?



let map = new Map();
map.set("name", "John");

let keys = map.keys("b");
console.log(map);





How many seconds have passed today?
Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
For instance, if now were 10:00 am, and there was no daylight savings shift, then:
getSecondsToday() == 36000 // (3600 * 10)
The function should work in any day. That is, it should not have a hard-coded value of “today


function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log( getSecondsToday() );




// 1 adv 


function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();
let counter3 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() ); // 2

console.log( counter2() ); // ?
console.log( counter2() ); // ?

console.log( counter3() ); // ?
console.log( counter3() ); // ?


Set and decrease counter?
Modify the code of makeCounter() so that the counter can also decrease and set the number:
counter() should return the next number (as before).
counter.set(value) should set the counter to value.
counter.decrease() should decrease the counter by 1.
See the sandbox code for the complete usage example.
P.S. You can use either a closure or the function property to keep the current count. Or write both variants.



function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.decrease = function () {
    return count--;
  };

  counter.set = function (value) {
    return count = value;
  };
  
  return counter;
}

console.log(makeCounter()); 


let myCounter = makeCounter();  //pq eu preciso fazer isso 


console.log(myCounter()); //0
console.log(myCounter()); //1
console.log(myCounter.set(12));//12 
console.log(myCounter()); //12 ?
console.log(myCounter.decrease());//13 ?
console.log(myCounter.decrease());// 12
console.log(myCounter()); //11


*/

//3 

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// What's the idea here??
function logVal(arr) {
  arr.forEach((item, index) => {
    let interVal = setInterval(function() {
      console.log(item)
    }, (index + 1) * 1000);

    setTimeout(() => {
      clearInterval(interVal)
    }, (index + 1) * 1000)

   
  })

}

logVal(number)

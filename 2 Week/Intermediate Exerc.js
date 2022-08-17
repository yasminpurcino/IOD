//1

function ucFirst(str) {
   
    return str[0].toUpperCase() + str.slice(1);  //The slice() method returns selected elements in an array, as a new array. 
  }
  
  console.log(ucFirst("john"))

  
  //2

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


   // 3 exerc


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

str.forEach(qqc => {
  console.log(camelize(qqc))
});

console.log(camelize("background-color") == "backgroundColor");
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition'); 


//6 exerc




let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


function unique(arr) {
  return Array.from(new Set(arr));
}



console.log( unique(values) ); 







// 7 exerc


// Error: keys.push is not a function
keys.push("more");

Why? How can we fix the code to make keys.push work?



let map = new Map();
map.set("name", "John");

let keys = map.keys("b");
console.log(map);






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



// 11 exerc 

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }
  
  console.log( getSecondsToday() );



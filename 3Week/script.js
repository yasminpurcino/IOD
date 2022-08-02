

/*
let person={
    "firstName":"John",
    "lastName":"Richardson",
    "getFullName":function(){
        return this.firstName+" "+this.lastName
    }
}

console.log(person.getFullName())

let person2=person;

person ={}

console.log(person2.getFullName())

let person1={
    "firstName1":"John",
    "lastName1":"Richardson",
    "getFullName":function(){
        return this.firstName1+" "+ this.lastName1
    }

}

console.log(person1.getFullName())

let person3={
    "firstName3":"Lui",
    "lastName3":"Dant",
    "getFullName": function(){
        return this.firstName3+ " "+ this.lastName3
    }



}

console.log(person3.getFullName())



function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log("End of async");
  }
  
  asyncCall();


  function resolveAfter2Seconds(){
    return new Promise (resolve =>{\
    setTimeout (() =>{
        resolve ("resolved");
    }, 2000);
});
  }

  async function asyncCall(){
    console.log("calling");
    const result = await resolveAfter2Seconds(); 
    console.log(result);
    console.log ("Ende of async");
  }

  asyncCall();

  
  function synCall() {
    console.log ("calling");
    const result = resolveAfter2Seconds();
    console.log(result.then ((result) => {

    }));
    console.log("end pf sync call")
  }

  syncCall()


 let person = {
    name: "John Doe",
    greet: function() {
        return "Hi, I'm " + this.name;
    }
 }

 let teacher = person
 teacher.name= "Gary"
 studentName = "Lui Dant"

 //console.log(teacher.greet())
 //console.log(person.greet())

 let studentName = "Lui Dant"
 
let teacher1 =Object.create(studentName {
       studentName : { value: "Lui Dant"},
     greet: function (){
        return "I'm student, my name is " + this.studentName;
     }

   // teach: { value: function(subject) {
     //   return "I can teach " + subject;
  
    }
);

//console.log(teacher1.teach("Maths"))
console.log(teacher1.greet(studentName))
  */


class Person {
    constructor (name){
        console.log("Inside Person constructor")
    }
    greet () {
        return "Hi, I'm Someone";
    }
}
let personObj= new Person("Yasmin") 
 
console.log(personObj)

class Student extends Person{
    constructor (name) {
        console.log ("Inside Student constructor")
        super(name)
    }
    greet () {
        return "Hi, I'm student"
    }
}


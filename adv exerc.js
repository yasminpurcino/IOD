//1
0101


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
  console.log( counter() ); // 3

  console.log( counter2() ); // ?
  console.log( counter2() ); // ?
  
  console.log( counter3() ); // ?
  console.log( counter3() ); // ?


  //2 

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
  console.log(myCounter()); //12 ? because it returns the counter value before incrementing
  console.log(myCounter.decrease());//13 ? because it returns the counter value before decreasing
  console.log(myCounter.decrease());// 12
  console.log(myCounter()); //11

  //3 exer

  
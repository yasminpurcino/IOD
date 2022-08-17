// function gererateNumberOfDiceSelection()
// {
//   // for more info:
//   // https://stackoverflow.com/questions/8674618/adding-options-to-select-with-javascript
//   let select = document.getElementById("numberOfDice")
//   let maximumNumberOfDices = 100;

//   // for -> Repeat
//   //.  start.   ; until; next execution
//   for (var i = 0; i < 30; i = i + 10) {
//     console.log(i);
//     if (i < 20) {
//       i = i - 9
//     }
//     // if (i > 20) {
//     //   i = i + 9
//     // }
//   }

//   // Output:
//   // 

//   // `i++` is the same as `i = i + 1`
//   for (var i = 1; i <= maximumNumberOfDices; i++) {
//     // <option value="value">innerHTML</option>
//     var opt = document.createElement('option');
//     opt.value = i;
//     opt.innerHTML = i;
//     select.appendChild(opt);
//   }
// }


function displayResult()
{
  let number = document.getElementById ("numberOfDice")
  var number_dices = number.options[number.selectedIndex].text;

  let side= document.getElementById("side")
  var side_dices = side.options[side.selectedIndex].text;

  displayedText = "The result is:"
  for (i = 0; i < number_dices; i++) {
    // get value
    result = shuffleDice(side_dices)

    // Display
    displayedText = displayedText + " " + result
  }

  document.getElementById("result").innerHTML = "BUBA PELUDA";
  document.getElementById("result").innerHTML = displayedText;
}

function shuffleDice(amountSides){
  // Write something that generates a random number from 1 to amountSides
  // Return this number
  return Math.ceil(Math.random() * amountSides);
}


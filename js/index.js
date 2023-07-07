const input = document.querySelector(".calculator__input");
let buttons = document.querySelectorAll("button");

function calculate(value) {
  const calculatedValue = eval(value  || null);
  if (isNaN(calculatedValue)) {
    input.value = "Error";
  } else {
    input.value = calculatedValue;
  }
}


document.addEventListener("click", keyboardInputHandler);
function keyboardInputHandler(e) {
  e.preventDefault();

  if (e.target.innerHTML === "0") {
    input.value += "0";
  } else if (e.target.innerHTML === "1") {
    input.value += "1";
  } else if (e.target.innerHTML === "2") {
    input.value += "2";
  } else if (e.target.innerHTML === "3") {
    input.value += "3";
  } else if (e.target.innerHTML === "4") {
    input.value += "4";
  } else if (e.target.innerHTML === "5") {
    input.value += "5";
  } else if (e.target.innerHTML === "6") {
    input.value += "6";
  } else if (e.target.innerHTML === "7") {
    input.value += "7";
  } else if (e.target.innerHTML === "8") {
    input.value += "8";
  } else if (e.target.innerHTML === "9") {
    input.value += "9";
  }


  if (e.target.innerHTML === ".") {
    input.value += ".";
  }

  if (e.target.innerHTML === "=") {
    calculate(input.value);
  }

  if (e.target.innerHTML === "DEL") {
    const resultInput = input.value;
    input.value = resultInput.substring(0, input.value.length - 1);
  }

  if (e.target.innerHTML === "RESET") {
    input.value = "";
  }
}


// THIS IS MY ISSUE

const operator = document.querySelectorAll(".operator");

operator.forEach((op) => {
  op.addEventListener("click", e => {
    let actions = []
    let oper = e.target.innerHTML;
    actions.push(oper)
    let lastPressed = null;
    for (const action of actions) {
      if (lastPressed === null) {
        lastPressed = action;
        // console.log(lastPressed);
        input.value =+ lastPressed.innerHTML;
      } else if (action > lastPressed) {
        lastPressed = action;
        // console.log(lastPressed);
        input.value =+ lastPressed.innerHTML;
      }
    }

  })
});


// const lastChar = input.value.slice(-1);
// input.value =+ lastChar
// function lastPressed(actions) {
//   let lastPressed = null;
//   for (const action of actions) {
//     if (lastPressed === null) {
//       lastPressed = action;
//     } else if (action > lastPressed) {
//       lastPressed = action;
//     }
//   }
//   return lastPressed;
// }


// При нажатии одного из операторов проверяйте последний символ инпута. Если он - тоже оператор, удаляйте его из строки и добавляйте новый оператор.

//////////////////////////////////////////////////////////////////////

// const operator = document.querySelectorAll(".operator");

// operator.forEach((op) => {
//   op.addEventListener("click", e => {
//     // let buttonText = e.target.textContent;
//     let opers = [];
//     opers.push(e.target.textContent)
//     console.log(opers);
//     console.log(opers.length);
//     if (opers.length >= 1) {
//       let res = opers.pop();
//       input.value += res;
//     }
//     else {
//       input.value += '';
//     }

//   })
// });

//////////////////////////////////////////////////////////////////////

// const operator = document.querySelectorAll(".operator");

// for (let item of operator) {
//   item.addEventListener("click", e => {
//     if (e.target.innerHTML === "+" || e.target.textContent === "-" || e.target.textContent === "*" || e.target.textContent === "/") {
//       input.value += e.target.innerHTML;
//     }
//   })
// }


//////////////////////////////////////////////////////////////////////

// const operator = document.querySelectorAll(".operator");

// for (let i = 0; i < operator.length; i++) {
//   operator[i].addEventListener("click", function(event) {
//     if (event.target.textContent === "+" || event.target.textContent === "-" || event.target.textContent === "*" || event.target.textContent === "/") {
//       let buttonText = event.target.textContent;
//       input.value += buttonText;
//     }
//   });
// }




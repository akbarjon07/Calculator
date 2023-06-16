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
  } else if (e.target.innerHTML === "7") {
    input.value += "7";
  } else if (e.target.innerHTML === "8") {
    input.value += "8";
  } else if (e.target.innerHTML === "9") {
    input.value += "9";
  }

  if (e.target.innerHTML === "+") {
    input.value += "+";
  } else if (e.target.innerHTML === "-") {
    input.value += "-";
  } else if (e.target.innerHTML === "*") {
    input.value += "*";
  } else if (e.target.innerHTML === "/") {
    input.value += "/";
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
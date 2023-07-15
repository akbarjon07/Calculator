// const display_input = document.querySelector(".calculator__input");
// const display_output = document.querySelector(".calculator__output");
// let buttons = document.querySelectorAll("button");

// let input = "";

// for (let key of buttons) {
// 	const value = key.dataset.key;

// 	key.addEventListener('click', () => {
// 		if (value == "clear") {
// 			input = "";
// 			display_input.innerHTML = "";
// 			display_output.innerHTML = "";
// 		} else if (value == "backspace") {
// 			input = input.slice(0, -1);
// 			display_input.innerHTML = CleanInput(input);
// 		} else if (value == ".") {
// 			if(!input.includes(".")){
// 				input += '.';
// 			}
// 		} else if (value == "=") {
// 			let result = eval(input);

// 			display_output.innerHTML = CleanOutput(result);
// 		} else {
// 			if (ValidateInput(value)) {
// 				input += value;
// 				display_input.innerHTML = CleanInput(input);
// 			}
// 		}
// 	})
// }

// function CleanInput(input) {
// 	let input_array = input.split("");
// 	let input_array_length = input_array.length;

// 	for (let i = 0; i < input_array_length; i++) {
// 		if (input_array[i] == "*") {
// 			input_array[i] = ` <span class="operator">*</span> `
// 		} else if (input_array[i] == "/") {
// 			input_array[i] = ` <span class="operator">÷</span> `;
// 		} else if (input_array[i] == "+") {
// 			input_array[i] = ` <span class="operator">+</span> `;
// 		} else if (input_array[i] == "-") {
// 			input_array[i] = ` <span class="operator">-</span> `;
// 		}
// 		// else if (input_array[0] == ".") {
// 		// 	input_array[i] = ` <span class="operator">0.</span> `;
// 		// }
// 	}

//   console.log(input_array);
// 	return input_array.join("");
// }

// function CleanOutput (output) {
// 	let output_string = output.toString();
// 	let decimal = output_string.split(".")[1];
// 	output_string = output_string.split(".")[0];

// 	let output_array = output_string.split("");

// 	if (output_array.length > 3) {
// 		for (let i = output_array.length - 3; i > 0; i -= 3) {
// 			output_array.splice(i, 0, ",");
// 		}
// 	}

// 	if (decimal) {
// 		output_array.push(".");
// 		output_array.push(decimal);
// 	}

//   console.log(output_array);

// 	return output_array.join("");
// }

// function ValidateInput (value) {
// 	let last_input = input.slice(-1);
// 	let operators = ["+", "-", "*", "/"];

//   let lastInput = "";

// //   for (let i = 0; i < last_input.length; i++) {
// //     const symbol = input[i];
// //     if (operators.includes(symbol)) {
// //       lastInput = "";
// //       continue;
// //     }
// //     lastInput += symbol;
// //   }

// //   console.log(lastInput);

// 	if (value == "." && last_input == ".") {
// 		return false;
// 	}



// 	if (operators.includes(value)) {
// 		if (operators.includes(last_input)) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}

// 	return true;
// }

// // function calculate(value) {
// //   const calculatedValue = eval(value  || null);
// //   if (isNaN(calculatedValue)) {
// //     input.value = "Error";
// //   } else {
// //     input.value = calculatedValue;
// //   }
// // }


// // document.addEventListener("click", keyboardInputHandler);
// // function keyboardInputHandler(e) {
// //   e.preventDefault();

// //   if (e.target.innerHTML === "0") {
// //     input.value += "0";
// //   } else if (e.target.innerHTML === "1") {
// //     input.value += "1";
// //   } else if (e.target.innerHTML === "2") {
// //     input.value += "2";
// //   } else if (e.target.innerHTML === "3") {
// //     input.value += "3";
// //   } else if (e.target.innerHTML === "4") {
// //     input.value += "4";
// //   } else if (e.target.innerHTML === "5") {
// //     input.value += "5";
// //   } else if (e.target.innerHTML === "6") {
// //     input.value += "6";
// //   } else if (e.target.innerHTML === "7") {
// //     input.value += "7";
// //   } else if (e.target.innerHTML === "8") {
// //     input.value += "8";
// //   } else if (e.target.innerHTML === "9") {
// //     input.value += "9";
// //   }


// //   if (e.target.innerHTML === ".") {
// //     input.value += ".";
// //   }

// //   if (e.target.innerHTML === "=") {
// //     calculate(input.value);
// //   }

// //   if (e.target.innerHTML === "DEL") {
// //     const resultInput = input.value;
// //     input.value = resultInput.substring(0, input.value.length - 1);
// //   }

// //   if (e.target.innerHTML === "RESET") {
// //     input.value = "";
// //   }
// // }


// // // THIS IS MY ISSUE

// // const operator = document.querySelectorAll(".operator");

// // operator.forEach((op) => {
// //   op.addEventListener("click", e => {
// //     let actions = []
// //     let oper = e.target.innerHTML;
// //     actions.push(oper)
// //     let lastPressed = null;
// //     for (const action of actions) {
// //       if (lastPressed === null) {
// //         lastPressed = action;
// //         // console.log(lastPressed);
// //         input.value =+ lastPressed.innerHTML;
// //       } else if (action > lastPressed) {
// //         lastPressed = action;
// //         // console.log(lastPressed);
// //         input.value =+ lastPressed.innerHTML;
// //       }
// //     }

// //   })
// // });


// // const lastChar = input.value.slice(-1);
// // input.value =+ lastChar
// // function lastPressed(actions) {
// //   let lastPressed = null;
// //   for (const action of actions) {
// //     if (lastPressed === null) {
// //       lastPressed = action;
// //     } else if (action > lastPressed) {
// //       lastPressed = action;
// //     }
// //   }
// //   return lastPressed;
// // }


// // При нажатии одного из операторов проверяйте последний символ инпута. Если он - тоже оператор, удаляйте его из строки и добавляйте новый оператор.

// //////////////////////////////////////////////////////////////////////

// // const operator = document.querySelectorAll(".operator");

// // operator.forEach((op) => {
// //   op.addEventListener("click", e => {
// //     // let buttonText = e.target.textContent;
// //     let opers = [];
// //     opers.push(e.target.textContent)
// //     console.log(opers);
// //     console.log(opers.length);
// //     if (opers.length >= 1) {
// //       let res = opers.pop();
// //       input.value += res;
// //     }
// //     else {
// //       input.value += '';
// //     }

// //   })
// // });

// //////////////////////////////////////////////////////////////////////

// // const operator = document.querySelectorAll(".operator");

// // for (let item of operator) {
// //   item.addEventListener("click", e => {
// //     if (e.target.innerHTML === "+" || e.target.textContent === "-" || e.target.textContent === "*" || e.target.textContent === "/") {
// //       input.value += e.target.innerHTML;
// //     }
// //   })
// // }


// //////////////////////////////////////////////////////////////////////

// // const operator = document.querySelectorAll(".operator");

// // for (let i = 0; i < operator.length; i++) {
// //   operator[i].addEventListener("click", function(event) {
// //     if (event.target.textContent === "+" || event.target.textContent === "-" || event.target.textContent === "*" || event.target.textContent === "/") {
// //       let buttonText = event.target.textContent;
// //       input.value += buttonText;
// //     }
// //   });
// // }
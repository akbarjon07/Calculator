const input = document.querySelector(".calculator__input");
let buttons = document.querySelectorAll("button");
let result = [];
let calculation


const calculate = (button) => {
    const value = button.textContent;
    if (value === "RESET") {
        result = [];
        input.textContent = '0'
    } else if (value === "=") {
        input.textContent = eval(calculation)
    } else if (value === "DEL") {
        calculation = calculation.toString().slice(0, -1);
        input.textContent = calculation;
    } else {
        result.push(value);
        calculation = result.join('');
        input.innerHTML = calculation;
    }
}



buttons.forEach(button => {
    button.addEventListener("click", () => calculate(button))
})
let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){

    let clear = document.querySelector(".reser-btn");
    let equal = document.querySelector(".equal-btn");
    let decimal = document.querySelector(".decimal");
    let delet = document.querySelector(".del-btn");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".calculator__input");
    let currentScreen = document.querySelector(".calculator__output");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
		if(currentValue != '') {
			handleOperator(e.target.textContent)
			previousScreen.textContent = previousValue + " " + operator;
			currentScreen.textContent = currentValue;
		}
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

	delet.addEventListener("click", function(){
        currentValue = currentValue.slice(0, -1);
        currentScreen.textContent = currentValue;

    })

    equal.addEventListener("click", function(){
        if(currentValue != '' && previousValue != ''){
            calculate()
            previousScreen.textContent = '';
            if(previousValue.length <= 9){
                currentScreen.textContent = previousValue;
            } else{
                currentScreen.textContent = previousValue.slice(0,9) + "...";
            }
        }
    })

    decimal.addEventListener("click", function(){
		addDecimal();
    })
})

function handleNumber(num){
    if(currentValue.length <= 5){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "x"){
        previousValue *= currentValue;
    } else{
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
	}
}



















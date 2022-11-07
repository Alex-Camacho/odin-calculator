let operator;
let result;

//Funciones matemáticas:
const add = (a,b) => {
    result = a + b;
}

const subtract = (a,b) => {
    result = a - b;
}

const multiply = (a,b) => {
    result = a * b;
}


const divide = (a,b) => {
    result = a / b;
}

const operate = (operator,a,b) => {
    if(operator === add){
        add(a,b);
    }
    else if(operator === subtract){
        subtract(a,b);
    }
    else if(operator === multiply){
        multiply(a,b);
    }
    else if(operator === divide){
        divide(a,b);
    }
}

//Display

let operation = 0;

let one = document.getElementById("1");
one.addEventListener("click", () => {
    document.getElementById("display").textContent += "1";
    operation += "" + 1;
    operationNum = Number(operation);
});

let two = document.getElementById("2");
two.addEventListener("click", () => {
    document.getElementById("display").textContent += "2";
    operation += "" + 2;
    operationNum = Number(operation);
});

let three = document.getElementById("3");
three.addEventListener("click", () => {
    document.getElementById("display").textContent += "3";
    operation += "" + 3;
    operationNum = Number(operation);
});

let four = document.getElementById("4");
four.addEventListener("click", () => {
    document.getElementById("display").textContent += "4";
    operation += "" + 4;
    operationNum = Number(operation);
});

let five = document.getElementById("5");
five.addEventListener("click", () => {
    document.getElementById("display").textContent += "5";
    operation += "" + 5;
    operationNum = Number(operation);
});

let six = document.getElementById("6");
six.addEventListener("click", () => {
    document.getElementById("display").textContent += "6";
    operation += "" + 6;
    operationNum = Number(operation);
});

let seven = document.getElementById("7");
seven.addEventListener("click", () => {
    document.getElementById("display").textContent += "7";
    operation += "" + 7;
    operationNum = Number(operation);
});

let eight = document.getElementById("8");
eight.addEventListener("click", () => {
    document.getElementById("display").textContent += "8";
    operation += "" + 8;
    operationNum = Number(operation);
});

let nine = document.getElementById("9");
nine.addEventListener("click", () => {
    document.getElementById("display").textContent += "9";
    operation += "" + 9;
    operationNum = Number(operation);
});

let zero = document.getElementById("0");
zero.addEventListener("click", () => {
    document.getElementById("display").textContent += "0";
    operation += "" + 0;
    operationNum = Number(operation);
});

let dot = document.getElementById(".");
dot.addEventListener("click", () => {
    document.getElementById("display").textContent += ".";
    operation += ".";
    operationNum = Number(operation);
})

let plus = document.getElementById("+");
plus.addEventListener("click", () => {
    document.getElementById("display").textContent += "+";

    if(operator === add || operator === subtract || operator === multiply || operator === divide){
        b = operationNum;
        operate(operator,a,b);
        operator = add;
        operation = 0;
        operationNum = 0;
        a = result;
    }

    else {
        a = operationNum;
        operation = 0;
        operationNum = Number(operation);
        operator = add;
    }
});

let resta = document.getElementById("-");
resta.addEventListener("click", () => {
    document.getElementById("display").textContent += "-";
    if(operator === add || operator === subtract || operator === multiply || operator === divide){
        b = operationNum;
        operate(operator,a,b);
        operator = subtract;
        operation = 0;
        operationNum = 0;
        a = result;
    }

    else {
        a = operationNum;
        operation = 0;
        operationNum = Number(operation);
        operator = subtract;
    }
});

let mult = document.getElementById("*");
mult.addEventListener("click", () => {
    document.getElementById("display").textContent += "x";

    if(operator === add || operator === subtract || operator === multiply || operator === divide){
        b = operationNum;
        operate(operator,a,b);
        operator = multiply;
        operation = 0;
        operationNum = 0;
        a = result;
    } 

    else {
        a = operationNum;
        operation = 0;
        operationNum = Number(operation);
        operator = multiply;
    }
});

let dividir = document.getElementById("/");
dividir.addEventListener("click", () => {
    document.getElementById("display").textContent += "/";

    if(operator === add || operator === subtract || operator === multiply || operator === divide){
        b = operationNum;
        operate(operator,a,b);
        operator = divide;
        operation = 0;
        operationNum = 0;
        a = result;
    }

    else {
        a = operationNum;
        operation = 0;
        operationNum = Number(operation);
        operator = divide;
    }
});

//Al pulsar "=" se efectua la operación
let equal = document.getElementById("=");
equal.addEventListener("click", () => {
    b = operationNum;
    operate(operator,a,b);
    document.getElementById("temporal").textContent = document.getElementById("display").textContent; 
    document.getElementById("display").textContent = `${result}`;
});

//Botón Clear
let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    operation = 0;
    operationNum = Number(operation);
    result = 0;
    a = 0;
    b = 0;
    operator = undefined;
    document.getElementById("display").textContent = "";
});

// FALTA AÑADIR A SUBDISPLAY LAS OPERACIONES TRAS operator
// o =, FUNCION DEL y AÑADIR RECONOCIMIENTO TECLADO
//Funciones matemáticas:
const add = (a,b) => {
    return result = a + b;
}

const subtract = (a,b) => {
    return result = a - b;
}

const multiply = (a,b) => {
    return result = a * b;
}


const divide = (a,b) => {
    return result = a / b;
}

const operate = (operator,a,b) => {
    if(operator === add){
        return add(a,b);
    }
    else if(operator === subtract){
        return subtract(a,b);
    }
    else if(operator === multiply){
        return multiply(a,b);
    }
    else if(operator === divide){
        return divide(a,b);
    }
}

//Display
let display = document.getElementById("display");


let one = document.getElementById("one");
one.addEventListener("click", () => {
    document.getElementById("display").textContent += "1";
});



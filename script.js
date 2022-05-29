
initButtons();

function initButtons(){
    numInputs = document.getElementsByClassName("numInput");
    for (const numButton of numInputs){
        console.log(numButton.textContent);
        numButton.addEventListener("click", () => updateDisp(numButton.textContent));
    }
}

function add(a, b){
    return (a + b);
}

function substract(a, b){
    return (a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){
    if (b == 0)
        return null;
    return (a / b);
}

function operate(operation, a, b){
    switch(operation){
        case "add":
            return (add(a,b));
        case "substract":
            return(substract(a,b));
        case "multiply":
            return(multiply(a,b));
        case "divide":
            return(divide(a,b));
        default:
            console.log("Something went wrong in operate");
            break;
    }
}

function updateDisp(value){
    disp = document.getElementById("calcDisp");
    disp.textContent = disp.textContent + value;
    console.log(disp.textContent);
}
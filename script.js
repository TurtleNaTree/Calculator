
window.onload = () => document.getElementById("calcDisp").value = "0";
dispValue = 0;
bValue = 0;
totalValue = 0;
savedOperation = "";
state = false; // 0 = only one number has been added. 1 = two numbers added so a calculation can now start
newOperation = false;
equalPressed = false;
calcDisp = document.getElementById("calcDisp");
initButtons();

function initButtons(){

    calcDisp.addEventListener("change", () => dispValue = calcDisp.value);

    numInputs = document.getElementsByClassName("numInput");
    for (const numButton of numInputs){
        numButton.addEventListener("click", () => updateDisp(numButton.textContent));
    }

    document.getElementById("clearInput").addEventListener("click", () => clearDisp());

    modInputs = document.getElementsByClassName("modInput");
    for (const modButton of modInputs){
        switch (modButton.textContent){
            case ".":
                modButton.addEventListener("click", () => addDecimal());
                break;
            case "+/-":
                modButton.addEventListener("click", () => negate());
                break;
            default:
                console.log("something whent wrong");
                break;
        }
    }

    operationInputs = document.getElementsByClassName("operationInput");
    for (const operationButton of operationInputs){
        switch (operationButton.textContent){
            case "+":
                operationButton.addEventListener("click", () => operate("add", calcDisp.value));
                break;
            case "=":
                operationButton.addEventListener("click", () => operate("equal", calcDisp.value));
                break;
            default:
                console.log("something went wrong");
        }
    }
}

function add(a, b){
    return (+a + +b);
}

function substract(a, b){
    return (+a - +b);
}

function multiply(a, b){
    return (+a * +b);
}

function divide(a, b){
    if (+b == 0)
        return null;
    return (+a / +b);
}

function operate(operation, a){

    if (state){
        switch(savedOperation){
            case "add":
                updateDispOverload(add(totalValue, a), equalPressed);
                savedOperation = operation;
                newOperation = true;
            case "substract":
                return(substract(totalValue, a));
            case "multiply":
                return(multiply(totalValue, a));
            case "divide":
                return(divide(totalValue, a));
            case "equal":
                equalPressed = true;
                operate(savedOperation, totalValue, calcDisp.value);
                break;
            default:
                console.log("Something went wrong in operate");
                break;
        }
    }
    else {
        totalValue = calcDisp.value;
        savedOperation = operation;
        newOperation = true;
        updateState();
    }
}


function updateDisp(value){
    disp = document.getElementById("calcDisp");
    
    ((+disp.value === 0 && !/\./.test(disp.value)) || newOperation) ? disp.value = value : disp.value+= value; 
    if (newOperation)
        newOperation = false;
    
}

function updateDispOverload(value, equalPressed){
    disp = document.getElementById("calcDisp");
    if (equalPressed){
        disp.value = value;
        savedOperation = "";
        updateState();
        equalPressed = false;
        newOperation = true;
    }
    else
        disp.value = value;
        totalValue = value;
   
    
}


function clearDisp(){
    document.getElementById("calcDisp").value = 0;
    savedOperation = "";
    newOperation = false;
}

function addDecimal(){
    disp = document.getElementById("calcDisp");

    if (!(/\./.test(disp.value)))
        disp.value += ".";
}

function negate(){
    disp = document.getElementById("calcDisp");

    if (!(+disp.value  === 0))
        disp.value *= -1; 
        
}

function updateState(){
    (!state) ? state = true : state = false;
}
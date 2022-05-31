
window.onload = () => document.getElementById("calcDisp").value = "0";
initButtons();

function initButtons(){
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
    console.log(`${disp.value}`);
    console.log(disp.value == 0);

    (disp.value == 0) ? disp.value = value : disp.value+= value;
    
}

function clearDisp(){
    document.getElementById("calcDisp").value = 0;
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
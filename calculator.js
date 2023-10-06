const buttons = document.querySelectorAll("button");
for(let button of buttons){
    button.addEventListener("click", displayText);
}

function displayText(event){
    // const display = document.querySelector(".text");
    const number = event.currentTarget.value;
    // const number = document.getElementById("7").value;
    document.querySelector(".text").value += number;
}

function doOperation(){
    const display = document.querySelector(".text").value;
    const x = parseInt(display);
    let z = 0;
    for(let i = display.length-1; i>=0; i--){
        let operator = display.charAt(i);
        if(operator=='+'){
            const y = parseInt(display.substring(i+1));
            z = x+y;
            break;
        }
        else if(operator=='-'){
            const y = parseInt(display.substring(i+1));
            z = x-y;
            break;
        }
        else if(operator=="/"){
            const y = parseInt(display.substring(i+1));
            z = x/y;
            break;
        }
        else if(operator=="*"){
            const y = parseInt(display.substring(i+1));
            z = x*y;
            break;
        }
    }
    document.querySelector(".text").value = z;
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", function clear(){
    const clear = "";
    document.querySelector(".text").value = clear;
})
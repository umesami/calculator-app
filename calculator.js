const buttons = document.querySelectorAll("button");
for(let button of buttons){
    button.addEventListener("click", displayText);
}

function displayText(event){
    // const display = document.querySelector(".text");
    const number = event.currentTarget.value;
    // const number = document.getElementById("7").value;
    document.querySelector(".text").innerHTML += number;
}

function doOperation(){
    const display = document.querySelector(".text").innerHTML;
    const x = parseInt(display);
    let z = 0;
    for(let i =0; i< display.length; i++){
        let operator = display.charAt(i);
        if(operator=='+'){
            const y = parseInt(display.substring(display.lastIndexOf("+")+1));
            z = x+y;
            break;
        }
        else if(operator=='-'){
            const y = parseInt(display.substring(display.lastIndexOf("-")+1));
            z = x-y;
            break;
        }
        else if(operator=="/"){
            const y = parseInt(display.substring(display.lastIndexOf("/")+1));
            z = x/y;
            break;
        }
        else if(operator=="*"){
            const y = parseInt(display.substring(display.lastIndexOf("*")+1));
            z = x*y;
            break;
        }
    }
    document.querySelector(".text").innerHTML = z;
}

function clear(){
    document.querySelector(".text").innerHTML = "";
}
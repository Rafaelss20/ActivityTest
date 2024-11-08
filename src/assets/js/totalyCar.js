// script.js

const valorUnit = document.getElementsByClassName("valueUnit")
const subTotal = document.getElementsByClassName("subTotal")
const Total = document.querySelector("#totalCompra")
const inpTotal = document.querySelector("#totaly")
const input = document.getElementsByClassName("quantidade");

somar()
function somar() {
    let totaly = 0
    console.log('soma');
    for (let i = 0; i < input.length; i++) {
        console.log(valorUnit);
        
        const element = valorUnit[i].value * input[i].value;
        totaly =  element + totaly
        subTotal[i].innerHTML = parseFloat(element).toFixed(2)
    }
    Total.innerHTML = parseFloat(totaly).toFixed(2)
    inpTotal.value = parseFloat(totaly).toFixed(2)
    return totaly
}

function reload() {
    let input = document.getElementsByClassName("quantidade")
    for (var i = 0; i < input.length; i++) {
        input[i].onchange = somar;
    }
}
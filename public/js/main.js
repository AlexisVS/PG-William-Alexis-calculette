import { numberABF } from "variables.js";
import { addition, soustraction, multiplication, division, numberReset } from "operation.js";
//la div qui contient tout
let divMain = document.createElement('div');
divMain.id = "body";

document.body.insertBefore(divMain, document.body.firstChild);

//la div resultat et les commandes
let divRes = document.createElement('div');
divRes.id = "resultat";

divMain.appendChild(divRes)

let divOperations = document.createElement('div');
divOperations.id = "operations"

divMain.appendChild(divOperations);

//div numbers et div operations
let divNumbers = document.createElement('div');
let divOperateurs = document.createElement('div');

divNumbers.id = "numbers";
divOperateurs.id = "operateurs";

divOperations.appendChild(divNumbers);
divOperations.appendChild(divOperateurs);

//Les chiffres
let numbers = [];
for (let i =0; i < 10;i++) {
    numbers[i] = "number" + `${i}`
}

let x;

numbers.forEach((e,i) => {
    x = document.createElement('button');
    x.id = e;
    x.innerHTML= `${i}`;
    divNumbers.appendChild(x);
});

let c = document.createElement('button');
let egal = document.createElement('button');

c.id = "numberReset";
egal.id = "numberResult";

c.innerText = "C"
egal.innerText = "="

divNumbers.appendChild(c);
divNumbers.appendChild(egal);

//Les operations

let operateurs = ["+", "-", "*", "/"];

let y;

operateurs.forEach(e => {
    y = document.createElement('button');
    y.id = "number" + e
    y.innerText = e
    divOperateurs.appendChild(y)
});

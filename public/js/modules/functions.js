export let init = () => {
    initDom();
    start();
}
export let initDom = () => {
    //la div qui contient tout
    let divMain = document.createElement('div');
    divMain.id = "body";

    document.body.insertBefore(divMain, document.body.firstChild);

    //la div resultat et les commandes
    let divRes = document.createElement('input');
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
    for (let i = 0; i < 10; i++) {
        numbers[i] = "number" + `${i}`
    }

    let x;

    numbers.forEach((e, i) => {
        x = document.createElement('button');
        x.id = e;
        x.innerHTML = `${i}`;
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
}

export let start = () => {
    // les chiffres de 0 à 9 + reset + result
    let allButtons = Array.from(document.getElementsByTagName('button'));
    let numberABF = ["", "", ""]; //Array(3); // [numberA, numberB, symboleDeLaFunction] variable qui stock
    let displayResult;

    // faire en sorte que les chiffres apparaisse dans le displayResult

    allButtons.forEach((e, i) => {

        e.addEventListener('click', (event) => {

            displayResult = document.querySelector('#resultat');

            // ? pour le Clear 'C'
            if (event.target.innerHTML == "C") {

                numberABF = ["", "", ""];
                displayResult.value = "";
            }

            // ? Pour le égale
            if (event.target.innerHTML == "=" && numberABF[1] != "" && numberABF[2] != "") {
                switch (numberABF[2]) {
                    case "+":
                        numberABF[0] = +numberABF[0] + +numberABF[1];
                        break;

                    case "-":
                        numberABF[0] = +numberABF[0] - +numberABF[1];
                        break;

                    case "*":
                        numberABF[0] = +numberABF[0] * +numberABF[1];
                        break;

                    case "/":
                        numberABF[0] = +numberABF[0] / +numberABF[1];
                        break;
                }
                displayResult.value = numberABF[0];
                numberABF[0] = numberABF[0].toString()
                numberABF[1] = "";
                numberABF[2] = "";
            }
            // ? pour le deuxieme chiffre
            if (numberABF[0] != "" &&
                numberABF[2] != "" &&
                event.target.innerHTML != "=" &&
                event.target.innerHTML != 'C' &&
                event.target.innerHTML != "+" &&
                event.target.innerHTML != "*" &&
                event.target.innerHTML != "/") {

                if (numberABF[1].length == 0 && event.target.innerHTML == "-") {

                    numberABF[1] += event.target.innerHTML;
                    displayResult.value = numberABF[1];
                }

                if (event.target.innerHTML != "-") {

                    numberABF[1] += event.target.innerHTML;
                    displayResult.value = numberABF[1];
                }
            }

            // ? Pour l'operateur
            if (numberABF[0] != "" &&
                numberABF[1] == "" &&
                (event.target.innerHTML == "+" || event.target.innerHTML == "-" || event.target.innerHTML == "*" || event.target.innerHTML == "/") == true) {

                switch (event.target.innerHTML) {
                    case "+":
                        numberABF[2] = "+";
                        break;

                    case "-":
                        numberABF[2] = "-";
                        break;

                    case "*":
                        numberABF[2] = "*";
                        break;

                    case "/":
                        numberABF[2] = "/";
                        break;
                }
            }

            // ? pour le premier chiffre
            if (numberABF[1] == "" &&
                numberABF[2] == "" &&
                event.target.innerHTML != "=" &&
                event.target.innerHTML != 'C' &&
                event.target.innerHTML != "+" &&
                event.target.innerHTML != "*" &&
                event.target.innerHTML != "/") {

                if (numberABF[0].length == 0 && event.target.innerHTML == "-") {

                    numberABF[0] += event.target.innerHTML;
                    displayResult.value = numberABF[0];
                }

                if (event.target.innerHTML != "-") {
                    numberABF[0] += event.target.innerHTML;
                    displayResult.value = numberABF[0];
                }
            }

            //1. ecrire des chiffre
            //2. Appuyer sur un operateur
            //3. ecrire (SI pas touche C et faire en sorte que '=' fous pas la merdre) la deuxieme partie des chiffres
            // * cree une fonction pour le .1 et le .3 (en fesant ensortede voir si une touche operateur n'as pas été appuyer)

            console.log(`A la fin du eventListener ${numberABF}`);
            console.log(`0: ${typeof numberABF[0]}, 1: ${typeof numberABF[1]}, 2: ${typeof numberABF[2]}`);
        })


    })
}
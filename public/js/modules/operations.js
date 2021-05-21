export let addition = (numberABF) => {
    return numberABF[0] + numberABF[1]
}
export let soustraction = (numberABF) => {
    return numberABF[0] - numberABF[1]
}
export let multiplication = (numberABF) => {
    return numberABF[0] * numberABF[1]
}
export let division = (numberABF) => {
    return numberABF[0] / numberABF[1]
}
export let numberReset = (numberABF) => {
    return numberABF = [0, 0, ""]
}
export let result = (numberABF) => {
    switch (numberABF[2]) {
        case "+":
            return addition(numberABF[0], numberABF[1])

        case "-":
            return soustraction(numberABF[0], numberABF[1])

        case "x":
            return multiplication(numberABF[0], numberABF[1])

        case "/":
            return division(numberABF[0], numberABF[1])
    }
}
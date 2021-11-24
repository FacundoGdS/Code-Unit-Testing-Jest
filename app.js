let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const sum = (a, b) => {
    return a + b;
}

const fromEuroToDollar = (euro) => {
    let valueInDollar = euro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = (dollar) => {
    let valueInEuro = dollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}


const fromYenToPound = (yen) => {
    let valueInEuro = yen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

console.log(sum(7, 3));
console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
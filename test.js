//importar the function sum from the app.js file
const {sum} = require("./app.js");

//first test
test("add 14 + 9 to equal 23", () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum (14, 9);

    //we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(1)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 1 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(1)).toBe(1.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.5 yens", function(){
    const { fromDollarToYen } = require("./app.js");
    //dollars = fromDollarToYen(1);
    //expected = (1 / 1.2) * 127.9;
    expect(fromDollarToYen(1)).toBe(106.58333333333334);
})

test("One yen should be 0.0062 pounds", function(){
    const { fromYenToPound } = require("./app.js");
    //expected = (1 / 127.9) * 0.8;
    expect(fromYenToPound(1)).toBe(0.006254886630179828);
})
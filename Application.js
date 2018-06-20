var calc =require('./InterestCalc.js');
var cur = require('./CurrenceyConvertor.js');

var intAmt = calc.simpleInt(3000,3,10);

console.log("simple Interest",intAmt);
intAmt = calc.compoundInt(5000,3,8)

console.log("Compound Interest",intAmt);

console.log("Currency Inr To Dollar Conversion",cur.dollarToInr(100,66));

console.log("Currencey Dollar to Inr Conversion", cur.InrToDollar(6000,66));


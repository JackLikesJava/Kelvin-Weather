//this is just showing that the forcast for today in kevlin is 293 and the value is staying as a constant
const kelvinTemp = "293";
console.log(kelvinTemp);
//were just subtracting 273 off of 293 and doing console.log to make sure the answer is 20
let celsuisTemp = 293 - 273;
console.log(celsuisTemp);
//I created a variable that takes the CelsuisTemp variable so that it can do the math to find out what the fahrenheitTtemp is
let fahrenheit = celsuisTemp * (9/5) + 32;
console.log(fahrenheit);
//continue to the math.floor() portion when you return.

//this is just showing that the forcast for today in kevlin is 293 and the value is staying as a constant
const kelvinTemp = "293";
console.log(kelvinTemp);
//were just subtracting 273 off of 293 and doing console.log to make sure the answer is 20
let celsuisTemp = 293 - 273;
console.log(celsuisTemp);
//I created a variable that takes the CelsuisTemp variable so that it can do the math to find out what the fahrenheitTtemp is
let fahrenheit = celsuisTemp * (9/5) + 32;
console.log(fahrenheit);
//In the code below, it is rounding down to the nearest 
fahrenheit = Math.floor(fahrenheit);
//You need to do the back tics `` and ${} for the interpolation to work!
console.log(`the temperature is ${fahrenheit} degrees Fahrenheit`);
//now I can convert Celsius to Newton

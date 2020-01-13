var bmi = function(number1, number2) {
    return (number2 * 703) / (number1 ** 2)
};

var number1 = parseInt(prompt("Enter your height(inches):"));
var number2 = parseInt(prompt("Enter your weight(lbs):"));
var result = bmi(number1, number2);
alert(result);

var volume = function(gallons){
    return (gallons * 3.78541)
};

var volume = function (gallons) {
    return (gallons * 3.78541)
};

var gallons = parseInt(prompt("Enter volume in gallons"));
var result = volume(gallons)
alert(result);
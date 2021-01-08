/*
TO DO://
Write a function that calculates and prints the sum of the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function.



*/


function sumFirstAndLastDigits(input){
    let firstNum = Number(input.shift());
    let lastNum = Number(input[input.length-1]);
    let result = firstNum + lastNum;
    console.log(result);
    

}
sumFirstAndLastDigits(['20', '30', '40']);
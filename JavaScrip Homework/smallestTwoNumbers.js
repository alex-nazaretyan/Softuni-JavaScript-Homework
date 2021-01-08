/*
TO DO://
Write a function that prints the two smallest elements from an array of numbers.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
*/ 

let smallesTwoNumbers = (input) =>{
    let sortedArr = input.sort((a,b) => a-b);
    let result = sortedArr.slice(0,2);
    console.log(result);
}
console.log(smallesTwoNumbers([30,15,50,5]));
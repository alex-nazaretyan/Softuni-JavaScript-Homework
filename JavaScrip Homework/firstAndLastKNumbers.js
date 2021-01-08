/*
TO DO://
You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.

*/

function firstAndLastKNumbers(input){
    let k = input.shift()
    let firstHalf = input.slice(0, k)
    let secondHalf = input.splice(1, k)
    console.log(firstHalf); 
    console.log(secondHalf); 

}
firstAndLastKNumbers([3,
    6, 7, 8, 9]
   
    );

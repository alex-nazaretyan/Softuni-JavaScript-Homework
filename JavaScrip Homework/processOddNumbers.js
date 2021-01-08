/* 
TO DO://
You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.

*/
let processOddNumbers = (input) => {
    let result = [];
    for(let i = 0; i <input.length;i++){
        if(i %2 !==0){
            result.unshift(input[i] * 2);

        }
    }
    return result

}
console.log(processOddNumbers([10,15,20,25]));

/*
TO DO://
Write a function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line


*/

function negativeAndPositiveNumbers(input){
    let newArr = [];
    for(let i = 0; i<input.length; i++){
     if(input[i] < 0){
         newArr.unshift(input[i])
     }
     else{
        newArr.push(input[i])
     }
}
for (const key of newArr) {
    console.log(key);
    
}

}
negativeAndPositiveNumbers([7, -2, 8, 9]);
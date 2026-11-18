// Question 13:
// Write a function to find the largest number in an array.



let numbers = [1,3,7,2,4];

function getnum(arr) {
    return Math.max(...arr);
}

console.log(getnum(numbers));
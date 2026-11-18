// 14. Write a function that takes an object and returns an array containing only its keys

function user(obj) {
    return Object.keys(obj);
}

console.log(user({ name: "John", age: 30 }));




// Question 11:
// Write a function that accepts multiple parameters (two or more) and returns their sum.

let user = {
    name: "john",
    age: 25
};

function user2 (user) {
    let { name, age } = user;

    return "My name is " + name + " and I am " + age + " years old.";
}

console.log(user2(user)); 
// user تعتبر Parameter
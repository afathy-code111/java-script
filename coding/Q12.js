// Question 12:
// Write a function that returns a promise which resolves after 3 seconds with a 'Success' message
    
let Success1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 3000);
});

Success1.then((result) => {
    console.log(result);
});


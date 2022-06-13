// const { response } = require("express");

fetch("http://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})







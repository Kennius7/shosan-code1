const button = document.getElementById("btn");
const alertBody = document.getElementById("alert");

alertBody.style.marginTop = "200px"




const movies = ["Avengers1", "Black Panther", "Bloodshot", "I Am Legend", "X-Men"]

const movieloop = movies.map(movies => movies)

// button.addEventListener('click', function(){
//     alert(`Actor no dey die for film, except in ${movieloop}`);
// })

button.addEventListener('click', function(){
  alertBody.innerText = `Actor no dey die for film, except in ${movieloop}`
})



// function actor() {
//     alert("Actor no dey die for film");
// }
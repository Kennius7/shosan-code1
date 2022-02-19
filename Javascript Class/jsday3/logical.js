let price = 10;
price !== "5";
console.log(price !== "5");

let isDeveloper = true;
let isAccountant = false;
let knowHTML = true;
let knowValuation = false;

// AND LOGICAL COMPARISON
isDeveloper && isAccountant // false
knowHTML && knowValuation //false
isDeveloper && knowHTML //true
isAccountant && knowValuation //false

// OR LOGICAL COMPARISON
isDeveloper || isAccountant //true
knowHTML || knowValuation //true
isDeveloper || knowHTML //true
isAccountant || knowValuation //false

// NOT LOGICAL COMPARISON
!isDeveloper //false
!knowHTML //false
!knowValuation //true
!isAccountant //true

// let a = "girl";
// if(!a){
//     console.log("I don\'t want you");
// }
// else{
//     console.log("You are welcome to our club");
// }

// let gender = "girl";
// let age = 18;
// if(gender == "boy" && age >= 18){
//     console.log("Welcome to the club");
// }
// else{
//     console.log("Go away mehn");
// }

// let atmPin = 4;
// let bank = "gtb";
// if(atmPin == 4 || bank == gtb){
//     alert("Access Granted")
// }
// else{
//     alert("Access Denied")
// }

let age = prompt("How old are you?");

if(age == 18 || age > 18){
    alert("You are welcome");
}
else{
    alert("Go back home");
}
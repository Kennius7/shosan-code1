// const Person = {
//     firstName: "Kenny",
//     lastName: "Ogbogu",
//     Age: "20",
//     Country: "Nigeria",
//     skinColor: "Fair",
//     Walk: function trek(dist) {
//     }
// }

// alert(`My name is ${Person.firstName}`)
// alert(`My country is ${Person.Country} though I go soon comot for here.`)
// // alert(`You will walk ${Person.Walk} kilometers`)

// alert(Person.reproduce = "Twins");
// delete Person.skinColor




// console.log(`My name is ${Person.firstName}`)
// console.log(`My country is ${Person.Country} though I go soon comot for here.`)
// // alert(`You will walk ${Person.Walk} kilometers`)

// console.log(Person.reproduce = "Twins");
// delete Person.skinColor


// const Questionnaire = [
//     {questionOne: "Who is the best player in the world?"},
//     {questionTwo: "Who is the best player in the world?"},
//     {questionThree: "Who is the best player in the world?"}
// ]

// // alert(Questionnaire[1].questionTwo);

// for (let i = 0; i <= Questionnaire.length; i++){
//   alert(Questionnaire[i]);
//   let 
// }

// document.write("Hello World")

// let number = 5; number <= 10; number++;

// alert(number);
// alert(typeof (number));

// let data = prompt();
// alert(`The data type is ${typeof data}`);

// let ogboguFamilyMembers = ["kenny", "Karle", "Erica", "Rayen"];
// ogboguFamilyMembers = [1000, 500, 200, 100];
// alert(ogboguFamilyMembers[1]);

// let str = "shosan";
// let char = [...str];
// alert(char);

// let arr1 = [1, 2, 3];
// let arr2 = [-3, -2, -1, 0, ...arr1];
// alert(arr2);

// function add(a,b,c) {
//     return a + b + c;
// }

// let values = [2, 3, 4];
// // let sum = add(values[0], values[1], values[2]);
// sum = add(...values);
// alert(sum);

// let arr3 = [3, 4, 5, 6, 7, 8];
// arr3.pop();
// arr3.push(100);
// arr3.shift();
// arr3.unshift(2);
// alert(arr3);
// alert(arr3[arr3.length - 1]);


// let age = prompt("How old are you?");
// age <= 17
//     ?alert("You aren't old enough")
//     :alert("Welcome in");


// document.write("Multiplication Tables <br>");
// for (let x = 2; x <= 12; x++) {
//     for (let y = 1; y <=12; y++){
//         let result = x * y;
//         document.write(`${x} x ${y} = ${result}<br>`);
// }
//     document.write("<br>");
  
// }

// for (let length = 1; length <= 5; length++) {
//     for (let breadth = 1; breadth <= 5; breadth++){
//         let result = length + breadth;
//         alert(`The length of the building, which is ${length} plus the breadth which is ${breadth} is equals to ${result}`)
//     }
// }


// let itemCollection = [
//                         ["Honda", "Hyundai", "Volkwagen", "Mitsubishi"],
//                         ["Lagos", "Osun", "Ondo", "Benin"],
//                         ["Samsung", "Itel", "Infinix", "Tecno"],
//                         ["Kenny", "Karle", "Erica", "rayen"]
//                     ]

// for (let i = 0; i < itemCollection.length; i++) {
//     let itemList = itemCollection[i];
//     for (let x = 0; x < itemList.length; x++) {
//         let items = itemList[x];
//         alert(items);
//     }
// }

// function addCalc(n1, n2) {
//     let result = n1 + n2;
//     alert(result);
// }

// addCalc(5, 9);


// function discount(price, discAmount = 10) {
//     let disPrice = price * (100 - discAmount) / 100;
//     alert(`Your new price is ${disPrice}`);
// }
// discount(prompt("How much is the item?"));


// class Person {
//     constructor (name, dob){
//         this.name = name;
//         this.dob = dob;
//     }
//     sayName() {
//         return(`Hi. My name is ${this.name} and I was born on ${this.dob}`);
//     }
// }
// let Kenny = new Person("Kenny Ogbogu", "November 5th");
// alert(Kenny.sayName());


// const Person = {
//     name: "Kenny", surname: "Ogbogu", age: 32, hobby: ["reading", "gaming", "drawing"],
//     address: "12 Rosamond street, Lagos", height: 6.4, 
//     car: {
//         name: "Toyota", price: "N2,000,000"
//     },

//     walk: () => alert(`${Person.name} ${Person.surname}, who is aged ${Person.age} years, 
//     and has a height of ${Person.height} feet, has a number of hobbies like 
//     ${Person.hobby} and lives at ${Person.address}. 
//     He bought a ${Person.car.name} car for ${Person.car.price} from ${Person.bank}`),

//     logHello: function(){
//         alert("Hello World")
//     }
// }

// alert( Object.keys(Person) );

// alert( Object.values(Person) );

// const Human = [1, 25, 32, 54, 8];

// alert(JSON.stringify(Human));

// let helloString = "how,are,you";
// console.log(helloString.split(","));

// let helloString = '{"name": "Kenny", "age": 28, "eyeColor": "brown"}';
// console.log(JSON.parse(helloString));



// const Man = {
//     name: "Kenny", age: 40, sex: "male"
// }

// alert(typeof(Man.age));



// Person.age = 40;
// Person.bank = "GTB"

// Person.walk();

// Person.logHello();

// const today = new Date();
// alert(today);

// getDate();
// alert(getDate);

// function logHello() {
//     alert("Hello World")
// }

// logHello();

// logHello = () => alert("Hello World");

// logHello();

// var myString = '{"favoriteFood":"Pizza","hobby":"Coding"}';
// console.log(JSON.parse(myString));


// class Person1 {
//     constructor(name, age, height, address, hobby, car){
//         this.name = name;
//         this.age = age;
//         this.height = height;
//         this.address = address;
//         this.hobby = hobby;
//         this.car = car;
//     }
// }
// let NewMan = new Person1("Kenny", 30, 6.4, "12 Rosamond Street, Lagos", ["Drawing", "Writing", "Gaming"], "Toyota Camry");
// alert(JSON.stringify(NewMan));
// console.log(NewMan);


// class Car {
//       constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
    
//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//         }
//     }

//     let myCar = new Car("Ford", 2014);
//     document.getElementById("demo").innerHTML =
//     "My car is " + myCar.age() + " year old.";

// const d = new Date(year);
// const d = new Date(8, 11, 24, 10, 33, 30, 0);
// const d = new Date("October 13, 2014 11:13:00");
// const d = new Date();

// alert(d);

// class Person {
//     constructor(name, hairColor){
//     this.name = name;
//     this.hair = hairColor;
//     }
//     firstDescribe(){
//         return(`My name is ${this.name} and I have ${this.hairColor} hair.`);
//     }
// }

// class Man extends Person {
//     constructor(name, hairColor, height, hairType){
//         super(name);
//         this.height = height;
//         this.hairType = hairType;
//         this.hairColor = hairColor;
//         }
//         mainDescribe(){
//             return(`${this.firstDescribe()} Also, I am ${this.height} feet tall and I have ${this.hairType} hair.`);
//         }
// }

// let boy = new Man("Kenny", "Black", 6.4, "Afro");
// alert(boy.mainDescribe());





// I was trying out something with prompts

// let name = prompt("What is your name?");
// let hairColor = prompt("What is the color of your hair?");
// let height = prompt("How tall are you?");
// let hairType = prompt("What type of hair do you have?");

// let boy1 = {name, hairColor, height, hairType}


// const People = {
//     name: "Kenny",
//     age: 32,
//     address: "12 Rosamond Street, Lagos"
// }
// const {name, age, address} = People;
// alert(`My name is ${name}, I am ${age} years old, and I live at ${address}`);

// const heading = document.getElementById("heading");
// console.log(heading);
// // alert(heading);

// const pst = document.getElementsByTagName("p");
// console.log(pst);


// let firstPara = document.getElementById("firstPara");
// let p1 = document.getElementById("p1");
// let p2 = document.getElementById("p2");
// let p3 = document.getElementById("p3");
// let p4 = document.getElementById("p4");
// let newPara = document.createElement("p");
// let text = document.createTextNode("Welcome to Javascript.");

// newPara.appendChild(text);
// firstPara.appendChild(newPara);


// p1.style.color = "Blue";
// firstPara.style.backgroundColor = "pink";



// window.navigator.userAgent;
// window.alert("Hello World");
// window.confirm("Do you wish to continue?");

// function alertbox() {
//     alert("It's quiz time!");
//     let timer = setTimeout(timing, 3000)
// }

// alertbox();





// function alertbox() {
//     alert("It's quiz time!");
// }
// let callAlert = setInterval(alertbox, 5000);
// window.clearInterval(callAlert);

// function myFunction(a, b) {  return a * b;}
// let text = myFunction.toString();
// alert(text);


// let button = document.getElementById("counter");
// let count = document.getElementById("count");
// let pos = 0;

// button.addEventListener("click", clickMe, false);
// function clickMe() {
//     count.innerHTML = ++pos;
// }





// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo1").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }













// let currentYear = new Date();

// alert(currentYear.getFullYear());










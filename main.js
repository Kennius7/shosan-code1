// const {data} = require("./dataSample");
// const {data22} = require("./sample2");
const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");


// data.map((e) => {
//     const aboutMe = `My name is ${e.name}, I am ${e.age} years old, and I am ${e.complexion} in complexion.`;
//     console.log(aboutMe);
// })

// data22.map((d) => {
//     const myBiodata = `My name is ${d.name}, I'm ${d.age} years old, I'm ${d.height} feet tall, I weigh ${d.weight}, and I live at No. ${d.address}.`
//     console.log(myBiodata);
// })

// let pathTwo = path.join(__dirname, "newstudy.txt");
// console.log(pathTwo);

// let readPathTwo = fs.readFileSync(pathTwo, "utf-8");
// console.log(readPathTwo);


// let createFiletwo = fs.writeFileSync("anotherStudy.txt", "I believe that all things work together for good.", "utf-8");
// console.log(createFiletwo);

// let createFileOne = fs.writeFileSync("anotherStudy.html", "I believe that all things work together for good.", "utf-8");
// console.log(createFileOne);


// fs.readFile("anotherStudy.html", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

//   fs.writeFile('newMessageOther.txt', "Thank you very much", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });


//fs.unlink() used to delete a file or link
//fs.rmdir() used to delete a folder or directory
//fs.rm() used to delete either a file or directory


//fs.mkdir() used to create a folder or directory

//   Assignment: create other methods using syncronous and asyncronous.
//   Methods are creating a file, deleting a file, creating a folder, deleting a folder,
//   appending to a file, move fill content,

//   

const shosanPath = path.join(__dirname, "newFile.txt");

// fs.promises
// .writeFile(shosanPath, "This is a very new class, so get ready.")
// .then(() => {
//   console.log(`A new file ${shosanPath} has been successfully written`);
// })
// .catch((err) => {
//   console.log(err)
// })

// fs.promises
// .appendFile(shosanPath, " Also, I like coding, though I haven't learned much.")
// .then(() => {
//   console.log(`${shosanPath} has been successfully appended to`);
// })
// .catch((err) => {
//   console.log(err)
// })




//Async/Await functions in Node.js
// const pathsss = path.join(__dirname, "async_await.txt")

const readFileAsync = async (path) => {
  try {
    const readFile = await fs.readFileSync(shosanPath, "utf-8")
    console.log(readFile);
  } catch (error) {
    console.log(error);
  }
}

readFileAsync();








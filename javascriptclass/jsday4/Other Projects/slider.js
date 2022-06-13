const staffData = [
    {
    display: "img/shosan.jpg",
    userName: "Shosan Boggs",
    desc: "CEO of Shosan Enterprises",
    idNumber: "1"
    },
    {
    display: "img/jinchu.jpg",
    userName: "Jinchu Shinsei",
    desc: "COO and Financial Secretary of Shosan Enterprises",
    idNumber: "2"
    },
    {
    display: "img/sarah.jpg",
    userName: "Sarah Williams",
    desc: "Head of Board of Trustees of Shosan Enterprises",
    idNumber: "3"
    },
    {
    display: "img/kara.jpg",
    userName: "Kara Boggs",
    desc: "Manager of Shosan Enterprises",
    idNumber: "4"
    }
]

let numLoop = 0;

function validate() {
    if(document.myForm1.username.value == ""){
        alert("Field cannot be empty")
    }
    else if(document.myForm1.username.value == "shosanboggs"){
        alert("Access Granted!")
    }
    else if(document.myForm1.username.value !== "shosanboggs"){
        alert("Wrong Username!")
    }
}


let webTimer = document.getElementById("timer");
let x = 0;
timer = () => {
    x++;
    webTimer.innerHTML = x;
    return;
}

let setInt1;

function myTimer() {
    setInt1 = setInterval(timer, 1000);
}


let clearTime = document.getElementById("clearTimer");

function pauseCount () {
    clearInterval(setInt1);
}

function stopCount () {
    clearInterval(setInt1);
    webTimer.innerHTML = 0;
    setTimeout(() => {
        x = 0;
    }, 1000);
    setTimeout(() => {
        webTimer.innerHTML = "";
    }, 2000);
}



window.addEventListener("DOMContentLoaded", function () {
    staffGen();
})

let picSlot = document.getElementById("picBackGround");
let staffName = document.getElementById("staffName");
let desc = document.getElementById("desc");
let serialNum = document.getElementById("sn");
let leftButton = document.getElementById("leftBtn");
let rightButton = document.getElementById("rightBtn");
let faceBookLink = document.getElementById("fb")

function staffGen() {
    picSlot.src = staffData[numLoop].display;
    staffName.textContent = staffData[numLoop].userName;
    desc.textContent = staffData[numLoop].desc;
    serialNum.textContent = staffData[numLoop].idNumber;
}

leftButton.addEventListener("click", function () {
    numLoop--
    if (numLoop < 0){
        numLoop = staffData.length - 1;
    }
    staffGen();
})

rightButton.addEventListener("click", function () {
    numLoop++
    if (numLoop > staffData.length - 1){
        numLoop = 0;
    }
    staffGen();
})

faceBookLink.addEventListener("click", function (event) {
    event.preventDefault();
})

// let presentTime = new Date();
// alert(presentTime.getDate());



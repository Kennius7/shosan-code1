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

window.addEventListener("DOMContentLoaded", function () {
    staffGen();
})

let picSlot = document.getElementById("picBackGround");
let staffName = document.getElementById("staffName");
let desc = document.getElementById("desc");
let serialNum = document.getElementById("sn");
let leftButton = document.getElementById("leftBtn");
let rightButton = document.getElementById("rightBtn");

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

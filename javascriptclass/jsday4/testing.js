let FULL_NAME = document.getElementById("fullName");
const SUBMIT_BUTTON = document.getElementById("clickSubmit");
const FORM_SUBMIT = document.getElementById("formId");
const PRINT_NAME = document.getElementById("printName1");
const startTimer11 = document.getElementById("timer111");





testValidate = () => {
    if (document.testForm.testInput.value == "") {
        event.preventDefault();
        console.log("Error");
    }
    if (document.testForm.testInput.value != "") {
        localStorage.setItem("nameValue", FULL_NAME.value);
        console.log("Success");
    }
}


function pagePrinter () {
    PRINT_NAME.innerHTML = localStorage.getItem("nameValue");
    console.log(localStorage.getItem("nameValue"));
}




// startTimer11.innerHTML = "Test this";

let f = 0;
let sec = Math.floor(f % 3600 % 60);
let mins = Math.floor(f % 3600 / 60);
let hrs = Math.floor(f / 3600);
let setInt5 = 0;

startPageTimer = () => {
    setInt5 = setInterval(() => {
        f++;
        let displayTimer1 = `0${hrs} : 0${mins} : 0${sec}`
        let displayTimer2 = `0${hrs} : ${mins} : 0${sec}`
        let displayTimer3 = `0${hrs} : ${mins} : ${sec}`
        let displayTimer4 = `0${hrs} : 0${mins} : ${sec}`
        let displayTimer5 = `${hrs} : 0${mins} : 0${sec}`
        let displayTimer6 = `${hrs} : ${mins} : 0${sec}`
        let displayTimer7 = `${hrs} : ${mins} : ${sec}`
        let displayTimer8 = `${hrs} : 0${mins} : ${sec}`

        if (hrs < 10 && mins < 10 && sec < 10) {
            startTimer11.innerHTML = displayTimer1;    
        }
        else if (hrs < 10 && mins > 9 && sec < 10) {
            startTimer11.innerHTML = displayTimer2;
        }
        else if (hrs < 10 && mins > 9 && sec > 9) {
            startTimer11.innerHTML = displayTimer3;
        }
        else if (hrs < 10 && mins < 10 && sec > 9) {
            startTimer11.innerHTML = displayTimer4;
        }
        else if (hrs > 9 && mins < 10 && sec < 10) {
            startTimer11.innerHTML = displayTimer5;    
        }
        else if (hrs > 9 && mins > 9 && sec < 10) {
            startTimer11.innerHTML = displayTimer6;
        }
        else if (hrs > 9 && mins > 9 && sec > 9) {
            startTimer11.innerHTML = displayTimer7;
        }
        else if (hrs > 9 && mins < 10 && sec > 9) {
            startTimer11.innerHTML = displayTimer8;
        } 
    }, 1000);  
}
startPageTimer()






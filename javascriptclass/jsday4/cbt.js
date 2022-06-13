const examData = [
    {question: "1. What is the capital of Argentina?",
     optionA: "1. Montevideo",
     optionB: "2. Buenos Aires",
     optionC: "3. Maracana",
     optionD: "4. Abuja",
     correctAnswer: "2. Buenos Aires"  
},
    {question: "2. The American civil war started in the year.....?",
     optionA: "1. 1776",
     optionB: "2. 1886",
     optionC: "3. 1793",
     optionD: "4. 1861",
     correctAnswer: "4. 1861"  
},
    {question: "3. A quantity in physics that needs both magnitude and direction for description is called a ________ quantity?",
     optionA: "1. Scalar",
     optionB: "2. Linear",
     optionC: "3. Vector",
     optionD: "4. Boolean",
     correctAnswer: "3. Vector"  
},
{question: "4. What was the estimated population of China as at 2020?",
     optionA: "1. 1.6 Billion",
     optionB: "2. 1.8 Million",
     optionC: "3. 1.4 Billion",
     optionD: "4. 800 Million",
     correctAnswer: "3. 1.4 Billion"  
},
    {question: "5. The largest planet in our solar system is...?",
     optionA: "1. Saturn",
     optionB: "2. Neptune",
     optionC: "3. Jupiter",
     optionD: "4. Uranus",
     correctAnswer: "3. Jupiter"  
},
    {question: "6. Who was the second governor general of Nigeria?",
     optionA: "1. Sir James Wilson Robertson",
     optionB: "2. Sir Hugh Clifford",
     optionC: "3. Lord Lugard",
     optionD: "4. Nnamdi Azikiwe",
     correctAnswer: "1. Sir James Wilson Robertson"  
}
]


const errMsg2 = document.getElementById("passErrorMsg");
const examQuestion = document.getElementById("question");
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
const submitButton = document.getElementById("submit");
const examOptionA = document.getElementById("opA");
const examOptionB = document.getElementById("opB");
const examOptionC = document.getElementById("opC");
const examOptionD = document.getElementById("opD");

const examTimer = document.getElementById("timer1");
const startTimer11 = document.getElementById("startTimer");
const quizWarnText = document.getElementById("warnText");
const quizWarnText22 = document.getElementById("warnText2");
const scoreTextUpload = document.getElementById("scoreText");
const fullNameValue = document.getElementById("fullName");
const scorePrint = document.getElementById("scorePrintOut");
const scoreButton = document.getElementById("scoreBtn");





passwordAlertTimeOut = () => {
    setTimeout(() => {
        errMsg2.innerHTML = "<span class='text-light'>blank</span>";
    }, 3000)
};

let currentQuestion = 0;
loadExam = () => {
    let myExam = examData[currentQuestion];
    examQuestion.innerHTML = myExam.question;
    examOptionA.innerHTML = myExam.optionA;
    examOptionB.innerHTML = myExam.optionB;
    examOptionC.innerHTML = myExam.optionC;
    examOptionD.innerHTML = myExam.optionD;  
};


cbtValidate = () => {
    function errBgMsgWhite() {
        errMsg2.innerHTML = "<div class='text-light'>blank</div>";
    }
    errBgMsgWhite();
    if(document.cbtForm.emailForm.value == "" && document.cbtForm.passwordForm.value == "" && fullNameValue.value == ""){
        errMsg2.innerHTML = "All fields must be filled!" 
        event.preventDefault();
        passwordAlertTimeOut();
        }
    else if(document.cbtForm.emailForm.value == "" && document.cbtForm.passwordForm.value != "exam" && fullNameValue.value == ""){
        errMsg2.innerHTML = "All fields must be filled!" 
        event.preventDefault();
        passwordAlertTimeOut();
        }
    else if(document.cbtForm.emailForm.value != "" && 
        document.cbtForm.passwordForm.value != "exam" && document.cbtForm.passwordForm.value != "" && 
        fullNameValue.value != ""){
        errMsg2.innerHTML = "Incorrect Password!"
        event.preventDefault();
        passwordAlertTimeOut();
        }
    else if(document.cbtForm.emailForm.value == "" || document.cbtForm.passwordForm.value == "" || fullNameValue.value == ""){
        errMsg2.innerHTML = "All fields must be filled!"
        event.preventDefault();
        passwordAlertTimeOut();
        }
    else{
        localStorage.setItem("nameVal", fullNameValue.value);
        console.log("Success");
        }
};

let time1 = 0;
printScore = () => {
    setInterval(() => {
        time1++;
        scorePrint.innerHTML = `${localStorage.getItem("nameVal")}, <span class="text-light">Your exam score is</span> ${localStorage.getItem("scoreVal")}/30`;
    }, 1000);
    
}
printScore();



// let d = 0;
// let sec = Math.floor(d % 3600 % 60);
// let mins = Math.floor(d % 3600 / 60);
// let hrs = Math.floor(d / 3600);
// let setInt2 = 0;


// startPageTimer = () => {
//     setInt2 = setInterval(() => {
//         d++;
//         let displayTimer1 = `0${hrs} : 0${mins} : 0${sec}`
//         let displayTimer2 = `0${hrs} : ${mins} : 0${sec}`
//         let displayTimer3 = `0${hrs} : ${mins} : ${sec}`
//         let displayTimer4 = `0${hrs} : 0${mins} : ${sec}`
//         let displayTimer5 = `${hrs} : 0${mins} : 0${sec}`
//         let displayTimer6 = `${hrs} : ${mins} : 0${sec}`
//         let displayTimer7 = `${hrs} : ${mins} : ${sec}`
//         let displayTimer8 = `${hrs} : 0${mins} : ${sec}`

//         if (hrs < 10 && mins < 10 && sec < 10) {
//             startTimer11.innerHTML = displayTimer1;  
//         }
//         else if (hrs < 10 && mins > 9 && sec < 10) {
//             startTimer11.innerHTML = displayTimer2;
//         }
//         else if (hrs < 10 && mins > 9 && sec > 9) {
//             startTimer11.innerHTML = displayTimer3;
//         }
//         else if (hrs < 10 && mins < 10 && sec > 9) {
//             startTimer11.innerHTML = displayTimer4;
//         }
//         else if (hrs > 9 && mins < 10 && sec < 10) {
//             startTimer11.innerHTML = displayTimer5;    
//         }
//         else if (hrs > 9 && mins > 9 && sec < 10) {
//             startTimer11.innerHTML = displayTimer6;
//         }
//         else if (hrs > 9 && mins > 9 && sec > 9) {
//             startTimer11.innerHTML = displayTimer7;
//         }
//         else if (hrs > 9 && mins < 10 && sec > 9) {
//             startTimer11.innerHTML = displayTimer8;
//         } 
//     }, 1000);  
// }
// startPageTimer()
// clearTimerCBT = () => {
//     event.preventDefault();
//     clearInterval(setInt2);
//     startTimer11.innerHTML = "START CBT"
//     setTimeout(() => {
//         window.location.href = "quizPage.html"
//     }, 5000);
// }



let b = 100;
let sec2 = 0;
let mins2 = 0;
let hrs2 = 0;
let setInt3 = 0;

examCountDownTimer = () => {
   setInt3 = setInterval(() => {
    b--;
    quizWarnText.innerHTML = `You have <span style="color: goldenrod">${hrs2} hours, ${mins2} minutes and ${sec2} 
    seconds</span> left, after which your exam will be terminated and you will be directed to your score page.`
    sec2 = Math.floor(b % 3600 % 60 );
    mins2 = Math.floor(b % 3600 / 60);
    hrs2 = Math.floor(b / 3600);

    let displayTimer1 = `0${hrs2} : 0${mins2} : 0${sec2}`
    let displayTimer2 = `0${hrs2} : ${mins2} : 0${sec2}`
    let displayTimer3 = `0${hrs2} : ${mins2} : ${sec2}`
    let displayTimer4 = `0${hrs2} : 0${mins2} : ${sec2}`
    let displayTimer5 = `${hrs2} : 0${mins2} : 0${sec2}`
    let displayTimer6 = `${hrs2} : ${mins2} : 0${sec2}`
    let displayTimer7 = `${hrs2} : ${mins2} : ${sec2}`
    let displayTimer8 = `${hrs2} : 0${mins2} : ${sec2}`

    if (hrs2 < 10 && mins2 < 10 && sec2 < 10) {
        examTimer.innerHTML = displayTimer1;    
    }
    else if (hrs2 < 10 && mins2 > 9 && sec2 < 10) {
        examTimer.innerHTML = displayTimer2;
    }
    else if (hrs2 < 10 && mins2 > 9 && sec2 > 9) {
        examTimer.innerHTML = displayTimer3;
    }
    else if (hrs2 < 10 && mins2 < 10 && sec2 > 9) {
        examTimer.innerHTML = displayTimer4;
    }
    else if (hrs2 > 9 && mins2 < 10 && sec2 < 10) {
        examTimer.innerHTML = displayTimer5;    
    }
    else if (hrs2 > 9 && mins2 > 9 && sec2 < 10) {
        examTimer.innerHTML = displayTimer6;
    }
    else if (hrs2 > 9 && mins2 > 9 && sec2 > 9) {
        examTimer.innerHTML = displayTimer7;
    }
    else if (hrs2 > 9 && mins2 < 10 && sec2 > 9) {
        examTimer.innerHTML = displayTimer8;
    }
   }, 1000);

   setTimeout(() => {
       clearInterval(setInt3);
       examTimer.innerHTML = "Time Up!"
   }, 100000);
   setTimeout(() => {
    examTimer.innerHTML = ""
    window.location.href = "scorePage.html";
}, 103000);
}
examCountDownTimer();





let option = 0;
let examOptionAvalue = 0;
let examOptionBvalue = 0;
let examOptionCvalue = 0;
let examOptionDvalue = 0;
let examScore = 0;


optionSelect1 = () => {
    option = 1;
    examOptionAvalue = examData[currentQuestion].optionA;
    examOptionBvalue = "";
    examOptionCvalue = "";
    examOptionDvalue = "";
    examOptionA.style.backgroundColor = "rgb(219, 144, 32)";
    examOptionB.style.backgroundColor = "black";
    examOptionC.style.backgroundColor = "black";
    examOptionD.style.backgroundColor = "black";
}
optionSelect2 = () => {
    option = 1;
    examOptionBvalue = examData[currentQuestion].optionB;
    examOptionAvalue = "";
    examOptionCvalue = "";
    examOptionDvalue = "";
    examOptionB.style.backgroundColor = "rgb(219, 144, 32)";
    examOptionA.style.backgroundColor = "black";
    examOptionC.style.backgroundColor = "black";
    examOptionD.style.backgroundColor = "black";
}
optionSelect3 = () => {
    option = 1;
    examOptionCvalue = examData[currentQuestion].optionC;
    examOptionBvalue = "";
    examOptionAvalue = "";
    examOptionDvalue = "";
    examOptionC.style.backgroundColor = "rgb(219, 144, 32)";
    examOptionB.style.backgroundColor = "black";
    examOptionA.style.backgroundColor = "black";
    examOptionD.style.backgroundColor = "black";
}
optionSelect4 = () => {
    option = 1;
    examOptionDvalue = examData[currentQuestion].optionD;
    examOptionBvalue = "";
    examOptionCvalue = "";
    examOptionAvalue = "";
    examOptionD.style.backgroundColor = "rgb(219, 144, 32)";
    examOptionB.style.backgroundColor = "black";
    examOptionC.style.backgroundColor = "black";
    examOptionA.style.backgroundColor = "black";
}


loadExam();
submitButton.style.display = "none";

nextButton.addEventListener("click", function () {
    if (currentQuestion < examData.length && option == 0) {
        alert("You must select an option");
    }


  
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionAvalue == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 5;
        option = 0;
        localStorage.setItem(`selectedOption${currentQuestion}`, examOptionAvalue);
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionBvalue == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 5;
        option = 0;
        localStorage.setItem(`selectedOption${currentQuestion}`, examOptionBvalue);
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionCvalue == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 5;
        option = 0;
        localStorage.setItem(`selectedOption${currentQuestion}`, examOptionCvalue);
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionDvalue == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 5;
        option = 0;
        localStorage.setItem(`selectedOption${currentQuestion}`, examOptionDvalue);
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }



    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionAvalue == examData[currentQuestion].correctAnswer && 
        localStorage.getItem(`selectedOption${currentQuestion}`) == examOptionAvalue){
        submitButton.style.display = "none";
        examScore += 0;
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionBvalue == examData[currentQuestion].correctAnswer && 
        localStorage.getItem(`selectedOption${currentQuestion}`) == examOptionBvalue){
        submitButton.style.display = "none";
        examScore += 0;
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionCvalue == examData[currentQuestion].correctAnswer && 
        localStorage.getItem(`selectedOption${currentQuestion}`) == examOptionCvalue){
        submitButton.style.display = "none";
        examScore += 0;
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionDvalue == examData[currentQuestion].correctAnswer && 
        localStorage.getItem(`selectedOption${currentQuestion}`) == examOptionDvalue){
        submitButton.style.display = "none";
        examScore += 0;
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }



    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionAvalue != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 0;
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionBvalue != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 0;
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionCvalue != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 0;
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionDvalue != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 0;
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }



    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionAvalue != examData[currentQuestion].correctAnswer && 
        localStorage.getItem(`selectedOption${currentQuestion}`) == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore -= 5;
        localStorage.removeItem(`selectedOption${currentQuestion}`);
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionBvalue != examData[currentQuestion].correctAnswer && 
        localStorage.getItem(`selectedOption${currentQuestion}`) == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore -= 5;
        localStorage.removeItem(`selectedOption${currentQuestion}`);
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionCvalue != examData[currentQuestion].correctAnswer && 
        localStorage.getItem(`selectedOption${currentQuestion}`) == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore -= 5;
        localStorage.removeItem(`selectedOption${currentQuestion}`);
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionDvalue != examData[currentQuestion].correctAnswer && 
        localStorage.getItem(`selectedOption${currentQuestion}`) == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore -= 5;
        localStorage.removeItem(`selectedOption${currentQuestion}`);
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }



    else if (currentQuestion == examData.length - 1 && option == 1 &&
        examOptionAvalue == examData[currentQuestion].correctAnswer){
        examScore += 5;
        localStorage.setItem(`selectedOption${currentQuestion}`, examOptionAvalue);
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        submitButton.style.display = "block";
    }
    else if (currentQuestion == examData.length - 1 && option == 1 &&
        examOptionBvalue == examData[currentQuestion].correctAnswer){
        examScore += 5;
        localStorage.setItem(`selectedOption${currentQuestion}`, examOptionBvalue);
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        submitButton.style.display = "block";
    }
    else if (currentQuestion == examData.length - 1 && option == 1 &&
        examOptionCvalue == examData[currentQuestion].correctAnswer){
        examScore += 5;
        localStorage.setItem(`selectedOption${currentQuestion}`, examOptionCvalue);
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        submitButton.style.display = "block";
    }
    else if (currentQuestion == examData.length - 1 && option == 1 &&
        examOptionDvalue == examData[currentQuestion].correctAnswer){
        examScore += 5;
        localStorage.setItem(`selectedOption${currentQuestion}`, examOptionDvalue);
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        submitButton.style.display = "block";
    }

    else if (currentQuestion == examData.length - 1 && option == 1){
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        submitButton.style.display = "block";
    }

});

prevButton.addEventListener("click", function () {
    if (currentQuestion < examData.length && currentQuestion > 0){
        submitButton.style.display = "none";
        currentQuestion--;
        option = 0;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion < examData.length + 1){
        submitButton.style.display = "none";
        currentQuestion--;
        option = 0;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion == examData.length){
        submitButton.style.display = "none";
        currentQuestion--;
        option = 0;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`;
        examOptionA.style.backgroundColor = "black";
        examOptionB.style.backgroundColor = "black";
        examOptionC.style.backgroundColor = "black";
        examOptionD.style.backgroundColor = "black";
        loadExam();
    }
    else if (currentQuestion == 0) {
        window.location.href = "startPage.html"
    }
});

submitButton.addEventListener("click", function () {
    localStorage.setItem("scoreVal", examScore);
    localStorage.removeItem("selectedOption0");
    localStorage.removeItem("selectedOption1");
    localStorage.removeItem("selectedOption2");
    localStorage.removeItem("selectedOption3");
    localStorage.removeItem("selectedOption4");
    localStorage.removeItem("selectedOption5");
});










// function currentTime() {
//     let d = new Date();
//     examTimer.innerHTML=
//     d.getHours() + ":" +
//     d.getMinutes() + ":" +
//     d.getSeconds();
//     }




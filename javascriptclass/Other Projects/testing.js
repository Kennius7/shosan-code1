let FULL_NAME = document.getElementById("fullName1");
const SUBMIT_BUTTON = document.getElementById("clickSubmit");
const FORM_SUBMIT = document.getElementById("formId");
const PRINT_NAME = document.getElementById("printName1");
const startTimer11 = document.getElementById("timer111");


const examQuestion = document.getElementById("question");
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
const submitButton = document.getElementById("submit");
const examOptionA = document.getElementById("opA");
const examOptionB = document.getElementById("opB");
const examOptionC = document.getElementById("opC");
const examOptionD = document.getElementById("opD");
const quizWarnText = document.getElementById("warnText");
const scoreTextUpload = document.getElementById("scoreText");
const fullNameValue = document.getElementById("fullName");
const scorePrint1 = document.getElementById("scorePrintOut");






testValidate = () => {
    if (document.testForm.testInput.value == "") {
        event.preventDefault();
        alert("Fill in your name");
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





//Exam object database testing
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
const examOptionsDB = []


let currentQuestion = 0;
loadExam = () => {
    let myExam = examData[currentQuestion];
    examQuestion.innerHTML = myExam.question;
    examOptionA.innerHTML = myExam.optionA;
    examOptionB.innerHTML = myExam.optionB;
    examOptionC.innerHTML = myExam.optionC;
    examOptionD.innerHTML = myExam.optionD;  
};

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
    examOptionA.style.backgroundImage = "linear-gradient(rgba(92, 65, 6, 0.4), rgb(92, 65, 6, 1.0))";
    examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
    examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
    examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
}
optionSelect2 = () => {
    option = 1;
    examOptionBvalue = examData[currentQuestion].optionB;
    examOptionAvalue = "";
    examOptionCvalue = "";
    examOptionDvalue = "";
    examOptionB.style.backgroundImage = "linear-gradient(rgba(92, 65, 6, 0.4), rgb(92, 65, 6, 1.0))";
    examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
    examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
    examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
}
optionSelect3 = () => {
    option = 1;
    examOptionCvalue = examData[currentQuestion].optionC;
    examOptionBvalue = "";
    examOptionAvalue = "";
    examOptionDvalue = "";
    examOptionC.style.backgroundImage = "linear-gradient(rgba(92, 65, 6, 0.4), rgb(92, 65, 6, 1.0))";
    examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
    examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
    examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
}
optionSelect4 = () => {
    option = 1;
    examOptionDvalue = examData[currentQuestion].optionD;
    examOptionBvalue = "";
    examOptionCvalue = "";
    examOptionAvalue = "";
    examOptionD.style.backgroundImage = "linear-gradient(rgba(92, 65, 6, 0.4), rgb(92, 65, 6, 1.0))";
    examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
    examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
    examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
}


loadExam();
submitButton.style.display = "none";



scorePrint1.textContent = "Thanks";
scorePrint1.innerHTML = `<span class="text-info">${localStorage.getItem("nameValue")}</span>, your exam score is <span class="text-info">${localStorage.getItem("scoreVal")}/30.</span>`;





nextButton.addEventListener("click", function () {
    if (currentQuestion < examData.length && option == 0) {
        alert("You must select an option");
    }


    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionAvalue == examData[currentQuestion].correctAnswer && examOptionsDB[currentQuestion] != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 5;
        option = 0;
        examOptionsDB[currentQuestion] = examData[currentQuestion].correctAnswer;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionBvalue == examData[currentQuestion].correctAnswer && examOptionsDB[currentQuestion] != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 5;
        option = 0;
        examOptionsDB[currentQuestion] = examData[currentQuestion].correctAnswer;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionCvalue == examData[currentQuestion].correctAnswer && examOptionsDB[currentQuestion] != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 5;
        option = 0;
        examOptionsDB[currentQuestion] = examData[currentQuestion].correctAnswer;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionDvalue == examData[currentQuestion].correctAnswer && examOptionsDB[currentQuestion] != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examScore += 5;
        option = 0;
        examOptionsDB[currentQuestion] = examData[currentQuestion].correctAnswer;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }



    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionAvalue == examData[currentQuestion].correctAnswer && 
        examOptionsDB[currentQuestion] == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
       
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionBvalue == examData[currentQuestion].correctAnswer && 
        examOptionsDB[currentQuestion] == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
       
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionCvalue == examData[currentQuestion].correctAnswer && 
        examOptionsDB[currentQuestion] == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
       
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionDvalue == examData[currentQuestion].correctAnswer && 
        examOptionsDB[currentQuestion] == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
       
        option = 0;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }



    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionAvalue != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        
        option = 0;
        examOptionsDB[currentQuestion] = null;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionBvalue != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        
        option = 0;
        examOptionsDB[currentQuestion] = null;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionCvalue != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        
        option = 0;
        examOptionsDB[currentQuestion] = null;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionDvalue != examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        
        option = 0;
        examOptionsDB[currentQuestion] = null;
        currentQuestion++;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }



    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionAvalue != examData[currentQuestion].correctAnswer && examOptionsDB[currentQuestion] == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examOptionsDB[currentQuestion] = null;
        examScore =- 5;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        option = 0;
        currentQuestion++;
       
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionBvalue != examData[currentQuestion].correctAnswer && examOptionsDB[currentQuestion] == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examOptionsDB[currentQuestion] = null;
        examScore =- 5;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        option = 0;
        currentQuestion++;
        
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionCvalue != examData[currentQuestion].correctAnswer && examOptionsDB[currentQuestion] == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examOptionsDB[currentQuestion] = null;
        examScore =- 5;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        option = 0;
        currentQuestion++;
        
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }
    else if (currentQuestion >= 0 && currentQuestion < examData.length - 1 && option == 1 && 
        examOptionDvalue != examData[currentQuestion].correctAnswer && examOptionsDB[currentQuestion] == examData[currentQuestion].correctAnswer){
        submitButton.style.display = "none";
        examOptionsDB[currentQuestion] = null;
        examScore =- 5;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        option = 0;
        currentQuestion++;
        
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
        console.log(examOptionsDB);
    }



    else if (currentQuestion == examData.length - 1 && option == 1 &&
        examOptionAvalue == examData[currentQuestion].correctAnswer){
        examScore += 5;
        examOptionsDB[currentQuestion] = examData[currentQuestion].correctAnswer;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        submitButton.style.display = "block";
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }
    else if (currentQuestion == examData.length - 1 && option == 1 &&
        examOptionBvalue == examData[currentQuestion].correctAnswer){
        examScore += 5;
        examOptionsDB[currentQuestion] = examData[currentQuestion].correctAnswer;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        submitButton.style.display = "block";
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }
    else if (currentQuestion == examData.length - 1 && option == 1 &&
        examOptionCvalue == examData[currentQuestion].correctAnswer){
        examScore += 5;
        examOptionsDB[currentQuestion] = examData[currentQuestion].correctAnswer;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        submitButton.style.display = "block";
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }
    else if (currentQuestion == examData.length - 1 && option == 1 &&
        examOptionDvalue == examData[currentQuestion].correctAnswer){
        examScore += 5;
        examOptionsDB[currentQuestion] = examData[currentQuestion].correctAnswer;
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        submitButton.style.display = "block";
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }

    else if (currentQuestion == examData.length - 1 && option == 1){
        scoreTextUpload.innerHTML = `Your score is ${examScore}`
        submitButton.style.display = "block";
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }

});

prevButton.addEventListener("click", function () {
    if (currentQuestion < examData.length && currentQuestion > 0){
        submitButton.style.display = "none";
        currentQuestion--;
        option = 0;
        examOptionA.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionB.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionC.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        examOptionD.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.4), rgb(2, 2, 2))";
        loadExam();
    }
    else if (currentQuestion == 0) {
        window.location.href = "startPage.html"
    }
});

submitButton.addEventListener("click", function () {
    localStorage.setItem("scoreVal", examScore);
});
















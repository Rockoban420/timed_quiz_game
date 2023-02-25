var timer = 60;
var game = false;
var progress = -1;
var timerEl = document.getElementById("timer");
var questionBox = document.getElementById("q");
var button1 = document.getElementById("a1");
var button2 = document.getElementById("a2");
var button3 = document.getElementById("a3");
var button4 = document.getElementById("a4");
const beginButton = document.getElementById("startButton");
var ulEl = document.getElementById("list");
ulEl.setAttribute("style", "display: none;");
const Questions = [
    {
    question: "Commonly used data types do NOT include:",
    answer1: "strings",
    answer2: "booleans",
    answer3: "alerts",
    answer4: "numbers",
    correctAnswer: "alerts"
},{
    question: "what is your power level1?",
    answer1: "im gay1",
    answer2: "im supper1",
    answer3: "lol1",
    answer4: "over 90001",
    correctAnswer: "im gay1"
},{
    question: "what is your power level2?",
    answer1: "im gay2",
    answer2: "im supper2",
    answer3: "lol2",
    answer4: "over 90002",
    correctAnswer: "lol2"

},{
    question: "what is your power level3?",
    answer1: "im gay3",
    answer2: "im supper3",
    answer3: "lol3",
    answer4: "over 90003",
    correctAnswer: "over 90003"
}
];

function setTime() {
  var timerInterval = setInterval(function() {
    timer--;
    timerEl.textContent = timer + " seconds left till gameover.";
    ulEl.setAttribute("style", "display: ");
    if (progress===-1){
        timer=60;
        questionBox.textContent = "press to start";
        beginButton.innerText = "start";
        ulEl.setAttribute("style", "display: none;");
    }
    if (progress===0){
        questionBox.textContent = Questions[0].question;
        button1.innerText = Questions[0].answer1;
        button2.innerText = Questions[0].answer2;
        button3.innerText = Questions[0].answer3;
        button4.innerText = Questions[0].answer4;
    }
    if (progress===1){
        questionBox.textContent = Questions[1].question;
        button1.innerText = Questions[1].answer1;
        button2.innerText = Questions[1].answer2;
        button3.innerText = Questions[1].answer3;
        button4.innerText = Questions[1].answer4;
    }
    if (progress===2){
        questionBox.textContent = Questions[2].question;
        button1.innerText = Questions[2].answer1;
        button2.innerText = Questions[2].answer2;
        button3.innerText = Questions[2].answer3;
        button4.innerText = Questions[2].answer4;
    }
    if (progress===3){
        questionBox.textContent = Questions[3].question;
        button1.innerText = Questions[3].answer1;
        button2.innerText = Questions[3].answer2;
        button3.innerText = Questions[3].answer3;
        button4.innerText = Questions[3].answer4;
    }

    if(timer <= 0) {
        questionBox.textContent = "You lost";
        game = false;
        clearInterval(timerInterval);
        ulEl.setAttribute("style", "display: none;");
        timerEl.textContent = "";
        button1.innerText = "";
        button2.innerText = "";
        button3.innerText = "";
        button4.innerText= "";
    }
  }, 1000);
};

function checkAnswer (event){
    if (progress===-1){
        progress++;
        beginButton.setAttribute("style", "display: none;")
    }
    else {
    if (progress===0){
    if (event.currentTarget.innerText=== Questions[0].correctAnswer){
        progress++;
        timer +=15;
    }
    else{
        progress++;
        timer -=15;
    }
    }
    else if (progress===1){
        if (event.currentTarget.innerText=== Questions[1].correctAnswer){
            progress++;
            timer +=15;
        }
        else{
            progress++;
            timer -=15;
        }
    }
    else if (progress===2){
        if (event.currentTarget.innerText=== Questions[2].correctAnswer){
            progress++;
            timer +=15;
        }
        else{
            progress++;
            timer -=15;
        }
    }
    else if (progress===3){
        if (event.currentTarget.innerText=== Questions[3].correctAnswer){
            progress++;
            timer +=15;
        }
        else{
            progress++;
            timer -=15;
        }
    }
}
};

setTime(game);

button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);
beginButton.addEventListener("click", checkAnswer);

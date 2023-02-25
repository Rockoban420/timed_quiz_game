var timer = 60;
var game = true;
var progress = 0;
var timerEl = document.getElementById("timer");
var questionBox = document.getElementById("q");
var button1 = document.getElementById("a1");
var button2 = document.getElementById("a2");
var button3 = document.getElementById("a3");
var button4 = document.getElementById("a4");
const Questions = [
    {
    question: "what is your power level0?",
    answer1: "im gay0",
    answer2: "im supper0",
    answer3: "lol0",
    answer4: "over 90000",
    correctAnswer: "over 90000"
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
    if (progress===0){
        questionBox.textContent = Questions[0].question;
        button1.innerHTML = Questions[0].answer1;
        button2.innerHTML = Questions[0].answer2;
        button3.innerHTML = Questions[0].answer3;
        button4.innerHTML = Questions[0].answer4;
    }
    if (progress===1){
        questionBox.textContent = Questions[1].question;
        button1.innerHTML = Questions[1].answer1;
        button2.innerHTML = Questions[1].answer2;
        button3.innerHTML = Questions[1].answer3;
        button4.innerHTML = Questions[1].answer4;
    }
    if (progress===2){
        questionBox.textContent = Questions[2].question;
        button1.innerHTML = Questions[2].answer1;
        button2.innerHTML = Questions[2].answer2;
        button3.innerHTML = Questions[2].answer3;
        button4.innerHTML = Questions[2].answer4;
    }
    if (progress===3){
        questionBox.textContent = Questions[3].question;
        button1.innerHTML = Questions[3].answer1;
        button2.innerHTML = Questions[3].answer2;
        button3.innerHTML = Questions[3].answer3;
        button4.innerHTML = Questions[3].answer4;
    }

    if(timer <= 0) {
        questionBox.textContent = "You lost";
        game = false;
        clearInterval(timerInterval);
        timerEl.textContent = "";
        button1.innerHTML = "";
        button2.innerHTML = "";
        button3.innerHTML = "";
        button4.innerHTML = "";
    }
  }, 1000);
};

function checkAnswer (event){
    if (progress===0){
    if (event.currentTarget.innerHTML=== Questions[0].correctAnswer){
        progress++;
        timer +=15;
    }
    else{
        progress++;
        timer -=15;
    }
    }
    else if (progress===1){
        if (event.currentTarget.innerHTML=== Questions[1].correctAnswer){
            progress++;
            timer +=15;
        }
        else{
            progress++;
            timer -=15;
        }
    }
    else if (progress===2){
        if (event.currentTarget.innerHTML=== Questions[2].correctAnswer){
            progress++;
            timer +=15;
        }
        else{
            progress++;
            timer -=15;
        }
    }
    else if (progress===3){
        if (event.currentTarget.innerHTML=== Questions[3].correctAnswer){
            progress++;
            timer +=15;
        }
        else{
            progress++;
            timer -=15;
        }
    }
};

setTime();

button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);
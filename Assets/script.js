var timer = 60;
var checkerTimer;
var game = true;
var score;
var progress = -1;
var timerEl = document.getElementById("timer");
var questionBox = document.getElementById("q");
var button1 = document.getElementById("a1");
var button2 = document.getElementById("a2");
var button3 = document.getElementById("a3");
var button4 = document.getElementById("a4");
var checker = document.getElementById("announcer");
const beginButton = document.getElementById("startButton");
var ulEl = document.getElementById("list");
ulEl.setAttribute("style", "display: none;");
const Questions = [
    {
    question: "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
    answer1 : "Hangar",
    answer2 : "Terminal",
    answer3 : "Concourse",
    answer4 : "Carousel",
    correctAnswer: "Carousel"
},{
    question: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
    answer1 : "Pocahontas",
    answer2 : "Sleeping Beauty",
    answer3 : "Cinderella",
    answer4 : "Elsa",
    correctAnswer: "Sleeping Beauty"
},{
    question: "The hammer and sickle is one of the most recognisable symbols of which political ideology?",
    answer1 : "Republicanism",
    answer2 : "Communism",
    answer3 : "Conservatism",
    answer4 : "Liberalism",
    correctAnswer: "Communism"

},{
    question: "Which toys have been marketed with the phrase “robots in disguise”?",
    answer1: "Bratz Dolls",
    answer2: "Sylvanian Families", 
    answer3: "Hatchimals",
    answer4: "Transformers",
    correctAnswer: "Transformers"
},{
    question: "What does the word loquacious mean?",
    answer1: "Angry",
    answer2: "Chatty",
    answer3: "Beautiful",
    answer4: "Shy",
    correctAnswer: "Chatty"
}
];

function setTime() {
  var timerInterval = setInterval(function() {
    timer--;
    timerEl.textContent = timer + " seconds left till gameover.";
    ulEl.setAttribute("style", "display: ");
    button1.setAttribute("style","background-color: ");
    button2.setAttribute("style","background-color: ");
    button3.setAttribute("style","background-color: ");
    button4.setAttribute("style","background-color: ");
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
    if (progress===4){
        questionBox.textContent = Questions[4].question;
        button1.innerText = Questions[4].answer1;
        button2.innerText = Questions[4].answer2;
        button3.innerText = Questions[4].answer3;
        button4.innerText = Questions[4].answer4;
    }
    // if (checkerTimer == checkerTimer+3){
    //     checkAnswer.textContent = "";
    // }
    if (game==false) {
        score = timer;
        questionBox.textContent = "game over";
        clearInterval(timerInterval);
        ulEl.setAttribute("style", "display: none;");
        timerEl.textContent = "";
        button1.innerText = "";
        button2.innerText = "";
        button3.innerText = "";
        button4.innerText= "";
    }

    if(timer <= 0) {
        questionBox.textContent = "You lost";
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
        if (event.currentTarget.innerText== Questions[0].correctAnswer){
            event.currentTarget.setAttribute("style","background-color: green;");
            progress++;
            timer +=15;
            checker.textContent = "Correct!"
            // checkerTimer = timer;
    }
        else{
            event.currentTarget.setAttribute("style","background-color: red;");
            progress++;
            timer -=15;
            checker.textContent = "Incorrect"
    }
    }
    else if (progress===1){
        if (event.currentTarget.innerText== Questions[1].correctAnswer){
            event.currentTarget.setAttribute("style","background-color: green;");
            progress++;
            timer +=15;
            checker.textContent = "Correct!"
        }
        else{
            event.currentTarget.setAttribute("style","background-color: red;");
            progress++;
            timer -=15;
            checker.textContent = "Incorrect"
        }
    }
    else if (progress===2){
        if (event.currentTarget.innerText== Questions[2].correctAnswer){
            event.currentTarget.setAttribute("style","background-color: green;");
            progress++;
            timer +=15;
            checker.textContent = "Correct!"
        }
        else{
            event.currentTarget.setAttribute("style","background-color: red;");
            progress++;
            timer -=15;
            checker.textContent = "Incorrect"
        }
    }
    else if (progress===3){
        if (event.currentTarget.innerText== Questions[3].correctAnswer){
            event.currentTarget.setAttribute("style","background-color: green;");
            progress++;
            timer +=15;
            checker.textContent = "Correct!"
        }
        else{
            event.currentTarget.setAttribute("style","background-color: red;");
            progress++;
            timer -=15;
            checker.textContent = "Incorrect"
        }
    }
    else if (progress===4){
        if (event.currentTarget.innerText== Questions[4].correctAnswer){
            event.currentTarget.setAttribute("style","background-color: green;");
            progress++;
            timer +=15;
            game = false;
        }
        else{
            event.currentTarget.setAttribute("style","background-color: red;");
            progress++;
            timer -=15;
            game = false;
        }
    }
}
};

setTime();

button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);
beginButton.addEventListener("click", checkAnswer);

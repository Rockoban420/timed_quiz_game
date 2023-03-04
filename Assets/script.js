var timer = 60;
var showHiScore = false;
var game = true;
var progress = -1;

// element getters

var timerEl = document.getElementById("timer");
var questionBox = document.getElementById("q");
var button1 = document.getElementById("a1");
var button2 = document.getElementById("a2");
var button3 = document.getElementById("a3");
var button4 = document.getElementById("a4");
var highScoreTransporter = document.getElementById("highScoresButton");
var checker = document.getElementById("announcer");

// element creaters

var initialsInput = document.createElement("input");
const submitButton = document.createElement("button");
var hiScoreDisplay = document.createElement("p");

// if a file exists it will get it and set it to the high score variable, otherwise it will create 
// an empty array of objects to store the scores

var highScores = JSON.parse(localStorage.getItem("highScore")) ?? [{}];

const beginButton = document.getElementById("startButton");
var ulEl = document.getElementById("list");
ulEl.setAttribute("style", "display: none;");

// defined array of objects with questions answers and correct answer

const Questions = [
    {
        question:
            "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
        answer1: "Hangar",
        answer2: "Terminal",
        answer3: "Concourse",
        answer4: "Carousel",
        correctAnswer: "Carousel",
    },
    {
        question:
            "Which Disney character famously leaves a glass slipper behind at a royal ball?",
        answer1: "Pocahontas",
        answer2: "Sleeping Beauty",
        answer3: "Cinderella",
        answer4: "Elsa",
        correctAnswer: "Sleeping Beauty",
    },
    {
        question:
            "The hammer and sickle is one of the most recognisable symbols of which political ideology?",
        answer1: "Republicanism",
        answer2: "Communism",
        answer3: "Conservatism",
        answer4: "Liberalism",
        correctAnswer: "Communism",
    },
    {
        question:
            "Which toys have been marketed with the phrase “robots in disguise”?",
        answer1: "Bratz Dolls",
        answer2: "Sylvanian Families",
        answer3: "Hatchimals",
        answer4: "Transformers",
        correctAnswer: "Transformers",
    },
    {
        question: "What does the word loquacious mean?",
        answer1: "Angry",
        answer2: "Chatty",
        answer3: "Beautiful",
        answer4: "Shy",
        correctAnswer: "Chatty",
    },
];

// Created timer interval, where most of the game takes place

function setTime() {
    var timerInterval = setInterval(function () {
        timer--;
        timerEl.setAttribute("style", "color: aliceblue;");
        timerEl.textContent = timer + " seconds left till gameover.";
        ulEl.setAttribute("style", "display: ");
        button1.setAttribute(
            "style",
            "margin-top: 1%; color:aliceblue; background-color: rgb(57, 14, 226); padding: 1%;"
        );
        button2.setAttribute(
            "style",
            "margin-top: 1%; color:aliceblue; background-color: rgb(57, 14, 226); padding: 1%;"
        );
        button3.setAttribute(
            "style",
            "margin-top: 1%; color:aliceblue; background-color: rgb(57, 14, 226); padding: 1%;"
        );
        button4.setAttribute(
            "style",
            "margin-top: 1%; color:aliceblue; background-color: rgb(57, 14, 226); padding: 1%;"
        );
        if (progress > -1 && progress < 5) {
            highScoreTransporter.setAttribute("style", "display: none;");
        }
        if (progress === -1) {
            timer = 60;
            button1.innerText = "";
            button2.innerText = "";
            button3.innerText = "";
            button4.innerText = "";
            if (!showHiScore) {
                questionBox.setAttribute("style", "margin-top: 5%; color:aliceblue;");
                questionBox.textContent =
                    "Welcome to my quiz game! Ready for a challenge? Press the button to start!";
                beginButton.setAttribute(
                    "style",
                    "margin-top: 1%; color:aliceblue; background-color: rgb(57, 14, 226); padding: 1%;"
                );
                beginButton.innerText = "Start";
                ulEl.setAttribute("style", "display: none;");
            } else {
                clearInterval(timerInterval);
                timerEl.textContent = "Refresh to start again, high scores will save!";
                ulEl.setAttribute("style", "display: none;");
                beginButton.setAttribute("style", "display:none;");
            }
        }

        // manually assigned each button and question to the array of objects depending on progress

        if (progress === 0) {
            questionBox.textContent = Questions[0].question;
            button1.innerText = Questions[0].answer1;
            button2.innerText = Questions[0].answer2;
            button3.innerText = Questions[0].answer3;
            button4.innerText = Questions[0].answer4;
        }
        if (progress === 1) {
            questionBox.textContent = Questions[1].question;
            button1.innerText = Questions[1].answer1;
            button2.innerText = Questions[1].answer2;
            button3.innerText = Questions[1].answer3;
            button4.innerText = Questions[1].answer4;
        }
        if (progress === 2) {
            questionBox.textContent = Questions[2].question;
            button1.innerText = Questions[2].answer1;
            button2.innerText = Questions[2].answer2;
            button3.innerText = Questions[2].answer3;
            button4.innerText = Questions[2].answer4;
        }
        if (progress === 3) {
            questionBox.textContent = Questions[3].question;
            button1.innerText = Questions[3].answer1;
            button2.innerText = Questions[3].answer2;
            button3.innerText = Questions[3].answer3;
            button4.innerText = Questions[3].answer4;
        }
        if (progress === 4) {
            questionBox.textContent = Questions[4].question;
            button1.innerText = Questions[4].answer1;
            button2.innerText = Questions[4].answer2;
            button3.innerText = Questions[4].answer3;
            button4.innerText = Questions[4].answer4;
        }

        // when game is completed this will show

        if (!game) {
            checker.textContent = "";
            questionBox.textContent = "Please enter your initials to save your score";
            initialsInput.setAttribute(
                "style",
                "margin-left: 45%; padding: 0.2%; background-color: rgb(57, 14, 226); color:aliceblue;"
            );
            submitButton.setAttribute(
                "style",
                "display: ; margin-left: 1%; padding: 0.2%; background-color: rgb(57, 14, 226); color:aliceblue;"
            );
            submitButton.textContent = "Submit";
            document.body.appendChild(initialsInput);
            document.body.appendChild(submitButton);
            clearInterval(timerInterval);
            ulEl.setAttribute("style", "display: none;");
            timerEl.textContent = "";
            button1.innerText = "";
            button2.innerText = "";
            button3.innerText = "";
            button4.innerText = "";
        }

        // when game is lost this will show

        if (timer <= 0) {
            questionBox.textContent = "You lost, Refresh to try again!";
            checker.textContent = "";
            clearInterval(timerInterval);
            ulEl.setAttribute("style", "display: none;");
            beginButton.setAttribute("style", "display: none;");
            initialsInput.setAttribute ("style", "display: none;");
            beginButton.setAttribute ("style", "display: none;");
            timerEl.textContent = "";
            button1.innerText = "";
            button2.innerText = "";
            button3.innerText = "";
            button4.innerText = "";
        }
    }, 1000);
};

// start game button function

function startGame() {
    progress++;
    beginButton.setAttribute("style", "display: none;");
};

// answer checker function for each progress value

function checkAnswer(event) {
    if (progress === 0) {
        if (event.currentTarget.innerText == Questions[0].correctAnswer) {
            event.currentTarget.setAttribute(
                "style",
                " margin-top: 1%; color:aliceblue; padding: 1%; background-color: green;"
            );
            progress++;
            timer += 5;
            checker.textContent = "Correct!";
        } else {
            event.currentTarget.setAttribute(
                "style",
                "margin-top: 1%; color:aliceblue; padding: 1%; background-color: red;"
            );
            progress++;
            timer -= 15;
            checker.textContent = "Incorrect";
        }
    } else if (progress === 1) {
        if (event.currentTarget.innerText == Questions[1].correctAnswer) {
            event.currentTarget.setAttribute(
                "style",
                "margin-top: 1%; color:aliceblue; padding: 1%; background-color: green;"
            );
            progress++;
            timer += 5;
            checker.textContent = "Correct!";
        } else {
            event.currentTarget.setAttribute(
                "style",
                "margin-top: 1%; color:aliceblue; padding: 1%; background-color: red;"
            );
            progress++;
            timer -= 15;
            checker.textContent = "Incorrect";
        }
    } else if (progress === 2) {
        if (event.currentTarget.innerText == Questions[2].correctAnswer) {
            event.currentTarget.setAttribute(
                "style",
                "margin-top: 1%; color:aliceblue; padding: 1%; background-color: green;"
            );
            progress++;
            timer += 5;
            checker.textContent = "Correct!";
        } else {
            event.currentTarget.setAttribute(
                "style",
                "margin-top: 1%; color:aliceblue; padding: 1%; background-color: red;"
            );
            progress++;
            timer -= 15;
            checker.textContent = "Incorrect";
        }
    } else if (progress === 3) {
        if (event.currentTarget.innerText == Questions[3].correctAnswer) {
            event.currentTarget.setAttribute(
                "style",
                "margin-top: 1%; color:aliceblue; padding: 1%; background-color: green;"
            );
            progress++;
            timer += 5;
            checker.textContent = "Correct!";
        } else {
            event.currentTarget.setAttribute(
                "style",
                "margin-top: 1%; color:aliceblue; padding: 1%; background-color: red;"
            );
            progress++;
            timer -= 15;
            checker.textContent = "Incorrect";
        }
    } else if (progress === 4) {
        if (event.currentTarget.innerText == Questions[4].correctAnswer) {
            event.currentTarget.setAttribute(
                "style",
                "margin-top: 1%; color:aliceblue; padding: 1%; background-color: green;"
            );
            progress++;
            timer += 5;
            game = false;
        } else {
            event.currentTarget.setAttribute(
                "style",
                "margin-top: 1%; color:aliceblue; padding: 1%; background-color: red;"
            );
            progress++;
            timer -= 15;
            game = false;
        }
    }
};

// initial score displaying function resetting all other text attributes

function showScores() {
    highScoreTransporter.setAttribute ("style", "display: none;");
    beginButton.setAttribute("style", "display: none;");
    showHiScore = true;
    questionBox.textContent = "";
    ulEl.setAttribute("style", "display: none;");
    questionBox.textContent = "High scores: ";
    initialsInput.setAttribute("style", "display: none;");
    submitButton.setAttribute("style", "display: none;");
    timerEl.textContent = "Refresh to start again, high scores will save!";
    button1.innerText = "";
    button2.innerText = "";
    button3.innerText = "";
    button4.innerText = "";
    // call display scores to show the high scores on screen
    displayScores();
};

// function to sort and display the scores on screen from highest to lowest

function displayScores() {
    highScores.sort((a, b) => b.score - a.score);
    for (let i = 1; i < highScores.length; i++) {
        const liEl = document.createElement("li");
        liEl.setAttribute(
            "style",
            "margin-left: 45%; color:aliceblue; padding-top: 0.5%%;"
        );
        liEl.textContent =
            "Initials: " +
            highScores[i].initials +
            " - Score: " +
            highScores[i].score;
        document.body.append(liEl);
    }
};

// function to push a score at the end of each game and then display them at the end

function pushScore() {
    let obj = {
        initials: initialsInput.value,
        score: timer,
    };
    highScores.push(obj);
    localStorage.setItem("highScore", JSON.stringify(highScores));
    showScores();
};

// game function

setTime();

// event listeners for each button

button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);
beginButton.addEventListener("click", startGame);
submitButton.addEventListener("click", pushScore);
highScoreTransporter.addEventListener("click", showScores);

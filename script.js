


//quiz questions in array 
let quizQuestions = [ 

{   
    numb: 1,
    h2says: 'A group of key/value pairs is called a(n) _____',
    options: ['function', 'array', 'method', 'object'],
    answer: 'object'
},

{
    numb: 2,
    h2says: 'In a function, the keyword "this" refers to a(n)______',
    options: ['function', 'array', 'method', 'object'],
    answer: 'object'
},

{
    numb: 3,
    h2says: 'An object property containing a definition is a _____',
    options: ['function', 'array', 'method', 'object'],
    answer: 'method'
},

{
    numb: 4,
    h2says: 'This is used to store multiple values in a single variable',
    options: ['function', 'array', 'method', 'object'],
    answer: 'array'
},

{
    numb: 5,
    h2says: 'A parameter is a named variable passed into a ______',
    options: ['function', 'array', 'method', 'object'],
    answer: 'function'
}];

//set up running list of global variables///
let mainQuizEl = document.querySelector('#quest-answ');
let answOptions = document.querySelector('.questcontainer');
let scoreEl = document.querySelector('#timer');
let questionEl = document.querySelector('#question');
let userSubmit = document.querySelector('#initials')
let userInitials = document.querySelector('#enterinit')
let quizResponse = document.querySelector('#quizresponse');
let msgWrong = document.querySelector('#wrong');
let msgCorrect = document.querySelector('#correct');
let restart = document.querySelector('#restart');
let clearScore = document.querySelector('#clear');
let answOption = document.getElementById('quest-answ');
let timeEl = document.getElementById('time');

//define starting point to reference indexes in quesiton array and timer

let thisQuestionIndex = 0;
let time = quizQuestions.length * 15;
let timerID;




//from landing page to start quiz


//start quiz

// function quizStart() {
//     timerID = setInterval(outofTime, 1000);
//     scoreEl.textContent = time;
//     let firstViewEl = document.querySelector('.container');
//     firstViewEl.setAttribute("class", "hide");
//     mainQuizEl.removeAttribute("class");
//     nextQuestion();

// }


//function to loop through questions and options
// function nextQuestion(){
//     let thisQuestion = quizQuestions[thisQuestionIndex];
//     let h2Question = document.getElementById('question');
//     h2Question.textContent = thisQuestion.h2says;
//     answOptions.innerHTML = "";
//     thisQuestion.options.forEach(function(choice, i) {
//         let choiceBtn = document.createElement("button");
//         choiceBtn.setAttribute("value", choice);
//         choiceBtn.textContent = i + 1 + ". " + choice;
//         choiceBtn.onclick = ansewerClick;
//         answOptions.appendChild(choiceBtn);
//     });
// }
//start quiz - new approach
let startBtn = document.querySelector('#start');
startBtn.addEventListener('click', function(){
    document.querySelector('#starting-view').style.display='none';
    document.querySelector('#finito').style.display='none';
    document.querySelector('.highscores').style.display='none';
    document.querySelector('#quest-answ').style.display='block';

} )

//function to get array into dive with buttons//








let userAnsw = document.querySelector('.optansw');
userAnsw.addEventListener.querySelector('click', ansewerClick);

function ansewerClick() {
    if (this.value !== quizQuestions[thisQuestionIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        scoreEl.textContent = time;
        msgWrong.textContent = 'Wrong...need more practice!'
        msgWrong.style.color = "red";
    } else {
        msgCorrect.textContent = 'Correct! Great Job!'
        msgCorrect.style.color = "blue";
    }

    quizResponse.setAttribute("class", "quizresponse2");
    setTimeout(function() {
        quizResponse.setAttribute("class", "quizresponse hide");
    }, 2000);
    thisQuestionIndex++;
    if (thisQuestionIndex === quizQuestions.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
}
 //function to end quiz
  function quizEnd() {
    clearInterval(timerID);
    let endEl = document.getElementById('#finito');
    endEl.removeAttribute("class");
    let finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = time;
    mainQuizEl.setAttribute("class", "hide");
  }

  //function to end quiz if timer = 0
  function outofTime() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}
//save score and initials in local storage

function saveScore() {
    let initials = userInitials.value.trim();
    if (initials !== "") {
      let highscores = 
      JSON.parse(window.localStorage.getItem("highscores")) || [];
      let newScore = {
        score: time,
        initials: initials
      };
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
    }
}

//save user score after pressing enter

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveScore();

    }
};

// userInitials.onkeyup = checkForEnter





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

let answOptionsEl = document.querySelector('#options');
let scoreEl = document.querySelector('#timer');
let questionEl = document.querySelector('#question');
let userSubmit = document.querySelector('#nombre');
let userInitials = document.querySelector('#initials');
let quizResponse = document.querySelector('#repuesta');
let msgWrong = document.querySelector('#wrong');
let msgCorrect = document.querySelector('#correct');
let restart = document.querySelector('#restart');
let clearScore = document.querySelector('#clear');
let answOption = document.getElementById('pregunta');
let timeEl = document.getElementById('timer');

//define starting point to reference indexes in quesiton array and timer

let thisQuestionIndex = 0;
let time = quizQuestions.length * 15;
let timerID;




//from landing page to start quiz


let startBtn = document.querySelector('#start');
startBtn.addEventListener('click', function () {
    document.querySelector('#quiz-start').style.display = 'none';
    // document.querySelector('#finito').style.display='none';
    // document.querySelector('#highscores').style.display='none';
    document.querySelector('#pregunta').style.display = 'flex';
    newQuestion();
    startTimer();
})

function startTimer() {
    timerID = setInterval(function () {
        time--
        if (time <= 0) {
            time = 0
            stopTimer();
            quizEnd();
        }
        timeEl.textContent = time

    }, 1000);
}




function stopTimer() {
    clearInterval(timerID)
}
//function to get array into div with buttons//
function newQuestion() {
    let thisQuestion = quizQuestions[thisQuestionIndex].h2says;
    // let askEl = document.getElementById('pregunta');
    questionEl.innerHTML = thisQuestion;
    let theseAnswers = quizQuestions[thisQuestionIndex].options;
    answOptionsEl.innerHTML = "";

    for (let i = 0; theseAnswers.length > i; i++) {
        let choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", theseAnswers[i]);
        choiceBtn.textContent = theseAnswers[i];
        choiceBtn.onclick = ansewerClick;
        answOptionsEl.appendChild(choiceBtn);
    }
}
// let userAnsw = document.querySelector('.optansw');
// choiceBtn.addEventListener.querySelector('click', ansewerClick);

function ansewerClick() {

    if (this.value !== quizQuestions[thisQuestionIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }

        msgWrong.textContent = 'Wrong...need more practice!'///these responses need to disappear with new question

    } else {
        msgCorrect.textContent = 'Correct! Great Job!'

    }

    quizResponse.setAttribute("class", "quizresponse2");

    thisQuestionIndex++;
    if (thisQuestionIndex === quizQuestions.length) {
        quizEnd();
    } else {
        newQuestion();
    }
}
//function to end quiz
function quizEnd() {
    stopTimer();
    let principio = document.getElementById('principio')
    principio.style.display = "none";
    let endEl = document.getElementById('finito');
    endEl.style.display = "block";
    //////show final score on finito div span
    let finalTime = document.getElementById('timer')
    let showFinal = document.getElementById('score-final')
    showFinal.innerHTML = time;
   
    //this is not working - want to show timer value as score///

}

function saveScore() {
    let initials = userInitials.value.trim();
    console.log(initials);
    if (initials !== "") {
        let highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];
        let newScore = {
            score: time,
            initials: initials
        };
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        // window.location.reload();
    }
}
let saveIntBtn = document.getElementById('enterinit')

saveIntBtn.addEventListener('click', saveScore);





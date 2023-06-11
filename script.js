
let startBtn = document.querySelector('#start');
startBtn.addEventListener('click', function(){
    document.querySelector('.container').style.display='none'
    document.querySelector('.finito').style.display='none'
    document.querySelector('.highscores').style.display='none'
    document.querySelector('.quiz-container').style.display='block'

})

//quiz time and score variables
let thisQuestionInd = 0
// let time = questions.length * 15;
// let timerID;

let questionEl = document.getElementById('question');
let answOption = document.getElementById('options');
let timeEl = document.getElementById('time');

let quizQuestions = [ 
{   numb: 1,
    h1says: 'A group of key/value pairs is called a(n) _____',
    options: ['function', 'array', 'method', 'object'],
    answer: 'object',
},

{
    numb: 2,
    h1says: 'In a function, the keyword "this" refers to a(n)______',
    options: ['function', 'array', 'method', 'object'],
    answer: 'object',
},

{
    numb: 3,
    h1says: 'An object property containing a definition is a _____',
    options: ['function', 'array', 'method', 'object'],
    answer: 'method',
},

{
    numb: 4,
    h1says: 'This is used to store multiple values in a single variable',
    options: ['function', 'array', 'method', 'object'],
    answer: 'array',
},

{
    numb: 5,
    h1says: 'A parameter is a named variable passed into a ______',
    options: ['function', 'array', 'method', 'object'],
    answer: 'function',
},

]


function nextQuestion(){
    quizQuestions
}



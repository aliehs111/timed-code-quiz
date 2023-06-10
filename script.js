
let startBtn = document.querySelector('#start');
startBtn.addEventListener('click', function(){
    document.querySelector('.container').style.display='none'
    document.querySelector('.finito').style.display='none'
    document.querySelector('.highscores').style.display='none'
    document.querySelector('.quiz-container').style.display='block'
})

//quiz time and score variables
let thisQuestionInd = 0
let time = questions.length * 15;
// let timerID;

let questionEl = document.getElementById('question');
let answOption = document.getElementById('options');
let timeEl = 

let quiz-questions = [ 
{
    h1says: 'A group of key/value pairs is called a(n) _____',
    options: ['function', 'array', 'method', 'object'],
    answer: 'object',
},

{
    h1says: 'In a function, the keyword "this" refers to a(n)______',
    options: ['function', 'array', 'method', 'object'],
    answer: 'object',
},

{
    h1says: 'An object property containing a definition is a _____',
    options: ['function', 'array', 'method', 'object'],
    answer: 'method',
},

{
    h1says: 'This is used to store multiple values in a single variable',
    options: ['function', 'array', 'method', 'object'],
    answer: 'array',
},

{
    h1says: 'A parameter is a named variable passed into a ______',
    options: ['function', 'array', 'method', 'object'],
    answer: 'function',
},

















]
// const correctArr = ['method', 'object', 'html', 'javascript'];
let userAnswer = [];

let questcontainer = document.querySelector('.questcontainer')
let correctAnswer = document.querySelector('.answopt-cor')
let incorrectAnser = document.querySelector('.answer')

// questcontainer.addEventListener("click", function(event) {
    correctAnswer.addEventListener("click", function(event) {
    event.stopPropagation();
    var element = event.target;
    console.log(element.classList)
    if(element.classList.contains("answopt-cor")) {
        console.log("1")
        console.log(userAnswer.push)
        document.querySelector('#correct').style.display='block'
  
    }

})

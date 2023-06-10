






let startBtn = document.querySelector('#start');
startBtn.addEventListener('click', function(){
    document.querySelector('.container').style.display='none'
    document.querySelector('.finito').style.display='none'
    document.querySelector('.highscores').style.display='none'
    document.querySelector('.quiz-container').style.display='block'
})

// const correctArr = ['method', 'object', 'html', 'javascript'];
let userAnswer = [];

let questcontainer = document.querySelector('.questcontainer')

questcontainer.addEventListener("click", function(event) {
    event.stopPropagation();
    var element = event.target;
    console.log(element.classList)
    if(element.classList.contains("answopt-cor")) {
        console.log("1")
        else(console.log("0"))
    }

})

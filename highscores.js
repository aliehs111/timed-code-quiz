
let clearBtn = document.querySelector("#clear")   

clearBtn.addEventListener('click', function(){
    localStorage.clear("highscores");
});

function loadHighScores() {
    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    let ol = document.querySelector('ol')
}


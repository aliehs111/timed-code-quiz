
document.addEventListener('DOMContentLoaded', function () {
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    let highscoreList = document.getElementById('highscore-list');
    
    // Sort and populate high scores
    highscores.sort((a, b) => b.score - a.score);
    highscores.forEach((score, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
        highscoreList.appendChild(listItem);
    });
    
    // Attach event listener to the "Clear High Scores" button
    let clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', function () {
        clearHighScores();
    });
    
    // Function to clear high scores
    function clearHighScores() {
        // Clear high scores data from local storage
        localStorage.removeItem("highscores");
        
        // Clear the highscore-list element on the page
        highscoreList.innerHTML = ""; // Remove all list items
        
        // Optionally, you can show a message indicating that high scores are cleared
    }
});

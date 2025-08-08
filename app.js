
const p1 = {
    score:0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1')
}

const p2 = {
    score:0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2')
}

let winningScore = 3;
let isGameOver = false;
const resetButton = document.querySelector('#reset');
const winningScoreSelector = document.querySelector('#playto');

winningScoreSelector.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function updateScore(player , opponent){
    if (!isGameOver) {
        player.score++;
        if (player.score == winningScore) {
            // alert("P1 WINNER");
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
    player.display.textContent = player.score;
}


// const p1button = document.querySelector('#p1button');
// const p2button = document.querySelector('#p2button');
// const p1display = document.querySelector('#p1');
// const p2display = document.querySelector('#p2');


// let p1Score = 0;
// let p2Score = 0;

p1.button.addEventListener('click', function () {
    // alert("CLICKED!");
    // if (!isGameOver) {
    //     p1Score++;
    //     if (p1Score == winningScore) {
    //         // alert("P1 WINNER");
    //         isGameOver = true;
    //         p1display.classList.add('has-text-success');
    //         p2display.classList.add('has-text-danger');
    //         p1button.disabled = true;
    //         p2button.disabled = true;
    //     }
    // }
    // p1display.textContent = p1Score;
    updateScore(p1, p2);
    
})
p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
    // alert("CLICKED!");
    // if (!isGameOver) {
    //     p2Score++;
    //     if (p2Score == winningScore) {
    //         // alert("P2 WINNE");
    //         isGameOver = true;
    //         p1display.classList.add('has-text-danger');
    //         p2display.classList.add('has-text-success');
    //         p1button.disabled = true;
    //         p2button.disabled = true;
    //     }

    // }
    // p2display.textContent = p2Score;

})

resetButton.addEventListener('click', reset)

function reset() {
    p2.score = 0;
    p1.score = 0;
    isGameOver = false;
    p2.display.textContent = 0;
    p1.display.textContent = 0;
    p1.display.classList.remove('has-text-danger', 'has-text-success');
    p2.display.classList.remove('has-text-danger', 'has-text-success');
    p1.button.disabled = false;
    p2.button.disabled = false;
    // for(let p of [p1, p2]){
    //     p.score = 0;
    //     p.display.textContent = p.score;
    // }
}
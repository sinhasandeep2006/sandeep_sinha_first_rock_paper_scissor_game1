let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    losse: 0,
    tie: 0,
};
showtime();
// document.querySelector('.move-reflector').innerHTML=`your move ${playerMove}
// computer move ${computerMove}. 
// ${result}`;
// document.querySelector('.js-score').innerHTML= `wins: ${score.win},losse:${score.losse},tie: ${score.tie}`;
// if(!score){
//     score={
//         win:0,
//         losse:0,
//         tie:0,
//     };
// }
function playgame(playerMove) {
    let computerMove = pickerNumber();
    let result = '';
    if (playerMove === 'Scissor') {
        if (computerMove === 'Scissor') {
            result = 'Tie.';
        } else if (computerMove === 'Rock') {
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You win. ';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win.';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissor') {
            result = 'You win.';
        }
    }
    if (result === 'Tie.') {
        score.tie += 1;
    } else if (result === 'You lose.') {
        score.losse += 1;
    } else if (result === 'You win.') {
        score.win += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    showtime();
    document.querySelector('.js-result ').innerHTML = result;
    document.querySelector('.js-move ').innerHTML = `
    you
<img src="image/${playerMove}-hand.png" class="rock_bro">
<img src="image/${computerMove}-hand.png" class="rock_bro">
computer 
    `;
}

function showtime() {
    document.querySelector('.js-score').innerHTML = `wins: ${score.win},losse:${score.losse},tie: ${score.tie}`;
}

function pickerNumber() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissor';
    }
    return computerMove;
}
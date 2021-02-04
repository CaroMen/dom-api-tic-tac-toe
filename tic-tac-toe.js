let currentPlayerSymbol = 'x';
let svArr = ['', '', '',
    '', '', '',
    '', '', ''];
let gameStatus = '';

window.addEventListener('DOMContentLoaded', event => {
    let board = document.getElementById('tic-tac-toe-board');

    let newGame = document.getElementById('new-game');

    newGame.addEventListener('click', event => {
        currentPlayerSymbol = 'x';
        svArr = ['', '', '', '', '', '', '', '', ''];
        gameStatus = '';
        document.getElementById('game-status').innerHTML = '';
        for (let i = 0; i < 9; i++) {
            let divSquare = document.getElementById(`square-${i}`);
            divSquare.innerHTML = '';
        }
        newGame.disabled = true;
    })

    board.addEventListener('click', event => {
        if (gameStatus !== '') return;
        let target = event.target.id;
        let num;
        let image = document.createElement('img');

        if (!target.includes('square-')) {
            return;
        } else {
            num = Number.parseInt(target.slice(target.indexOf('-') + 1));

        }

        if (svArr[num] !== '') {
            return;
        }
        if (currentPlayerSymbol === 'x') {
            image.src = 'images/player-x.svg';
            event.target.appendChild(image);
            svArr[num] = currentPlayerSymbol;
            checkGameStatus();
            currentPlayerSymbol = 'o';
        } else {
            image.src = 'images/player-o.svg';
            event.target.appendChild(image);
            svArr[num] = currentPlayerSymbol;
            checkGameStatus();
            currentPlayerSymbol = 'x';
        }

    });


});


let checkGameStatus = () => {
    // rows
    if (svArr[0] === svArr[1] && svArr[1] === svArr[2] && svArr[2] !== '') {
        gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (svArr[3] === svArr[4] && svArr[4] === svArr[5] && svArr[5] !== '') {
        gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (svArr[6] === svArr[7] && svArr[7] === svArr[8] && svArr[8] !== '') {
        gameStatus = currentPlayerSymbol.toUpperCase();
    }

    // columns
    if (svArr[0] === svArr[3] && svArr[3] === svArr[6] && svArr[6] !== '') {
        gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (svArr[1] === svArr[4] && svArr[4] === svArr[7] && svArr[7] !== '') {
        gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (svArr[2] === svArr[5] && svArr[5] === svArr[8] && svArr[8] !== '') {
        gameStatus = currentPlayerSymbol.toUpperCase();
    }

    // diagonal
    if (svArr[0] === svArr[4] && svArr[4] === svArr[8] && svArr[8] !== '') {
        gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (svArr[2] === svArr[4] && svArr[4] === svArr[6] && svArr[6] !== '') {
        gameStatus = currentPlayerSymbol.toUpperCase();
    }

    if (gameStatus !== '') {
        document.getElementById('game-status').innerHTML = 'Winner: ' + gameStatus;
        let newGame = document.getElementById('new-game');
        newGame.disabled = false;
    }

}

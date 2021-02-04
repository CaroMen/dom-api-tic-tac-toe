let currentPlayerSymbol = 'x';
let svArr = ['', '', '',
    '', '', '',
    '', '', ''];
let gameStatus = '';

window.addEventListener('DOMContentLoaded', event => {
    let board = document.getElementById('tic-tac-toe-board');

    board.addEventListener('click', event => {
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
        // checkGameStatus();

    });


});


let checkGameStatus = () => {
    // rows
    if (svArr[0] === svArr[1] && svArr[1] === svArr[2] && svArr[2] !== '') {
        // do something
        gameStatus = currentPlayerSymbol.toUpperCase();
        console.log(gameStatus);
    }
    if (svArr[3] === svArr[4] && svArr[4] === svArr[5] && svArr[5] !== '') {
        // do something
        gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (svArr[6] === svArr[7] && svArr[7] === svArr[8] && svArr[8] !== '') {
        // do something
        gameStatus = currentPlayerSymbol.toUpperCase();
    }

    // columns
    if (svArr[0] === svArr[3] && svArr[3] === svArr[6] && svArr[6] !== '') {
        // do something
        gameStatus = currentPlayerSymbol.toUpperCase();
        console.log(gameStatus);
    }
    if (svArr[1] === svArr[4] && svArr[4] === svArr[7] && svArr[7] !== '') {
        // do something
        gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (svArr[2] === svArr[5] && svArr[5] === svArr[8] && svArr[8] !== '') {
        // do something
        gameStatus = currentPlayerSymbol.toUpperCase();
    }

    // d

    if (gameStatus) {
        document.getElementById('game-status').innerHTML = 'Winner: ' + gameStatus;
    }
}

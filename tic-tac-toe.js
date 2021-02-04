let currentPlayerSymbol = 'x';
let squareValues = ['', '', '', '', '', '', '', '', ''];

window.addEventListener('DOMContentLoaded', event => {
    let board = document.getElementById('tic-tac-toe-board');
    let image = document.createElement('img');

    board.addEventListener('click', event => {
        let target = event.target.id;
        let num;
        if (!target.includes('square-')) {
            return;
        } else {
            num = Number.parseInt(target.slice(target.indexOf('-') + 1));

        }

        if (squareValues[num] !== '') {
            return;
        }
        if (currentPlayerSymbol === 'x') {
            image.src = 'images/player-x.svg';
            event.target.appendChild(image);
            squareValues[num] = currentPlayerSymbol;
            currentPlayerSymbol = 'o';
        } else {
            image.src = 'images/player-o.svg';
            event.target.appendChild(image);
            squareValues[num] = currentPlayerSymbol;
            currentPlayerSymbol = 'x';
        }
        console.log(squareValues);
    })

});

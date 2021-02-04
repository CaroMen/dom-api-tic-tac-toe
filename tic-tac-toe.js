let currentPlayerSymbol = 'x';
let squareValues = ['', '', '', '', '', '', '', '', ''];

window.addEventListener('DOMContentLoaded', event => {
    let board = document.getElementById('tic-tac-toe-board');

    board.addEventListener('click', event => {
        let target = event.target.id;

        if (!target.includes('square-')) {
            return;
        } else {
            target.slice(target.indexOf('-') + 1);
        }

    })

});

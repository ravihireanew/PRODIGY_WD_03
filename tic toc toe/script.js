let currentPlayer = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function handleClick(row, col) {
  if (!board[row][col]) {
    board[row][col] = currentPlayer;
    renderBoard();
    if (checkWinner()) {
      document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
    } else if (checkDraw()) {
      document.getElementById('message').innerText = 'It\'s a draw!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
      return true;
    }
  }
  
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
      return true;
    }
  }
 
  if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') ||
      (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '')) {
    return true;
  }
  return false;
}

function checkDraw() {
  for (let row of board) {
    for (let cell of row) {
      if (cell === '') {
        return false;
      }
    }
  }
  return true;
}

function resetGame() {
  currentPlayer = 'X';
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  renderBoard();
  document.getElementById('message').innerText = '';
}

function renderBoard() {
  const squares = document.querySelectorAll('.square');
  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      squares[rowIndex * 3 + colIndex].innerText = cell;
    });
  });
}

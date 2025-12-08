const allSquares = document.querySelectorAll(".board__square");
const title = document.querySelector(".board__title");
let currentPlayer = "X";
let gameOver = false;
let board = new Array(9).fill(undefined)

allSquares.forEach((square, i) => {
  square.addEventListener("click", () => {
    if(square.innerHTML || gameOver){
      return;
    }
    square.innerHTML = currentPlayer;
    board[i] = currentPlayer


    if(checkWin()){
      console.log('this ran', checkWin())
      title.innerHTML =  `${currentPlayer} Wins!`
      gameOver = true
      return;
    }
    if(checkDraw()){
      title.innerHTML =  `Draw!`
      gameOver = true
      return
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    title.innerHTML = `${currentPlayer}'s Turn`;
  });
});

function restartGame(){
  gameOver = false
  console.log('restart')
  //1 reset title
    title.innerHTML = `${currentPlayer}'s Turn`;
  //2 reset DOM
  allSquares.forEach(square => {
    square.innerHTML = ''
  })
  //3 reset board
  board = new Array(9)
}

function checkDraw(){
  // return board.every(symbol =>{
  //   if(symbol){
  //     return true;
  //   }
  // })
  console.log(board)
  for (let i = 0; i < board.length; ++i){
    if(!board[i]){
      return false;
    }
  }
  return true;
}

function checkWin() {
  const winningIndicies = [
    // horizontal winners:
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical winners:
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal winners:
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningIndicies.length; ++i) {
    const matchingIndicies = winningIndicies[i]
    let symbol1 = board[matchingIndicies[0]] //board at index 0
    let symbol2 = board[matchingIndicies[1]] //board at index 1
    let symbol3 = board[matchingIndicies[2]] //board at index 2

    if(!symbol1 || !symbol2 || !symbol3) {
      continue;
    }

    if(symbol1 === symbol2 && symbol2 === symbol3) {
      console.log('Winner at', matchingIndicies)
      return true;
    }
  }
}

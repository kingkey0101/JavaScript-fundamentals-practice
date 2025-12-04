const allSquares = document.querySelectorAll(".board__square");
const title = document.querySelector(".board__title");
let currentPlayer = "X";

let board = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

allSquares.forEach((square, i) => {
//   console.log(square, i);
  square.addEventListener("click", () => {
    // console.log("clicked");
    square.innerHTML = currentPlayer;

    checkWin();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    title.innerHTML = `${currentPlayer}'s Turn`;
  });
});

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
    console.log(winningIndicies[i]);
  }
}

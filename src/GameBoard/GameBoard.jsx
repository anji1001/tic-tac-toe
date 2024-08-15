import { useState } from "react";
import Log from "../Log/Log";
import { WINNER_CONDITIONS } from "../WinningConditions";
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ updateSymbol, activePlayer }) {
  const [board, setBoard] = useState(initialBoard);
  const [winner, setWinner] = useState("");
  function handleTurnUpdate(row, col) {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard.map((prevRow) => [...prevRow])];
      newBoard[row][col] = activePlayer === "O" ? "O" : "X";
      checkWinner(newBoard);
      return newBoard;
    });
    updateSymbol();
  }

  function checkWinner(newBoard) {
    WINNER_CONDITIONS.forEach((condition) => {
      const firstSquare = newBoard[condition[0].row][condition[0].column];
      const secondSquare = newBoard[condition[1].row][condition[1].column];
      const thirdSquare = newBoard[condition[2].row][condition[2].column];

      if (
        firstSquare &&
        firstSquare === secondSquare &&
        firstSquare === thirdSquare
      ) {
        setWinner(firstSquare);
        return true;
      } else return false;
    });
  }
  return (
    <div>
      {winner ? (
        <div id="game-over">
            <h2>Game Over!!</h2>
            <p>Winner is {winner}</p>
        </div>
      ) : (
        <div id="game-board">
          {board.map((row, rowIndex) => (
            <ol key={rowIndex}>
              {row.map((col, colIndex) => (
                <li key={rowIndex.toString() + colIndex.toString()}>
                  <button
                    id="pre-game"
                    onClick={() => {
                      handleTurnUpdate(rowIndex, colIndex);
                    }}
                    disabled={col !== null}
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          ))}
        </div>
      )}
      <Log id="log" winner={winner} />
    </div>
  );
}

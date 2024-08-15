import Player from "./Player/Player";
import GameBoard from "./GameBoard/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleUpdateSymbol() {
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>

        <GameBoard
          updateSymbol={handleUpdateSymbol}
          activePlayer={activePlayer}
        />

        {/* <Log id="log" /> */}
      </div>
    </main>
  );
}

export default App;

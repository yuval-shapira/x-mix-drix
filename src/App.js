import React from "react";
import "./App.css";
import winCheck from "./HelpersFunc/WinCheck.mjs";

const ACTIONS = {
  X_PLAYER: "X",
  O_PLAYER: "O",
  X_IMG: "./Images/red_X.png",
  O_IMG: "./Images/red_O.png",
};

function initTableGame() {
  const initTableGame = [];
  for (let key = 0; key < 9; key++) {
    initTableGame.push({
      key,
      move: null,
      image: null,
    });
  }
  return initTableGame;
}

export default function App() {
  const [currentPlayer, setCurrentPlayer] = React.useState(ACTIONS.X_PLAYER);
  const [tableGame, setTableGame] = React.useState(initTableGame());
  const [winner, setWinner] = React.useState(null);
  const [playerToCheck, setPlayerToCheck] = React.useState(null);

  let newTableGame = [...tableGame];

  function newGameHanler() {
    setWinner(null);
    setPlayerToCheck(null);
    setTableGame(initTableGame());
    setCurrentPlayer(ACTIONS.X_PLAYER);
  }

  function clickOnCellHanler(sq) {
    if (!winner && newTableGame[sq.key].move === null) {
      setPlayerToCheck(currentPlayer);
      newTableGame[sq.key].move = currentPlayer;
      const isWinner = winCheck(newTableGame, currentPlayer);
      if (isWinner) {
        setWinner(isWinner);
      }
      isWinner &&
        isWinner.forEach((element) => {
          newTableGame[element].className = "win";
        });
      if (currentPlayer === ACTIONS.X_PLAYER) {
        newTableGame[sq.key].image = ACTIONS.X_IMG;
        setCurrentPlayer(ACTIONS.O_PLAYER);
      } else {
        newTableGame[sq.key].image = ACTIONS.O_IMG;
        setCurrentPlayer(ACTIONS.X_PLAYER);
      }
      setTableGame(newTableGame);
      return;
    }
  }
  function WinnerIs() {
    if (winner) {
      return (
        <>
          <h2>{playerToCheck} Player is the winner!!!</h2>
        </>
      );
    }
  }
  return (
    <>
      <header className="App-header">
        <h1> X/O Game</h1>
      </header>
      <main className="table-container">
        <div className="grid-container">
          {newTableGame.map((sq) => {
            return (
              <div
                key={sq.key}
                className={sq.className}
                onClick={() => clickOnCellHanler(sq)}
              >
                {sq.image !== null && <img src={sq.image} alt="" />}
              </div>
            );
          })}
        </div>
        <button onClick={() => newGameHanler()}>Clear Game</button>
        <div>
          <WinnerIs />
        </div>
      </main>
    </>
  );
}

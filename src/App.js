import React, { useEffect } from "react";
import "./App.css";
import winCheck from "./HelpersFunc/WinCheck.mjs";

let tableGame = [];
let winner = null;
let playerToCheck = null;

function setTableGame() {
  tableGame = [];
  for (let key = 0; key < 9; key++) {
    tableGame.push({
      key,
      move: null,
      image: null,
    });
  }
}
setTableGame();

const ACTIONS = {
  X_PLAYER: "X",
  O_PLAYER: "O",
  X_IMG: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Red_x.svg",
  O_IMG: "https://upload.wikimedia.org/wikipedia/commons/5/54/Red_Serif_O.svg",
};

export default function App() {
  const [currentPlayer, setCurrentPlayer] = React.useState(ACTIONS.X_PLAYER);
  const [currentWinner, setCurrentWinner] = React.useState(null);

  function setNewGameHanler() {
    winner = null;
    playerToCheck = null;
    setTableGame();
    console.log(`currentPlayer 1: ${currentPlayer}`);
    //setCurrentPlayer("test");
    console.log(`currentPlayer 2: ${currentPlayer}`);
    setCurrentPlayer(ACTIONS.X_PLAYER);
    setCurrentWinner(currentPlayer);
    console.log(`currentPlayer 3: ${currentPlayer}`);
  }

  function clickOnCellHanler(sq) {
    if (!winner && tableGame[sq.key].move === null) {
      playerToCheck = currentPlayer;
      tableGame[sq.key].move = currentPlayer;
      winner = winCheck(playerToCheck, tableGame);
      winner &&
        winner.forEach((element) => {
          tableGame[element].className = "win";
        });
      //winner && setCurrentPlayer(ACTIONS.O_PLAYER)
      //console.log(`winner: ${winner}`);

      if (currentPlayer === ACTIONS.X_PLAYER) {
        tableGame[sq.key].image = ACTIONS.X_IMG;
        setCurrentPlayer(ACTIONS.O_PLAYER);
      } else {
        tableGame[sq.key].image = ACTIONS.O_IMG;
        setCurrentPlayer(ACTIONS.X_PLAYER);
      }
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
  // useEffect(() => {
  //   setCurrentPlayer(ACTIONS.X_PLAYER);
  // }, [winner]); 

  return (
    <>
      <header className="App-header">
        <h1> X/O Game</h1>
      </header>
      <main className="table-container">
        <div className="grid-container">
          {tableGame.map((sq) => {
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
        <button onClick={() => setNewGameHanler()}>Clear Game</button>
        <div>
          <WinnerIs />
        </div>
      </main>
    </>
  );
}

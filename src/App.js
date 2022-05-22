import React from "react";
import "./App.css";
import winCheck from "./HelpersFunc/WinCheck.mjs";
const tableValues = [null, null, null, null, null, null, null, null, null];

function alertWinner(currentPlayer) {
  alert(`${currentPlayer} player won the game!!`);
}

function App() {
  function clickHandler(cellNum) {
    if (tableValues[cellNum] === null) {
      tableValues[cellNum] = currentPlayer;
      console.log(tableValues);
      const isThereWinner = winCheck(currentPlayer, tableValues);
      if (isThereWinner === "Yes") {
        alertWinner(currentPlayer);
        initNewGame();
      } else {
        currentPlayer === "X" ? setPlayer("O") : setPlayer("X");
      }
    }
  }

  function initNewGame() {
    for (let i = 0; i < tableValues.length; i++) {
      tableValues[i] = null;
    }
    setPlayer("X");
  }

  function TableComponant({ cellNum }) {
    return (
      <div onClick={() => clickHandler(cellNum)} className={cellNum}>
        {cellNum}
      </div>
    );
  }
  const [currentPlayer, setPlayer] = React.useState("X");
  const tableGame = [];
  const numOfCells = 9;
  for (let i = 0; i < numOfCells; i++)
    tableGame.push(<TableComponant key={i} cellNum={i} move="" />);
  console.log(tableGame);
  return (
    <>
      <header className="App-header">
        <h1>X Mix Drix</h1>
      </header>
      <main className="table-container">
        <div className="grid-container">{tableGame}</div>
      </main>
    </>
  );
}

export default App;

/*
write players name
choose num of matches
start game

1. create state for player
2. player choose cell 
3. insert X or O to the selected cell 
4. check if player won
4.1 YES: end game
     message who won
     clear tableValues
     start new match
4.2 NO: toggle to other player and back to line 1

4.1:

*/

import React from "react";
import "./App.css";
import winCheck from "./HelpersFunc/WinCheck.mjs";
//const tableValues = [null, null, null, null, null, null, null, null, null];

const tableGame = [];
function setTableGame() {
  while (tableGame.length) {
    tableGame.pop();
  }

  for (let key = 1; key < 10; key++) {
    const cellName = `cell_${key}`;
    tableGame.push({
      key,
      cellName,
      move: null,
    });
  }
}
setTableGame();

const ACTIONS = {
  X_PLAYER: "X",
  O_PLAYER: "O",
  X_IMG: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Red_x.svg",
  O_IMG: "https://upload.wikimedia.org/wikipedia/commons/5/54/Red_Serif_O.svg",
  CELL_1: "cell_1",
  CELL_2: "cell_2",
  CELL_3: "cell_3",
  CELL_4: "cell_4",
  CELL_5: "cell_5",
  CELL_6: "cell_6",
  CELL_7: "cell_7",
  CELL_8: "cell_8",
  CELL_9: "cell_9",
  CLEAR: "clear",
};

export default function App() {
  const initialState = {};
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [currentPlayer, setCurrentPlayer] = React.useState(ACTIONS.X_PLAYER);

  function clickHanler(sq) {
    if (!state.hasOwnProperty(sq.cellName) || sq.cellName === ACTIONS.CLEAR) {
      dispatch({ clickedCell: sq.cellName, player: currentPlayer });
      if (sq.cellName !== ACTIONS.CLEAR) {
        const imgLink =
          currentPlayer === ACTIONS.X_PLAYER ? ACTIONS.X_IMG : ACTIONS.O_IMG;
        tableGame[sq.key - 1].move = imgLink;
      } else {
        setTableGame();
      }
      sq.cellName !== ACTIONS.CLEAR && currentPlayer === ACTIONS.X_PLAYER
        ? setCurrentPlayer(ACTIONS.O_PLAYER)
        : setCurrentPlayer(ACTIONS.X_PLAYER);
    }

    const a =
      currentPlayer === ACTIONS.X_PLAYER ? ACTIONS.O_PLAYER : ACTIONS.X_PLAYER;
    const winner = winCheck(a, state);
    console.log(`winner: ${winner}`);
  }

  function reducer(state, { clickedCell, player }) {
    switch (clickedCell) {
      case ACTIONS.CELL_1:
        return {
          ...state,
          cell_1: player,
        };
      case ACTIONS.CELL_2:
        return {
          ...state,
          cell_2: player,
        };
      case ACTIONS.CELL_3:
        return {
          ...state,
          cell_3: player,
        };
      case ACTIONS.CELL_4:
        return {
          ...state,
          cell_4: player,
        };
      case ACTIONS.CELL_5:
        return {
          ...state,
          cell_5: player,
        };
      case ACTIONS.CELL_6:
        return {
          ...state,
          cell_6: player,
        };
      case ACTIONS.CELL_7:
        return {
          ...state,
          cell_7: player,
        };
      case ACTIONS.CELL_8:
        return {
          ...state,
          cell_8: player,
        };
      case ACTIONS.CELL_9:
        return {
          ...state,
          cell_9: player,
        };

      case ACTIONS.CLEAR:
        return {
          initialState,
        };
      default:
        return state;
    }
  }

  return (
    <>
      <header className="App-header">
        <h1> X-O Game</h1>
      </header>
      <main className="table-container">
        <div className="grid-container">
          {tableGame.map((sq) => {
            return (
              <div key={sq.key} onClick={() => clickHanler(sq)}>
                <img src={sq.move} alt="" />
              </div>
            );
          })}
        </div>
        <button onClick={() => clickHanler({ cellName: ACTIONS.CLEAR })}>
          Clear Game
        </button>
      </main>
    </>
  );
}

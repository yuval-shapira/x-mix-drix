import React from "react";
import "./App.css";
import { winCheck, markCells } from "./HelpersFunc/WinCheckAndMark.mjs";

const tableGame = [];
function setTableGame() {
  while (tableGame.length) {
    tableGame.pop();
  }

  for (let key = 1; key < 10; key++) {
    const cellID = `cell_${key}`;
    tableGame.push({
      key,
      cellID,
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
  ROW_1_WIN: "row1",
  ROW_2_WIN: "row2",
  ROW_3_WIN: "row3",
  COL_1_WIN: "col1",
  COL_2_WIN: "col2",
  COL_3_WIN: "col3",
  CROSS_1_WIN: "crx1",
  CROSS_2_WIN: "crx2",
};

export default function App() {
  const initialState = {};
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [currentPlayer, setCurrentPlayer] = React.useState(ACTIONS.X_PLAYER);

  function clickHanler(sq) {
    if (!winner || sq.cellID === ACTIONS.CLEAR) {
      if (!state.hasOwnProperty(sq.cellID) || sq.cellID === ACTIONS.CLEAR) {
        dispatch({ clickedCell: sq.cellID, player: currentPlayer });
        if (sq.cellID !== ACTIONS.CLEAR) {
          const imgLink =
            currentPlayer === ACTIONS.X_PLAYER ? ACTIONS.X_IMG : ACTIONS.O_IMG;
          tableGame[sq.key - 1].move = imgLink;
        } else {
          setTableGame();
          markCells("clear");
        }

        sq.cellID !== ACTIONS.CLEAR && currentPlayer === ACTIONS.X_PLAYER
          ? setCurrentPlayer(ACTIONS.O_PLAYER)
          : setCurrentPlayer(ACTIONS.X_PLAYER);
      }
    }
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

  const checkWinnerPlayer =
    currentPlayer === ACTIONS.X_PLAYER ? ACTIONS.O_PLAYER : ACTIONS.X_PLAYER;

  const winner = winCheck(checkWinnerPlayer, state);
  if (winner === ACTIONS.ROW_1_WIN) {
    markCells("add", ACTIONS.CELL_1, ACTIONS.CELL_2, ACTIONS.CELL_3);
  }
  if (winner === ACTIONS.ROW_2_WIN) {
    markCells("add", ACTIONS.CELL_4, ACTIONS.CELL_5, ACTIONS.CELL_6);
  }
  if (winner === ACTIONS.ROW_3_WIN) {
    markCells("add", ACTIONS.CELL_7, ACTIONS.CELL_8, ACTIONS.CELL_9);
  }
  if (winner === ACTIONS.COL_1_WIN) {
    markCells("add", ACTIONS.CELL_1, ACTIONS.CELL_4, ACTIONS.CELL_7);
  }
  if (winner === ACTIONS.COL_2_WIN) {
    markCells("add", ACTIONS.CELL_2, ACTIONS.CELL_5, ACTIONS.CELL_8);
  }
  if (winner === ACTIONS.COL_3_WIN) {
    markCells("add", ACTIONS.CELL_3, ACTIONS.CELL_6, ACTIONS.CELL_9);
  }
  if (winner === ACTIONS.CROSS_1_WIN) {
    markCells("add", ACTIONS.CELL_3, ACTIONS.CELL_5, ACTIONS.CELL_7);
  }
  if (winner === ACTIONS.CROSS_2_WIN) {
    markCells("add", ACTIONS.CELL_1, ACTIONS.CELL_5, ACTIONS.CELL_9);
  }

  // if (winner) {
  //   switch (winner) {
  //     case ACTIONS.ROW_1_WIN:
  //       markCells("add", ACTIONS.CELL_1, ACTIONS.CELL_2, ACTIONS.CELL_3);
  //       return;
  //     case ACTIONS.ROW_2_WIN:
  //       markCells("add", ACTIONS.CELL_4, ACTIONS.CELL_5, ACTIONS.CELL_6);
  //       return;
  //     case ACTIONS.ROW_3_WIN:
  //       markCells("add", ACTIONS.CELL_7, ACTIONS.CELL_8, ACTIONS.CELL_9);
  //       return;
  //     case ACTIONS.COL_1_WIN:
  //       markCells("add", ACTIONS.CELL_1, ACTIONS.CELL_4, ACTIONS.CELL_7);
  //       return;
  //     case ACTIONS.COL_2_WIN:
  //       markCells("add", ACTIONS.CELL_2, ACTIONS.CELL_5, ACTIONS.CELL_8);
  //       return;
  //     case ACTIONS.COL_3_WIN:
  //       markCells("add", ACTIONS.CELL_3, ACTIONS.CELL_6, ACTIONS.CELL_9);
  //       return;
  //     case ACTIONS.CROSS_1_WIN:
  //       markCells("add", ACTIONS.CELL_3, ACTIONS.CELL_5, ACTIONS.CELL_7);
  //       return;
  //     case ACTIONS.CROSS_2_WIN:
  //       markCells("add", ACTIONS.CELL_1, ACTIONS.CELL_5, ACTIONS.CELL_9);
  //       return;
  //     default:
  //       return;
  //   }
  // }
  function WinnerIs() {
    if (winner) {
      return <><h2>{checkWinnerPlayer} Player</h2> is the winner!!!</>;
    }
  }
  return (
    <>
      <header className="App-header">
        <h1> X/O Game</h1>
      </header>
      <main className="table-container">
        <div className="grid-container">
          {tableGame.map((sq) => {
            return (
              <div key={sq.key} id={sq.cellID} onClick={() => clickHanler(sq)}>
                {sq.move !== null && <img src={sq.move} alt="" />}
              </div>
            );
          })}
        </div>
        <button onClick={() => clickHanler({ cellID: ACTIONS.CLEAR })}>
          Clear Game
        </button>
        <h3>
          <WinnerIs />
        </h3>
      </main>
    </>
  );
}

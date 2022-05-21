import React from "react";
import "./App.css";

function TableComponant(props) {
  const cell = props.cell;
  return <div className={cell}>{cell}</div>;
}

function App() {
  const tableGame = [1, 2, 3, 4, 5, 6, 7, 8, 1545454];
  return (
    <>
      <header className="App-header">
        <h1>X Mix Drix</h1>
      </header>
      <main className="table-container">
        <div className="grid-container">
          {tableGame.map((cell) => (
            <TableComponant key={cell} cell={cell} />
          ))}
        </div>
      </main>
    </>
  );
}


export default App;

export function winCheck(currentPlayer, tableValues) {
  if (
    tableValues?.cell_1 === currentPlayer &&
    tableValues?.cell_2 === currentPlayer &&
    tableValues?.cell_3 === currentPlayer
  )
    return "row1";
  if (
    tableValues?.cell_4 === currentPlayer &&
    tableValues?.cell_5 === currentPlayer &&
    tableValues?.cell_6 === currentPlayer
  )
    return "row2";
  if (
    tableValues?.cell_7 === currentPlayer &&
    tableValues?.cell_8 === currentPlayer &&
    tableValues?.cell_9 === currentPlayer
  )
    return "row3";

  if (
    tableValues?.cell_1 === currentPlayer &&
    tableValues?.cell_4 === currentPlayer &&
    tableValues?.cell_7 === currentPlayer
  )
    return "col1";
  if (
    tableValues?.cell_2 === currentPlayer &&
    tableValues?.cell_5 === currentPlayer &&
    tableValues?.cell_8 === currentPlayer
  )
    return "col2";
  if (
    tableValues?.cell_3 === currentPlayer &&
    tableValues?.cell_6 === currentPlayer &&
    tableValues?.cell_9 === currentPlayer
  )
    return "col3";
  if (
    tableValues?.cell_3 === currentPlayer &&
    tableValues?.cell_5 === currentPlayer &&
    tableValues?.cell_7 === currentPlayer
  )
    return "crx1";

  if (
    tableValues?.cell_1 === currentPlayer &&
    tableValues?.cell_5 === currentPlayer &&
    tableValues?.cell_9 === currentPlayer
  )
    return "crx2";
  return false;
}
export function markCells(action, c1, c2, c3) {
  if (action === "add" && c1 && c2 && c3) {
    const cellsArr = [c1, c2, c3];
    cellsArr.forEach((cell) => {
      const element = document.getElementById(cell);
      element.classList.add("win");
    });
    return;
  }
  if (action === "clear") {
    const cellsArr = document.querySelectorAll("main > div > div");
    cellsArr.forEach((cell) => {
      cell.classList.remove("win");
    });
    return;
  }
}
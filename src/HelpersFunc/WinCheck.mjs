function winCheck(currentPlayer, tableValues) {
    if (
      tableValues.cell_1 === currentPlayer &&
      tableValues.cell_2 === currentPlayer &&
      tableValues.cell_3 === currentPlayer
    )
      return true;
    if (
      tableValues?.cell_4 === currentPlayer &&
      tableValues?.cell_5 === currentPlayer &&
      tableValues?.cell_6 === currentPlayer
    )
      return true;
    if (
      tableValues?.cell_7 === currentPlayer &&
      tableValues?.cell_8 === currentPlayer &&
      tableValues?.cell_9 === currentPlayer
    )
      return true;
    if (
      tableValues?.cell_1 === currentPlayer &&
      tableValues?.cell_4 === currentPlayer &&
      tableValues?.cell_7 === currentPlayer
    )
      return true;
    if (
      tableValues?.cell_2 === currentPlayer &&
      tableValues?.cell_5 === currentPlayer &&
      tableValues?.cell_8 === currentPlayer
    )
      return true;
    if (
      tableValues?.cell_3 === currentPlayer &&
      tableValues?.cell_6 === currentPlayer &&
      tableValues?.cell_9 === currentPlayer
    )
      return true;
    if (
      tableValues?.cell_3 === currentPlayer &&
      tableValues?.cell_5 === currentPlayer &&
      tableValues?.cell_7 === currentPlayer
    )
      return true;
    if (
      tableValues?.cell_1 === currentPlayer &&
      tableValues?.cell_5 === currentPlayer &&
      tableValues?.cell_9 === currentPlayer
    )
      return true;
    return false;
  }
  export default winCheck;
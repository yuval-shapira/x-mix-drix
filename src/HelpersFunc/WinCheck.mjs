function winCheck(currentPlayer, tableValues) {
    if (
      tableValues[0] === currentPlayer &&
      tableValues[1] === currentPlayer &&
      tableValues[2] === currentPlayer
    )
      return "Yes";
    if (
      tableValues[3] === currentPlayer &&
      tableValues[4] === currentPlayer &&
      tableValues[5] === currentPlayer
    )
      return "Yes";
    if (
      tableValues[6] === currentPlayer &&
      tableValues[7] === currentPlayer &&
      tableValues[8] === currentPlayer
    )
      return "Yes";
    if (
      tableValues[0] === currentPlayer &&
      tableValues[3] === currentPlayer &&
      tableValues[6] === currentPlayer
    )
      return "Yes";
    if (
      tableValues[1] === currentPlayer &&
      tableValues[4] === currentPlayer &&
      tableValues[7] === currentPlayer
    )
      return "Yes";
    if (
      tableValues[2] === currentPlayer &&
      tableValues[5] === currentPlayer &&
      tableValues[8] === currentPlayer
    )
      return "Yes";
    if (
      tableValues[2] === currentPlayer &&
      tableValues[4] === currentPlayer &&
      tableValues[6] === currentPlayer
    )
      return "Yes";
    if (
      tableValues[0] === currentPlayer &&
      tableValues[4] === currentPlayer &&
      tableValues[8] === currentPlayer
    )
      return "Yes";
    return "No";
  }
  export default winCheck;
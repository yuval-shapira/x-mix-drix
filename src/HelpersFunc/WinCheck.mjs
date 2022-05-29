export default function winCheck(playerToCheck, tableValues) {
  if (
    tableValues[0].move === playerToCheck &&
    tableValues[1].move === playerToCheck &&
    tableValues[2].move === playerToCheck
  )
    return [0,1,2];
  if (
    tableValues[3].move === playerToCheck &&
    tableValues[4].move === playerToCheck &&
    tableValues[5].move === playerToCheck
  )
    return [3,4,5];
  if (
    tableValues[6].move === playerToCheck &&
    tableValues[7].move === playerToCheck &&
    tableValues[8].move === playerToCheck
  )
    return [6,7,8];

  if (
    tableValues[0].move === playerToCheck &&
    tableValues[3].move === playerToCheck &&
    tableValues[6].move === playerToCheck
  )
    return [0,3,6];
  if (
    tableValues[1].move === playerToCheck &&
    tableValues[4].move === playerToCheck &&
    tableValues[7].move === playerToCheck
  )
    return [1,4,7];
  if (
    tableValues[2].move === playerToCheck &&
    tableValues[5].move === playerToCheck &&
    tableValues[8].move === playerToCheck
  )
    return [2,5,8];
  if (
    tableValues[2].move === playerToCheck &&
    tableValues[4].move === playerToCheck &&
    tableValues[6].move === playerToCheck
  )
    return [2,4,6];

  if (
    tableValues[0].move === playerToCheck &&
    tableValues[4].move === playerToCheck &&
    tableValues[8].move === playerToCheck
  )
    return [0,4,8];
  return null;
}
export function markCells(winCells) {

}

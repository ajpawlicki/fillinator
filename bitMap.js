/*
  I: matrix, curr coordinate (row, col), fillColor, colorToReplace
  O: changed matrix
  C:
  E:

  Skeleton:
  1a. If colorToReplace doesn't match currColor or outside of matrix: return
  1b. If colorToReplace matches currColor: change to fillColor
  2. For each neighbor: recursively do step 1
*/

function fillBitMap(matrix, coordinate, fillColor, colorToReplace) {
  const currColor = getColor(matrix, coordinate);
  if (!currColor) return;
  if (!colorsAreEqual(colorToReplace, currColor)) return;

  matrix[coordinate.row][coordinate.col] = fillColor;

  fillBitMap(matrix, {row: coordinate.row + 1, col: coordinate.col}, fillColor, colorToReplace);
  fillBitMap(matrix, {row: coordinate.row - 1, col: coordinate.col}, fillColor, colorToReplace);
  fillBitMap(matrix, {row: coordinate.row, col: coordinate.col + 1}, fillColor, colorToReplace);
  fillBitMap(matrix, {row: coordinate.row, col: coordinate.col - 1}, fillColor, colorToReplace);
}

function colorsAreEqual(color1, color2) {
  return color1[0] === color2[0] && color1[1] === color2[1] && color1[2] === color2[2];
}

function getColor(matrix, coordinate) {
  if (matrix[coordinate.row] && matrix[coordinate.row][coordinate.col]) return matrix[coordinate.row][coordinate.col];
  return null;
}

module.exports = {
  fillBitMap,
  colorsAreEqual,
  getColor
};
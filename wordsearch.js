const transpose = function(matrix) {
  // length of overall array x
  // length of each internal array y
  // array[y][x]
  let result = [];
  let x = matrix.length;
  let y = matrix[0].length;

  for (let j = 0; j < y; j++) {
    const newRow = [];
    for (let i = 0; i < x; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
};

const wordSearch = (letters, word) => {
  let transposedLetters = transpose(letters);
  let vertialJoin = transposedLetters.map((ls) => ls.join(""));

  for (let v of vertialJoin) {
    if (v.includes(word)) return true;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));
  console.log(horizontalJoin);

  for (let h of horizontalJoin) {
    if (h.includes(word)) return true;
  }

  return false;
};

console.log(
  wordSearch(
    [
      ["A", "W", "C", "F", "Q", "U", "A", "L"],
      ["S", "E", "I", "N", "F", "E", "L", "D"],
      ["Y", "F", "C", "F", "Q", "U", "A", "L"],
      ["H", "R", "J", "T", "E", "V", "R", "G"],
      ["W", "A", "C", "S", "Y", "E", "R", "L"],
      ["B", "N", "R", "E", "N", "E", "Y", "B"],
      ["U", "K", "T", "W", "A", "P", "A", "I"],
      ["O", "D", "C", "A", "K", "U", "A", "S"],
      ["E", "Z", "K", "F", "Q", "U", "A", "L"],
    ],
    "FRANK"
  )
);

module.exports = wordSearch;

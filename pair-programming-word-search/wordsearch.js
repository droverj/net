// wordsearch.js
// pair-programming-word-search with Wei Shen

const transpose = matrix => {
  let result = [];
  const width = matrix[0].length;

  for (let i = 0; i < width; i++) {
    const newRow = [];
    for (const item of matrix) {
      newRow.push(item[i]);
    }
    result.push(newRow);
  }
  return result;
};

const wordSearch = (letters,word)=>{
  if (letters.length === 0) {
    return undefined;
  }
  if (search(letters, word))
    return true;

  if (search(transpose(letters), word))
    return true;
  if (search(letters, reverse(word)))
    return true;
  if (search(transpose(letters), reverse(word)))
    return true;
  return false;
};

const reverse = (word) => {
  return (word.split("").reverse().join(""));
};

const search = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};


module.exports = wordSearch;
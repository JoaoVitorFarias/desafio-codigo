const isValid = (board) => {

   const line = [], columns = [], boxes = [];
  for(let i = 0; i < board.length; i++) {
      line.push(new Set());
      columns.push(new Set());
      boxes.push(new Set());
  }
  
  for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[i].length; j++) {
          const square = board[i][j];
          if(square === '.') continue;
          const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
          if(line[i].has(square) || columns[j].has(square) || boxes[boxNum].has(square))
              return false;
          line[i].add(square);
          columns[j].add(square);
          boxes[boxNum].add(square);
      }
  }
  
  return true
  
};


module.exports = {isValid};
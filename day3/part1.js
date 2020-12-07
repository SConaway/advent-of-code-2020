const data = require('./data');

let map = [];

data.split('\n').map((line) => map.push(line.split('')));

let treeCount = 0;

for (let row = 0; row < map.length; row++) {
    let col = row * 3;
    if (col > map[0].length) col = col % map[0].length;
    let char = map[row][col];
    if (char === '#') treeCount++;
}
console.log(treeCount);

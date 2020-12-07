const data = require('./data');

let map = [];

data.split('\n').map((line) => map.push(line.split('')));

function getTrees(right, down) {
    let treeCount = 0;

    let x = 0;
    let y = 0;

    do {
        x += right;
        y += down;

        if (x >= map[y].length) x %= map[y].length;

        if (map[y][x] === '#') {
            treeCount++;
        }
    } while (y < map.length - 1);

    console.log(`right: ${right}, down: ${down} = ${treeCount}`);
    return treeCount;
}

oneOne = getTrees(1, 1);
threeOne = getTrees(3, 1);
fiveOne = getTrees(5, 1);
sevenOne = getTrees(7, 1);
oneTwo = getTrees(1, 2);

console.log(oneOne * threeOne * fiveOne * sevenOne * oneTwo);

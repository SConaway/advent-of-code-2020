const data = require('./data');

let tickets = [];

data.split('\n').forEach((line) => tickets.push(line));

let highest = 0;

let ids = [];
tickets.forEach((ticket) => {
    let rowRange = [0, 127];
    let colRange = [0, 7];

    ticket.split('').forEach((char) => {
        if (char === 'F') {
            rowRange = [
                rowRange[0],
                Math.floor((rowRange[1] + rowRange[0]) / 2),
            ];
        } else if (char === 'B') {
            rowRange = [
                Math.ceil((rowRange[1] + rowRange[0]) / 2),
                rowRange[1],
            ];
        } else if (char === 'L') {
            colRange = [
                colRange[0],
                Math.floor((colRange[1] + colRange[0]) / 2),
            ];
        } else if (char === 'R') {
            colRange = [
                Math.ceil((colRange[1] + colRange[0]) / 2),
                colRange[1],
            ];
        }
    });

    let id = rowRange[0] * 8 + colRange[0];

    // console.log(rowRange[0], colRange[0], id);
    if (id > highest) highest = id;
    ids.push(id);
});

console.log(`highest: ${highest}`);

ids.sort((x, y) => (x > y ? 1 : -1));

let mine = -1;

ids.forEach((id, index) => {
    if (index + 2 > ids.length) return;
    if (id + 1 !== ids[index + 1]) mine = id + 1; // `id + 1` since id is the one we have, so we need the next one
});

console.log(`my seat: ${mine}`);

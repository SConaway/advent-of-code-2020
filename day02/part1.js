const data = require('./data');

let count = 0;

data.forEach((item) => {
    let arr = item.split(' ');
    if (arr.length === 3) {
        let [min, max] = arr[0].split('-');
        let letter = arr[1].charAt(0);
        let pass = arr[2];

        let occurrences = pass
            .split('')
            .map((char, i) => char === letter)
            .filter(Boolean).length;

        if (min <= occurrences && occurrences <= max) count++;
    }
});

console.log(count);

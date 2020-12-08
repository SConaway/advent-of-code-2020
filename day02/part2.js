const data = require('./data');

let count = 0;

data.forEach((item) => {
    let arr = item.split(' ');
    if (arr.length === 3) {
        let [first, second] = arr[0].split('-');
        let letter = arr[1].charAt(0);
        let pass = arr[2];

        if (
            (pass.charAt(first - 1) === letter &&
                pass.charAt(second - 1) !== letter) ||
            (pass.charAt(first - 1) !== letter &&
                pass.charAt(second - 1) === letter)
        )
            count++;
    }
});

console.log(count);

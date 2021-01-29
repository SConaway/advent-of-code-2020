const data = require('./data');

let bags = [];

data.replace('.', '')
    .split('\n')
    .forEach((line) => {
        let key = line.split(' bags contain')[0];
        let contentsText = line.split(' contain ')[1];

        let contents = [];

        contentsText.split(', ').forEach((color) => {
            let split = color.split(' ');
            contents.push(`${split[1]} ${split[2]}`);
        });

        bags.push([key, contents]);
    });

console.log(bags);

bags.forEach((item) => {
    let [bag, contents] = item;
    if (contents.contains('shiny gold')) {
    }
});

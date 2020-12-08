const data = require('./data');

let groups = [];

data.split('\n\n').forEach((line) => groups.push(line));

let sum = 0;

groups.forEach((group) => {
    let people = [];

    let groupQuestions = [];

    group.split('\n').forEach((line) => people.push(line));
    people.forEach((person) => {
        person.split('').forEach((question) => {
            groupQuestions.push(question);
        });
    });

    groupQuestions = groupQuestions.sort();

    let uniqueInGroup = groupQuestions.filter(
        (value, index, arr) => arr.indexOf(value) === index,
    );

    uniqueInGroup.forEach((question) => {
        let count = groupQuestions.reduce(
            (a, v) => (v === question ? a + 1 : a),
            0,
        );
        if (count === people.length) sum++;
    });
});

console.log(sum);

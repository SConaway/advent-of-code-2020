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
            if (!groupQuestions.includes(question))
                groupQuestions.push(question);
        });
    });

    sum += groupQuestions.length;
});

console.log(sum);

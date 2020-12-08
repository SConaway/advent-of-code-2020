const data = require('./data');

let passports = [];

data.split('\n\n').forEach((line) => passports.push(line));

let validCount = 0;

passports.forEach((passport) => {
    let byr = passport.indexOf('byr') >= 0;
    let iyr = passport.indexOf('iyr') >= 0;
    let eyr = passport.indexOf('eyr') >= 0;
    let hgt = passport.indexOf('hgt') >= 0;
    let hcl = passport.indexOf('hcl') >= 0;
    let ecl = passport.indexOf('ecl') >= 0;
    let pid = passport.indexOf('pid') >= 0;

    if (byr && iyr && eyr && hgt && hcl && ecl && pid) validCount++;
});

console.log(validCount);

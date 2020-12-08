const data = require('./data');

let passports = [];

data.split('\n\n').forEach((line) => passports.push(line));

let validCount = 0;

passports.forEach((passport) => {
    let split = passport.replace(/\n/g, ' ');
    let arr = split.split(' ');

    if (arr.length < 7) return;

    let byr = false;
    let iyr = false;
    let eyr = false;
    let hgt = false;
    let hcl = false;
    let ecl = false;
    let pid = false;

    arr.forEach((el) => {
        let [key, value] = el.split(':');
        if (key === 'byr' && value >= 1920 && value <= 2002) byr = true;
        if (key === 'iyr' && value >= 2010 && value <= 2020) iyr = true;
        if (key === 'eyr' && value >= 2020 && value <= 2030) eyr = true;
        if (key === 'hgt') {
            let [height, unit] = value.match(/[a-z]+|[^a-z]+/gi);
            if (unit === 'cm') {
                if (height >= 150 && height <= 193) {
                    hgt = true;
                }
            } else if (unit === 'in') {
                if (height >= 59 && height <= 76) {
                    hgt = true;
                }
            }
        }
        if (key === 'hcl') {
            if (value.match(/^#[0-9A-F]{6}$/i)) hcl = true; // OR: ^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$
        }
        if (
            key === 'ecl' &&
            (value === 'amb' ||
                value === 'blu' ||
                value === 'brn' ||
                value === 'gry' ||
                value === 'grn' ||
                value === 'hzl' ||
                value === 'oth')
        )
            ecl = true;
        if (key === 'pid' && value.match(/^\d{9}$/)) pid = true;
    });

    // console.log(arr);
    // console.log(
    //     `byr: ${byr}, iyr: ${iyr}, eyr: ${eyr}, hgt: ${hgt}, hcl: ${hcl}, ecl: ${ecl}, pid: ${pid}`,
    // );

    if (byr && iyr && eyr && hgt && hcl && ecl && pid) validCount++;
});

console.log(validCount);

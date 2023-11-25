//* Day 1 22/11
//todo Перетворення строки у число:
//! Моє рішення:
const stringToNumber = function (str) {
  return +str;
};
//! Інші рішення:
var stringToNumber = function (str) {
  return parseInt(str);
};
var stringToNumber = function (str) {
  return Number(str);
};

//todo Скільки голосних в слові:
//!Моє рішення:
function getCount(str) {
  const vowels = 'aeiou';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
//! Інші рішення:
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

//todo Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character. For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
//! Моє рішення:
function towerBuilder(nFloors) {
  const tower = [];

  for (let i = 0; i < nFloors; i++) {
    const space = ' '.repeat(nFloors - i - 1);
    const block = '*'.repeat(2 * i + 1);

    tower.push(space + block + space);
  }
  return tower;
}
//! Інші рішення:
function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

function towerBuilder(n) {
  return [...Array(n)].map(
    (_, i) =>
      ' '.repeat(n - 1 - i) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - 1 - i)
  );
}

//* Day 2 23/11
//todo In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. Highest must be first:
//! Моє рішення:
function highAndLow(numbers) {
  numbers = numbers.split(' ');

  const minNum = Math.min(...numbers);
  const maxNum = Math.max(...numbers);

  const res = `${maxNum} ${minNum}`;

  return res;
}

//! Інші рішення:
function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers) {
  let arr = numbers.split(' ').map(Number);
  return Math.max(...arr) + ' ' + Math.min(...arr);
}

function highAndLow(numbers) {
  var arr = numbers.split(' ').sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1] + ' ' + arr[0];
}

//todo Помножити всі числа в масиві:
//! Моє рішення:
function grow(x) {
  return x.reduce((mult, current) => mult * current);
}

//! Інші рішення:
const grow = (x) => eval(x.join('*'));

//todo Чи викликано за допомогою new:
//! Моє рішення:
function wasCalledWithNew() {
  return new Boolean(new.target);
}

//! Інші рішення:
function wasCalledWithNew() {
  return new.target ? { valueOf: () => true } : { valueOf: () => false };
}

//* Day 3 24/11
//todo Фільтер масиву за типом:
//! Моє рішення:
function filter_list(l) {
  return l.filter((item) => typeof item === 'number');
}

//! Інші рішення:
function filter_list(l) {
  return l.filter(Number.isInteger);
}

//todo Прибрати camel casing і додати пробіл:
//! Моє рішення:
function solution(string) {
  return string
    .split('')
    .map((l) => (l === l.toUpperCase() ? ' ' + l : l))
    .join('');
}

//! Інші рішення:
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

function solution(text) {
  return text.split(/(?=[A-Z])/).join(' ');
}

function solution(string) {
  return string.replace(/(?=[A-Z])/g, ' ');
}

//todo In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are: Years divisible by 4 are leap years, but years divisible by 100 are not leap years, but years divisible by 400 are leap years. Tested years are in range 1600 ≤ year ≤ 4000.
//! Моє рішення:
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? true
    : false;
}

//! Інші рішення:
function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

const isLeapYear = (year) => new Date(year, 1, 29).getDate() == 29;

//* Day 4 25/11
//todo Знайти найменше значення
//! Моє рішення:
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
//! Інші рішення:
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

//todo Видалити пробіли
//! Моє рішення:
function noSpace(x) {
  return x
    .split('')
    .map((i) => (i == ' ' ? i.trim() : i))
    .join('');
}

//! Інші рішення:
function noSpace(x) {
  return x.split(' ').join('');
}

function noSpace(x) {
  return x.replaceAll(' ', '');
}

function noSpace(x) {
  return x.replace(/ /g, '');
}

//todo Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces. Rules for a smiling face: Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ; . A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~. Every smiling face must have a smiling mouth that should be marked with either ) or D:
//! Моє рішення:
function countSmileys(arr) {
  const smiles = /[:;][-~]?[)D]/;
  let count = 0;

  for (let s of arr) {
    if (smiles.exec(s)) {
      //test
      count++;
    }
  }
  return count;
}

//! Інші рішення:
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

const countSmileys = (ss) =>
  ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);

countSmileys = (arr) => (arr.join``.match(/[:;][~-]?[)D]/g) || []).length;

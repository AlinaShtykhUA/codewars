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

//* Day 5 26/11
//todo You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//! Моє рішення:
function sortArray(array) {
  const oddNum = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);

  let oddIndex = 0;
  const result = array.map((num) => (num % 2 !== 0 ? oddNum[oddIndex++] : num));

  return result;
}

//! Інші рішення:
function sortArray(array) {
  var odd = array.filter((n) => n % 2).sort((a, b) => a - b);

  return array.map((n) => (n % 2 ? odd.shift() : n));
}

//* Day 6 27/11
//todo Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//! Моє рішення:
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}

//! Інші рішення:
var isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;

function isTriangle(a, b, c) {
  var sides = [a, b, c].sort();
  return sides[0] + sides[1] > sides[2];
}

//todo Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//! Моє рішення:
function order(words) {
  const arr = words.split(' ');
  const sorted = arr.sort((a, b) => {
    const numA = a.match(/\d/); //(/\d/) - шукає числа
    const numB = b.match(/\d/);
    return numA - numB;
  });

  return sorted.join(' ');
}

//! Інші рішення:
function order(words) {
  return words
    .split(' ')
    .reduce(
      (ordered, word) => ((ordered[word.match(/\d/) - 1] = word), ordered),
      []
    )
    .join(' ');
}

//todo There is a bus moving in the city which takes and drops some people at each bus stop. You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop. Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D Take a look on the test cases. Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative. The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
//! Моє рішення:
var number = function (busStops) {
  let total = 0;
  for (const [on, off] of busStops) {
    total += on - off;
  }
  return Math.max(total, 0);
};

//! Інші рішення:
const number = (busStops) =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);

//* Day 7 28/11
//todo Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//! Моє рішення:
function repeatStr(n, s) {
  return s.repeat(n);
}

//! Інші рішення:
function repeatStr(n, s) {
  return n > 0 ? s.repeat(n) : '';
}

//todo You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//! Моє рішення:
function getMiddle(s) {
  const length = s.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 1) {
    return s[middleIndex];
  } else {
    return s.substring(middleIndex - 1, middleIndex + 1);
  }
}

//! Інші рішення:
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

//todo Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//! Моє рішення:
function invert(array) {
  return array.map((n) => (n ? -n : n));
}

//! Інші рішення:
const invert = (array) => array.map((num) => -num);

function invert(array) {
  return array.map((n) => n && -n);
}

//* Day 8 29/11
//todo Сума двох найменших чисел
//! Моє рішення:
function sumTwoSmallestNumbers(numbers) {
  const sNum = numbers.sort((a, b) => a - b);
  return sNum[0] + sNum[1];
}

//! Інші рішення:
function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y);

//todo  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.
//! Моє рішення:
function validatePIN(pin) {
  return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
}

//! Інші рішення:
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

//todo  Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.
//! Моє рішення:
function removeSmallest(numbers) {
  const minNum = numbers.indexOf(Math.min(...numbers));

  return numbers.slice(0, minNum).concat(numbers.slice(minNum + 1));
}

//! Інші рішення:
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

const removeSmallest = (numbers) =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));

//* Day 9 30/11
//todo Прахувати вік котів і собак відносно людського
//! Моє рішення:
var humanYearsCatYearsDogYears = function (humanYears) {
  let catY, dogY;
  //     if (humanYears === 1) {
  //         catY = 15;
  //         dogY = 15;
  //     } else if (humanYears === 2) {
  //         catY = 15 + 9;
  //         dogY = 15 + 9;
  //     } else {
  //         catY = 15 + 9 + 4 * (humanYears - 2);
  //         dogY = 15 + 9 + 5 * (humanYears - 2);
  //     }
  //Просто, щоб попрактикуватись
  switch (humanYears) {
    case 1:
      catY = 15;
      dogY = 15;
      break;
    case 2:
      catY = 15 + 9;
      dogY = 15 + 9;
      break;
    default:
      catY = 15 + 9 + 4 * (humanYears - 2);
      dogY = 15 + 9 + 5 * (humanYears - 2);
      break;
  }

  return [humanYears, catY, dogY];
};

//! Інші рішення:
var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};

const humanYearsCatYearsDogYears = (humanYears) => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];

//todo Convert number to reversed array of digits
//! Моє рішення:
function digitize(n) {
  return String(n).split('').reverse().map(Number);
}

//! Інші рішення:
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

function digitize(n) {
  return (n + '').split('').map(Number).reverse();
}

//todo Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
//! Моє рішення:
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

//* Day 10 01/12
//todo In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
//! Моє рішення:
function solve(a, b) {
  const concat = a + b;

  const uniq = concat
    .split('')
    .filter((c) => !(a.includes(c) && b.includes(c)))
    .join('');

  return uniq;
}

//! Інші рішення:
function solve(a, b) {
  return (a + b)
    .split('')
    .filter((c) => !a.includes(c) || !b.includes(c))
    .join('');
}

//todo No Story. No Description. Only by Thinking and Testing. Look at result of testcase, guess the code!
//! Моє рішення:
function testit(a, b) {
  return [...new Set(a), ...new Set(b)].sort((a, b) => a - b);
}

//! Інші рішення:
function testit(a, b) {
  a = [...new Set(a)];
  b = [...new Set(b)];
  return a.concat(b).sort(function (c, d) {
    return c - d;
  });
}

//todo Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//! Моє рішення:
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}

//! Інші рішення:
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join('');
}

//* Day 11 02/12
//todo Build a function that returns an array of integers from n to 1 where n>0.
//! Моє рішення:
const reverseSeq = (n) => {
  const res = [];

  for (let i = n; i >= 1; i--) {
    res.push(i);
  }
  return res;
};

//! Інші рішення:
const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};

const reverseSeq = (length) => Array.from({ length }, () => length--);

//todo Simple, given a string of words, return the length of the shortest word(s).
//! Моє рішення:
function findShort(s) {
  const arr = s.split(' ');
  const shortest = arr.reduce((short, cur) => {
    return cur.length < short.length ? cur : short;
  }, arr[0]);
  return shortest.length;
}

//! Інші рішення:
function findShort(s) {
  return Math.min(...s.split(' ').map((s) => s.length));
}

const findShort = (s) =>
  s
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop().length;

function findShort(s) {
  return s
    .split(' ')
    .map((a) => a.length)
    .reduce((a, b) => Math.min(a, b));
}

//todo Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
//! Моє рішення:
function greet(name) {
  return name === 'Johnny' ? 'Hello, my love!' : 'Hello, ' + name + '!';
}

//* Day 12 03/12
//todo Чи квадрат
//! Моє рішення:
var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

//* Day 13 04/12
//todo Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise. The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
//! Моє рішення:
function hasUniqueChars(str) {
  const arr = str.split('');
  const uniq = new Set(arr);
  return arr.length === uniq.size;
}

//! Інші рішення:
let hasUniqueChars = (str) => new Set(str).size === str.length;

function hasUniqueChars(str) {
  return !/(.).*\1/.test(str);
}

function hasUniqueChars(str) {
  return str.length === new Set(str).size;
}

//todo Reverse string
//! Моє рішення:
function solution(str) {
  return str.split('').reverse().join('');
}

//todo Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering. Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//! Моє рішення:
var number = function (array) {
  return array.map((line, i) => `${i + 1}: ${line}`);
};

//* Day 14 05/12
//todo Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//! Моє рішення:
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

//! Інші рішення:
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}

//todo Write a function to split a string and convert it into an array of words.
//! Моє рішення:
function stringToArray(string) {
  return string.split(' ');
}

//todo Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//! Моє рішення:
function persistence(num) {
  let count = 0;

  while (num >= 10) {
    num = String(num)
      .split('')
      .reduce((n, digit) => n * digit, 1);
    count++;
  }

  return count;
}

//! Інші рішення:
const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0;
};

//* Day 1 22/11
//todo Перетворення строки у число:
//! Моє рішення:
const stringToNumber = function (str) {
  return +str;
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

//* Day 3 24/11
//todo Фільтер масиву за типом:
//! Моє рішення:
function filter_list(l) {
  return l.filter((item) => typeof item === 'number');
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
function solution(text) {
  return text.split(/(?=[A-Z])/).join(' ');
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

//todo Видалити пробіли
//! Моє рішення:
function noSpace(x) {
  return x
    .split('')
    .map((i) => (i == ' ' ? i.trim() : i))
    .join('');
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

//* Day 5 26/11
//todo You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//! Моє рішення:
function sortArray(array) {
  const oddNum = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);

  let oddIndex = 0;
  const result = array.map((num) => (num % 2 !== 0 ? oddNum[oddIndex++] : num));

  return result;
}

//* Day 6 27/11
//todo Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//! Моє рішення:
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
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

//todo There is a bus moving in the city which takes and drops some people at each bus stop. You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop. Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D Take a look on the test cases. Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative. The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
//! Моє рішення:
var number = function (busStops) {
  let total = 0;
  for (const [on, off] of busStops) {
    total += on - off;
  }
  return Math.max(total, 0);
};

//* Day 7 28/11
//todo Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//! Моє рішення:
function repeatStr(n, s) {
  return s.repeat(n);
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

//todo Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//! Моє рішення:
function invert(array) {
  return array.map((n) => (n ? -n : n));
}

//* Day 8 29/11
//todo Сума двох найменших чисел
//! Моє рішення:
function sumTwoSmallestNumbers(numbers) {
  const sNum = numbers.sort((a, b) => a - b);
  return sNum[0] + sNum[1];
}

//todo  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.
//! Моє рішення:
function validatePIN(pin) {
  return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
}

//todo  Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.
//! Моє рішення:
function removeSmallest(numbers) {
  const minNum = numbers.indexOf(Math.min(...numbers));

  return numbers.slice(0, minNum).concat(numbers.slice(minNum + 1));
}

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

//todo Convert number to reversed array of digits
//! Моє рішення:
function digitize(n) {
  return String(n).split('').reverse().map(Number);
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

//todo No Story. No Description. Only by Thinking and Testing. Look at result of testcase, guess the code!
//! Моє рішення:
function testit(a, b) {
  return [...new Set(a), ...new Set(b)].sort((a, b) => a - b);
}

//todo Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//! Моє рішення:
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
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

//* Day 15 06/12
//todo Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//! Моє рішення:
function between(a, b) {
  const res = [];

  for (let i = a; i <= b; i++) {
    res.push(i);
  }
  return res;
}

//todo Given an array of integers, return a new array with each value doubled.
//! Моє рішення:
function maps(x) {
  return x.map((n) => n * 2);
}

//todo The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//! Моє рішення:
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map((w, i, arr) => (arr.indexOf(w) === arr.lastIndexOf(w) ? '(' : ')'))
    .join('');
}

//* Day 16 07/12
//todo Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
//! Моє рішення:
var countSheep = function (num) {
  let sheeps = '';
  for (let i = 1; i <= num; i++) {
    sheeps += i + ' sheep...';
  }
  return sheeps;
};

//todo Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string)
//! Моє рішення:
function sumStr(a, b) {
  const sum = Number(a) + Number(b);

  return sum.toString();
}

//todo Your function takes two arguments: current father's age (years) current age of his son (years) Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
//! Моє рішення:
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//* Day 17 08/12
//todo Your task is to find the first element of an array that is not consecutive. By not consecutive we mean not exactly 1 larger than the previous element of the array. E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
//! Моє рішення:
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

//* Day 18 09/12
//todo Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//! Моє рішення:
function friend(friends) {
  return friends.filter((n) => n.length === 4);
}

//* Day 19 10/12
//todo Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
//! Моє рішення:
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//todo Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//! Моє рішення:
function greet(name, owner) {
  return name == owner ? 'Hello boss' : 'Hello guest';
}

//todo Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero).
//! Моє рішення:
function oddOrEven(array) {
  const sum = array.reduce((acc, num) => acc + num, 0);

  return sum % 2 === 0 ? 'even' : 'odd';
}

//* Day 20 11/12
//todo Given a string str, reverse it and omit all non-alphabetic characters. Example : For str = "krishan", the output should be "nahsirk". For str = "ultr53o?n", the output should be "nortlu".
//! Моє рішення:
function reverseLetter(str) {
  return str
    .split('')
    .reverse()
    .join('')
    .replace(/[^a-zA-Z]/g, '');
}

//* Day 21 12/12
//todo Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
//! Моє рішення:
function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  array1.sort((x, y) => x - y);
  array2.sort((x, y) => x - y);

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] * array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

//* Day 22 13/12
//todo You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item. Implement the function which takes an array containing the names of people that like an item. It must return the display text
//! Моє рішення:
function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

//* Day 23 14/12
//todo A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66). His mother looks out of a window 1.5 meters from the ground. How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)? Three conditions must be met for a valid experiment: Float parameter "h" in meters must be greater than 0, Float parameter "bounce" must be greater than 0 and less than 1, Float parameter "window" must be less than h. If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
//! Моє рішення:
function bouncingBall(h, bounce, window) {
  if (h > 0 && 0 < bounce && bounce < 1 && window < h) {
    let count = 1;

    while (h * bounce > window) {
      h *= bounce;
      count += 2;
    }

    return count;
  } else {
    return -1;
  }
}

//* Day 24 15/12
//todo Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!
//! Моє рішення:
function getSum(a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }

  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}

//* Day 25 16/12
//! Weekend

//* Day 26 17/12
//todo You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.
//! Моє рішення:
function stray(numbers) {
  return numbers.reduce((acc, cur) => acc ^ cur); //хор виключаюче або
}

//* Day 27 18/12
//todo Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
//! Моє рішення:
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

//* Day 28 19/12
//todo Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
//todo The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
//todo Note to Tax: not the invested principal is taxed, but only the year's accrued interest
// Example:
//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00
// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
//todo Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
//todo Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
//todo Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
//! Моє рішення:
function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    const interestEarned = principal * interest;

    const netInterest = interestEarned * (1 - tax);

    principal += netInterest;

    years++;
  }

  return years;
}

//* Day 29 20/12
//todo You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
//! Моє рішення:
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  const dirCounts = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  walk.forEach((dir) => {
    dirCounts[dir]++;
  });

  return dirCounts['n'] === dirCounts['s'] && dirCounts['e'] === dirCounts['w'];
}

//* Day 30 21/12
//todo Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
//todo The test cases contain numbers only by mistake.
//! Моє рішення:
function correct(string) {
  return string
    .split('')
    .map((s) => (s === '5' ? 'S' : s === '1' ? 'I' : s === '0' ? 'O' : s))
    .join('');
}

//* Day 31 22/12
//todo Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//! Моє рішення:
function duplicateCount(text) {
  let charCount = {};

  for (let char of text) {
    let charLower = char.toLowerCase();
    charCount[charLower] = (charCount[charLower] || 0) + 1;
  }

  let duplicatesCount = Object.values(charCount).reduce(
    (count, charCount) => count + (charCount > 1 ? 1 : 0),
    0
  );

  return duplicatesCount;
}

//* Day 32 23/12
//todo Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. For example, the score of abad is 8 (1 + 2 + 1 + 4). You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.
//! Моє рішення:
function high(x) {
  const words = x.split(' ');

  const calculateScore = (word) =>
    word.split('').reduce((score, char) => score + char.charCodeAt(0) - 96, 0);

  let highestScore = 0;
  let highestScoreWord = '';

  words.forEach((word) => {
    const score = calculateScore(word);
    if (
      score > highestScore ||
      (score === highestScore && x.indexOf(word) < x.indexOf(highestScoreWord))
    ) {
      highestScore = score;
      highestScoreWord = word;
    }
  });

  return highestScoreWord;
}

//* Day 33 24/12
//todo Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
//! Моє рішення:
function dirReduc(arr) {
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  const stack = [];

  for (const direction of arr) {
    opposites[stack[stack.length - 1]] === direction
      ? stack.pop()
      : stack.push(direction);
  }

  return stack;
}

//* Day 34 25/12
//! Weekend

//* Day 35 26/12
//todo Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//! Моє рішення:
function reverseWords(str) {
  return str
    .split(' ')
    .map((s) => s.split('').reverse().join(''))
    .join(' ');
}

//* Day 36 27/12
//todo Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//! Моє рішення:
function descendingOrder(n) {
  return Number(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

//todo In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object. You will receive a string input that looks something like this:
//user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
// Your method should return an object hash-map that looks like this:
//
// {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   }
// }
//todo You can expect valid input. You won't see input like:
// This will NOT happen
// foo=1&foo.bar=2
//todo All properties and values will be strings — and the values should be left as strings to pass the tests. Make sure you decode the URI components correctly
//! Моє рішення:
function convertQueryToMap(query) {
  return query.split('&').reduce((result, pair) => {
    const [key, value] = pair.split('=').map(decodeURIComponent);

    if (!key) {
      return result;
    }

    key.split('.').reduce((nested, prop, index, array) => {
      return (
        nested[prop] || (nested[prop] = index === array.length - 1 ? value : {})
      );
    }, result);

    return result;
  }, {});
}

//* Day 37 28/12
//todo An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//! Моє рішення:
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

//* Day 38 29/12
//todo Examples: foo -> foo1; foobar23 -> foobar24; foo0042 -> foo0043; foo9 -> foo10; foo099 -> foo100;Attention: If the number has leading zeros the amount of digits should be considered.
//! Моє рішення:
function incrementString(s) {
  const number = s.match(/\d+$/);

  if (number) {
    const sNumber = number[0];
    s = s.slice(0, -sNumber.length);
    const incrementedNumber = String(parseInt(sNumber, 10) + 1);
    const zerosToAdd = Math.max(0, sNumber.length - incrementedNumber.length);

    return s + '0'.repeat(zerosToAdd) + incrementedNumber;
  }

  return s + '1';
}

//* Day 39 30/12
//! Weekend

//* Day 40 31/12
//! Weekend

//* Day 41 01/01
//todo In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. "a" = 1, "b" = 2, etc.
//! Моє рішення:
function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return text
    .toLowerCase()
    .split('')
    .filter((char) => alphabet.includes(char))
    .map((char) => alphabet.indexOf(char) + 1)
    .join(' ');
}

//* Day 42 02/01
//todo Well met with Fibonacci bigger brother, AKA Tribonacci. As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :( So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
//[1, 1 ,1, 3, 5, 9, 17, 31, ...]
//todo But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
//[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
//todo Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence. Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
//! Моє рішення:
function tribonacci(signature, n) {
  for (let i = 3; i < n; i++) {
    signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
  }
  return n > 0 ? signature.slice(0, n) : [];
}

//* Day 43 03/01
//todo Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
//! Моє рішення:
function problem(x) {
  return typeof x === 'number' ? x * 50 + 6 : 'Error';
}

//todo When provided with a number between 0-9, return it in words.
//! Моє рішення:
function switchItUp(number) {
  const words = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];

  if (number >= 0 && number <= 9) {
    return words[number];
  }
}

//todo Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array
//! Моє рішення:
function solution(nums) {
  return !nums || nums.length === 0 ? [] : nums.sort((a, b) => a - b);
}

//* Day 44 04/01
//todo You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. You can assume all values in the array are numbers.
//! Моє рішення:
function smallEnough(a, limit) {
  return a.every((e) => e <= limit);
}

//* Day 45 05/01
//todo There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out! https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
//! Моє рішення:
function queueTime(customers, n) {
  if (n === 1) {
    return customers.reduce((sum, time) => sum + time, 0);
  }

  const tills = Array(n).fill(0);

  for (const time of customers) {
    const minTime = Math.min(...tills);
    const minIndex = tills.indexOf(minTime);
    tills[minIndex] += time;
  }

  return Math.max(...tills);
}

//* Day 46 06/01
//! Weekend

//* Day 47 07/01
//todo Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.
//! Моє рішення:
function strCount(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    str[i] === letter ? count++ : 0;
  }
  return count;
}

//* Day 48 08/01
//todo Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
//! Моє рішення:
function enough(cap, on, wait) {
  return Math.max(0, on + wait - cap);
}

//* Day 49 09/01
//todo In this kata you will create a function that takes in a list and returns a list with the reverse order.
//! Моє рішення:
function reverseList(list) {
  return list.reverse();
}

//todo Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//! Моє рішення:
function smash(words) {
  return words.join(' ');
}

//todo Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
//todo Zero alone is fine, don't worry about it. Poor guy anyway
//! Моє рішення:
function noBoringZeros(n) {
  return n === 0 ? 0 : parseInt(n.toString().replace(/0+$/, ''), 10);
}

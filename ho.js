'use strict';

const repeat = function (fn, n) {
  for ( let i = 0; i < n; i++ ) {
    fn();
  }
};

const hello = () => console.log('Hello world');

const goodbye = () => console.log('Goodbye world');

// repeat(hello, 5);

// repeat(goodbye, 5);

function filter(arr, fn) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if ( fn(arr[i])) {
      newArr.push(arr[i]) ;
    }
    return newArr;
  }
}


// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

console.log(filter(myNames, arr => arr[0] === 'R'));

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function ( location ) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const rockWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Water is flooding the streets. Drive carefully.');
const snowWarning = hazardWarningCreator('Expected snowfall exceeds 3 inches in the next 6 hours.');

rockWarning('Main St and Pacific Ave');
rockWarning('Centinela Ave and Olympic Blvd');
floodWarning('Downtown Phoenix, Arizona');
snowWarning('Snow St and Flurry Way, Malibu, CA');

// turtle moving function

const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]

const total = turtleMovements;

let posMovements = total.filter( ( steps ) => steps[0] >= 0 && steps[1] >= 0 );

posMovements.map ( ( element ) => element[0] + element[1] );

posMovements.forEach( ( element ) => console.log(`Our turtle took a total of ${element} steps!`));

// reduce function

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

// const inputArray = input.reduce(' ');

// // inputArray.forEach(inputArray[i] = 3)

// let accumulator;

// switch(inputArray[i].length) {
// case 3 : 
//   return ' ';
// default : 
//   inputArray[i][i.length - 1].toUpperCase;
// }

const decoder = function(input) { 
  return input.split(' ').reduce((acc, cur) => {
    if ( cur = 3 ) {
      acc.push(' ');
    }
    else {
      cur[cur.length - 1].toUppercase();
  }
    return acc;
  };
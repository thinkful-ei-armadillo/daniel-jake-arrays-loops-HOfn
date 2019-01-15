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

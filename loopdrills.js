'use strict';

function max(numbers) {
  // let i = 0;
  let result;
  // while ( i <= numbers.length ) {
  //   if ( i = 0 ) {
  //     result = number
  //   }
  //   else if ( numbers[i] > numbers[i + 1] ) {
  //     result = numbers[i];
  //   }
  //   i++;
  // }
  for ( let i = 0; i < numbers.length; i++ ) {
    numbers[i] = result;
    if ( result > numbers[i] ) {
      numbers[i] = result;
    }
  }
  return result;
}

max([1,2,3,4,5]);

function min(numbers) {
  // your code here
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests


// function testFunctionWorks(fn, input, expected) {
//   if (fn(input) === expected) {
//     console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//     return true;
//   } else {
//     console.log(
//       'FAILURE: `' +
//         fn.name +
//         '([' +
//         input +
//         '])` should be ' +
//         expected +
//         ' but was ' +
//         fn(input)
//     );
//     return false;
//   }
// }

// function testEmpty(fn) {
//   if (fn([]) === null || fn([]) == undefined) {
//     console.log(`SUCCESS: ${fn.name} works on empty arrays`);
//     return true;
//   } else {
//     console.log(
//       `FAILURE: ${fn.name} should return undefined or null for empty arrays`
//     );
//     return false;
//   }
// }

// (function runTests() {
//   // we'll use the variables in our test cases
//   const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
//   const realMin1 = numList1[3];
//   const realMax1 = numList1[6];
//   const numList2 = [0, 1, 2, 3, 4];
//   const realMin2 = numList2[0];
//   const realMax2 = numList2[4];

//   const testResults = [
//     testFunctionWorks(max, numList1, realMax1),
//     testFunctionWorks(max, numList2, realMax2),
//     testFunctionWorks(min, numList1, realMin1),
//     testFunctionWorks(min, numList2, realMin2),
//     testEmpty(max),
//     testEmpty(min),
//   ];

//   const numPassing = testResults.filter(function(result) {
//     return result;
//   }).length;
//   console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
// })();

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
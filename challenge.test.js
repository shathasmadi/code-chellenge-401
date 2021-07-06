'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function that will return a reversed string
example: "Hello World"
Output: "dlroW olleH"

Hint: You can use the array function reverse
------------------------------------------------------------------------------------------------ */

const reverseString = (str) => {
    // Solution code here...

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named addInTheMiddle that will be receive an array and value.
You will require to add that value in the middle of the array

examples:

Input: [1,2,4,5], 3
Output: [1,2,3,4,5]

Input: ['a','b','c','e','f'], 'd'
Output: ['a','b','c','d','e','f']
------------------------------------------------------------------------------------------------ */

const addInTheMiddle = (arr, val) => {
    // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-02.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
    test('It should return the reversed version of the input string', () => {
        expect(reverseString('Hello World')).toStrictEqual('dlroW olleH');
        expect(reverseString('rubber ducks dont quack !')).toStrictEqual('! kcauq tnod skcud rebbur');
    });
});

describe('Testing challenge 2', () => {
    test('It should return the array with the provided element added in the middle', () => {
        expect(addInTheMiddle([1, 2, 4, 5], 3)).toStrictEqual([1, 2, 3, 4, 5]);
        expect(addInTheMiddle(['a', 'b', 'c', 'e', 'f'], 'd')).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });
});

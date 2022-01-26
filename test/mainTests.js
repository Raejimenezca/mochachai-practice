const assert = require('chai').assert;
const main = require('../main');

// Results
const helloWorldText = main.helloWorld();
const substractionResult = main.substraction(4, 2);
const arrayOfNumbers = main.arrayOfNumbers();

describe('Main Suite', function () {

    describe('Hello World Method - Test Cases', function () {
        it('Hello World test is as expected', function () {
            assert.equal(helloWorldText, 'hello world');
        });

        it('Should return a string data type', function () {
            assert.typeOf(helloWorldText, 'string', 'The expected data type expected is a string');
        });
    });

    describe('Substraction method - Test Cases', function () {
        it('Less than five ', function () {
            assert.isBelow(substractionResult, 5);
        });

        it('Validate data type', function () {
            assert.typeOf(substractionResult, 'number', 'The expected data type is a number');
        });

        it('Should substract numbers', function () {
            assert.equal(substractionResult, 2);
        });
    });

    describe('Array method - Test Cases', function () {
        it('Array includes the number 5', function () {
            assert.include(arrayOfNumbers, 5);
        });

        it('Validate array length', function () {
            assert.lengthOf(arrayOfNumbers, 6);
        });
    });
});
// test file for testing the functionality of the code
const assert = require('assert');
const { add, subtract } = require('./math');

// Test cases for the add function
assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(-1, 1), 0);
assert.strictEqual(add(0, 0), 0);

// Test cases for the subtract function
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(subtract(1, 1), 0);
assert.strictEqual(subtract(0, 0), 0);

console.log('All tests passed!');
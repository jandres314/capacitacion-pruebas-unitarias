const assert = require('chai').assert;
const numbers = [1,2,3,4,5];

describe('ejemplo', () => {
    it('base', () => {
        assert.isArray(numbers, 'is array');
    });
});

console.log('ok');
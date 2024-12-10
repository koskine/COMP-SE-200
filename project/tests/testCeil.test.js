import assert from 'assert';
import ceil from '../src/ceil.js'; 


describe('ceil function', () => {
    it('should round up a decimal number to the nearest integer', () => {
        assert.strictEqual(ceil(4.006), 5);
    });

    it('should round up to the specified precision', () => {
        assert.strictEqual(ceil(6.004, 2), 6.01);
    });

    it('should round up when precision is negative', () => {
        assert.strictEqual(ceil(6040, -2), 6100);
    });

    it('should handle edge cases like exact integers', () => {
        assert.strictEqual(ceil(10), 10);
        assert.strictEqual(ceil(-10), -10);
    });

    it('should round up negative decimal numbers', () => {
        assert.strictEqual(ceil(-4.006), -4);
        assert.strictEqual(ceil(-6.004, 2), -6);
    });

    it('should return 0 when input is 0', () => {
        assert.strictEqual(ceil(0), 0);
    });

    it('should handle non-number inputs gracefully', () => {
        assert.ok(Number.isNaN(ceil('a')));
        assert.ok(Number.isNaN(ceil(undefined)));
        assert.ok(Number.isNaN(ceil(null)));
    });
});

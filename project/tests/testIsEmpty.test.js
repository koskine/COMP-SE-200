import { strict as assert } from 'assert';
import isEmpty from '../src/isEmpty.js'; // Adjust the path as necessary

describe('isEmpty function', () => {
    it('should return true for null and undefined', () => {
        assert.strictEqual(isEmpty(null), true);
        assert.strictEqual(isEmpty(undefined), true);
    });

    it('should return true for booleans', () => {
        assert.strictEqual(isEmpty(true), true);
        assert.strictEqual(isEmpty(false), true);
    });

    it('should return true for numbers', () => {
        assert.strictEqual(isEmpty(0), true);
        assert.strictEqual(isEmpty(1), true);
        assert.strictEqual(isEmpty(-1), true);
    });

    it('should return true for empty strings', () => {
        assert.strictEqual(isEmpty(''), true);
    });

    it('should return false for non-empty strings', () => {
        assert.strictEqual(isEmpty('abc'), false);
    });

    it('should return true for empty arrays', () => {
        assert.strictEqual(isEmpty([]), true);
    });

    it('should return false for non-empty arrays', () => {
        assert.strictEqual(isEmpty([1, 2, 3]), false);
    });

    it('should return true for empty objects', () => {
        assert.strictEqual(isEmpty({}), true);
    });

    it('should return false for non-empty objects', () => {
        assert.strictEqual(isEmpty({ a: 1 }), false);
    });

    it('should return true for empty maps and sets', () => {
        assert.strictEqual(isEmpty(new Map()), true);
        assert.strictEqual(isEmpty(new Set()), true);
    });

    it('should return false for non-empty maps and sets', () => {
        const map = new Map();
        map.set('key', 'value');
        const set = new Set();
        set.add(1);
        assert.strictEqual(isEmpty(map), false);
        assert.strictEqual(isEmpty(set), false);
    });

    it('should return true for empty array-like objects', () => {
        const argumentsObject = (function() { return arguments; })(); // Empty arguments object
        assert.strictEqual(isEmpty(argumentsObject), true);
    });

    it('should return false for non-empty array-like objects', () => {
        const argumentsObject = (function() { return arguments; })(1, 2, 3); // Non-empty arguments object
        assert.strictEqual(isEmpty(argumentsObject), false);
    });

    it('should return true for objects with no own properties', () => {
        function Foo() {}
        Foo.prototype.a = 1;
        assert.strictEqual(isEmpty(new Foo()), true);
    });

    it('should return false for objects with own properties', () => {
        function Foo() {
            this.a = 1;
        }
        assert.strictEqual(isEmpty(new Foo()), false);
    });
});

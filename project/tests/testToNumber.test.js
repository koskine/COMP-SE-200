import { strict as assert } from 'assert';
import toNumber from '../src/toNumber.js'; // Adjust the path as necessary

describe('toNumber function', () => {
    it('should return the same number if input is a number', () => {
        assert.strictEqual(toNumber(3.2), 3.2);
        assert.strictEqual(toNumber(0), 0);
        assert.strictEqual(toNumber(-42), -42);
    });

    it('should return NaN for symbols', () => {
        assert.ok(Number.isNaN(toNumber(Symbol('test'))));
    });

    it('should convert string numbers to numbers', () => {
        assert.strictEqual(toNumber('3.2'), 3.2);
        assert.strictEqual(toNumber('0'), 0);
        assert.strictEqual(toNumber('-42'), -42);
    });

    it('should return NaN for invalid number strings', () => {
        assert.ok(Number.isNaN(toNumber('abc')));
        assert.ok(Number.isNaN(toNumber('0xzz')));
    });

    it('should convert binary string values to numbers', () => {
        assert.strictEqual(toNumber('0b101'), 5);
        assert.strictEqual(toNumber('0b0'), 0);
    });

    it('should convert octal string values to numbers', () => {
        assert.strictEqual(toNumber('0o10'), 8);
        assert.strictEqual(toNumber('0o7'), 7);
    });

    it('should return NaN for bad hexadecimal strings', () => {
        assert.ok(Number.isNaN(toNumber('-0xzz')));
        assert.ok(Number.isNaN(toNumber('0xg')));
    });

    it('should handle object values with valueOf method', () => {
        const obj = {
            valueOf: () => 42,
        };
        assert.strictEqual(toNumber(obj), 42);
    });

    it('should handle objects without a valueOf method gracefully', () => {
        const obj = {};
        assert.ok(Number.isNaN(toNumber(obj)));
    });

    it('should handle null and undefined', () => {
        assert.strictEqual(toNumber(null), 0);
        assert.ok(Number.isNaN(toNumber(undefined)));
    });

    it('should handle boolean values', () => {
        assert.strictEqual(toNumber(true), 1);
        assert.strictEqual(toNumber(false), 0);
    });

    it('should handle whitespace-trimmed strings', () => {
        assert.strictEqual(toNumber('  42  '), 42);
        assert.strictEqual(toNumber('  -7.5  '), -7.5);
    });
});

import assert from 'assert';
import capitalize from '../src/capitalize.js'; // Adjust path as needed

describe('capitalize function', () => {
    it('should capitalize the first character of a lowercase string', () => {
        assert.equal(capitalize('hello'), 'Hello');
    });

    it('should convert the rest of the string to lowercase', () => {
        assert.equal(capitalize('hELLo'), 'Hello');
    });

    it('should handle strings that are already capitalized', () => {
        assert.equal(capitalize('Hello'), 'Hello');
    });

    it('should handle strings that are all uppercase', () => {
        assert.equal(capitalize('WORLD'), 'World');
    });

    it('should handle empty strings', () => {
        assert.equal(capitalize(''), '');
    });

    it('should convert non-string inputs to strings and capitalize them', () => {
        assert.equal(capitalize(123), '123');
        assert.equal(capitalize(null), 'Null');
        assert.equal(capitalize(undefined), 'Undefined');
    });
});

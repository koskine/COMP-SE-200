import { expect } from 'chai';
import add from '../src/add.js';

describe('add function', () => {
    it('should return 10 when adding 6 and 4', () => {
        expect(add(6, 4)).to.equal(10);
    });

    it('should return 0 when adding 0 and 0', () => {
        expect(add(0, 0)).to.equal(0);
    });

    it('should handle negative numbers', () => {
        expect(add(-2, -3)).to.equal(-5);
        expect(add(-5, 5)).to.equal(0);
    });

    it('should handle non-integer numbers', () => {
        expect(add(1.5, 2.3)).to.be.closeTo(3.8, 0.0001);
    });

    it('should use the default value (0) for missing parameters', () => {
        expect(add(5)).to.equal(5); // Assumes createMathOperation provides 0 as default
    });

    it('should return NaN when inputs are not numbers', () => {
        expect(add('a', 5)).to.be.NaN;
        expect(add({}, [])).to.be.NaN;
    });
});

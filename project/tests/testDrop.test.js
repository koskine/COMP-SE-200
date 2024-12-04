import { strict as assert } from 'assert';
import drop from '../src/drop.js'; // Adjust the path as necessary

describe('drop function', () => {
    it('should drop the default 1 element from the beginning of the array', () => {
        assert.deepStrictEqual(drop([1, 2, 3]), [2, 3]);
    });

    it('should drop the specified number of elements from the beginning', () => {
        assert.deepStrictEqual(drop([1, 2, 3], 2), [3]);
        assert.deepStrictEqual(drop([1, 2, 3], 0), [1, 2, 3]);
        assert.deepStrictEqual(drop([1, 2, 3], 5), []);
    });

    it('should handle negative values for `n` by returning the original array', () => {
        assert.deepStrictEqual(drop([1, 2, 3], -1), [1, 2, 3]);
    });

    it('should handle null or undefined arrays gracefully', () => {
        assert.deepStrictEqual(drop(null), []);
        assert.deepStrictEqual(drop(undefined), []);
    });

    it('should handle non-integer values for `n` by converting them to integers', () => {
        assert.deepStrictEqual(drop([1, 2, 3], 2.5), [3]);
        assert.deepStrictEqual(drop([1, 2, 3], '2'), [3]);
    });

    it('should return an empty array if the input array is empty', () => {
        assert.deepStrictEqual(drop([], 1), []);
        assert.deepStrictEqual(drop([], 5), []);
    });

    it('should not mutate the original array', () => {
        const array = [1, 2, 3];
        drop(array, 2);
        assert.deepStrictEqual(array, [1, 2, 3]); // Original array remains intact
    });
});

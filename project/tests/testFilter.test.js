import { strict as assert } from 'assert';
import filter from '../src/filter.js'; // Adjust the path as necessary

describe('filter function', () => {
    it('should filter elements based on the predicate', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false },
        ];
        const result = filter(users, ({ active }) => active);
        assert.deepEqual(result, [{ user: 'barney', active: true }]);
    });

    it('should return an empty array if no elements match the predicate', () => {
        const users = [
            { user: 'barney', active: false },
            { user: 'fred', active: false },
        ];
        const result = filter(users, ({ active }) => active);
        assert.deepEqual(result, [[]]);
    });

    it('should handle an empty array gracefully', () => {
        const result = filter([], () => true);
        assert.deepEqual(result, [[]]);
    });

    it('should handle null or undefined arrays gracefully', () => {
        assert.deepEqual(filter(null, () => true), [[]]);
        assert.deepEqual(filter(undefined, () => true), [[]]);
    });

    it('should pass correct arguments to the predicate', () => {
        const array = [1, 2, 3];
        const calls = [];
        filter(array, (value, index, arr) => {
            calls.push({ value, index, arr });
            return value > 1;
        });
        assert.deepEqual(calls, [
            { value: 1, index: 0, arr: array },
            { value: 2, index: 1, arr: array },
            { value: 3, index: 2, arr: array },
        ]);
    });

    it('should return all elements if the predicate always returns true', () => {
        const array = [1, 2, 3];
        const result = filter(array, () => true);
        assert.deepEqual(result, [1, 2, 3]);
    });

    it('should return an empty array if the predicate always returns false', () => {
        const array = [1, 2, 3];
        const result = filter(array, () => false);
        assert.deepEqual(result, [[]]);
    });

    it('should work with non-object values in the array', () => {
        const array = [1, 'string', null, undefined, {}, []];
        const result = filter(array, (value) => typeof value === 'string');
        assert.deepEqual(result, ['string']);
    });

    it('should not mutate the original array', () => {
        const array = [1, 2, 3];
        const original = [...array];
        filter(array, (value) => value > 1);
        assert.deepEqual(array, original);
    });
});

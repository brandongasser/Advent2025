import * as Part1 from '../part-1';
import { parse } from '../parser';

const rawTestInput = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;
const testInput = parse(rawTestInput, 1);

describe('Day 5 Part 1', () => {

  describe('part1', () => {

    it('should return the correct answer', () => {
      const actual = Part1.part1(testInput);

      expect(actual).toEqual(3);
    });

  });

  describe('isFresh', () => {

    it('should return true when an id is fresh', () => {
      const actual = Part1.isFresh(testInput.freshIdRanges, 5);

      expect(actual).toBeTrue();
    });

    it('should return false when an id is not fresh', () => {
      const actual = Part1.isFresh(testInput.freshIdRanges, 1);

      expect(actual).toBeFalse();
    })

  });

});
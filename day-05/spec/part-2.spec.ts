import * as Part2 from '../part-2';
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
const testInput = parse(rawTestInput, 2);

describe('Day 5 Part 2', () => {

  describe('part2', () => {

    it('should return the correct answer', () => {
      const actual = Part2.part2(testInput);

      expect(actual).toEqual(14);
    });

  });

  describe('combineRanges', () => {

    it('should add two mutually exclusive ranges', () => {
      const range1 = { start: 1, end: 4 };
      const range2 = { start: 6, end: 9 };

      const expected = [{ start: 1, end: 4 }, { start: 6, end: 9 }];

      const actual = Part2.combineRanges(range1, range2);

      expect(actual).toEqual(expected);
    });

    it('should add two mutually exclusive ranges that can combine', () => {
      const range1 = { start: 1, end: 4 };
      const range2 = { start: 5, end: 9 };

      const expected = [{ start: 1, end: 9 }];

      const actual = Part2.combineRanges(range1, range2);

      expect(actual).toEqual(expected);
    });

    it('should add two overlapping ranges', () => {
      const range1 = { start: 1, end: 7 };
      const range2 = { start: 5, end: 9 };

      const expected = [{ start: 1, end: 9 }];

      const actual = Part2.combineRanges(range1, range2);

      expect(actual).toEqual(expected);
    });

  });

  describe('addRangeToRangeList', () => {

    it('should add range to range list', () => {
      const rangeList = [{ start: 3, end: 5 }, { start: 10, end: 14 }, { start: 16, end: 20 }];
      const rangeToAdd = { start: 12, end: 18 };

      const expected = [{ start: 3, end: 5 }, { start: 10, end: 20 }];

      const actual = Part2.addRangeToRangeList(rangeList, rangeToAdd);

      expect(actual).toEqual(expected);
    });
    
  });

});
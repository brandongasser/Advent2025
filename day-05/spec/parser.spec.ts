import { IdRange } from '../common';
import * as Parser from '../parser';

const testInput = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

describe('Day 5 Parser', () => {

  describe('parse', () => {

    it('should parse the input for part 1', () => {
      const expected: { freshIdRanges: IdRange[], ids: number[] } = {
        freshIdRanges: [
          { start: 3, end: 5},
          { start: 10, end: 14 },
          { start: 16, end: 20 },
          { start: 12, end: 18 }
        ],
        ids: [ 1, 5, 8, 11, 17, 32 ]
      };

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

    it('should parse the input for part 2', () => {
      const expected: { freshIdRanges: IdRange[], ids: number[] } = {
        freshIdRanges: [
          { start: 3, end: 5},
          { start: 10, end: 14 },
          { start: 16, end: 20 },
          { start: 12, end: 18 }
        ],
        ids: [ 1, 5, 8, 11, 17, 32 ]
      };

      const actual = Parser.parse(testInput, 2);

      expect(actual).toEqual(expected);
    });

  });

});
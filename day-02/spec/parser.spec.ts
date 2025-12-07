import { IdRange } from '../common';
import * as Parser from '../parser';

describe('Day 2 Parser', () => {

  describe('parse', () => {

    it('should parse input for part 1', () => {
      const testInput = '11-22,95-115,998-1012';
      const expected: IdRange[] = [
        { start: 11, end: 22 },
        { start: 95, end: 115 },
        { start: 998, end: 1012 }
      ];

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

    it('should parse input for part 2', () => {
      const testInput = '11-22,95-115,998-1012';
      const expected: IdRange[] = [
        { start: 11, end: 22 },
        { start: 95, end: 115 },
        { start: 998, end: 1012 }
      ];

      const actual = Parser.parse(testInput, 2);

      expect(actual).toEqual(expected);
    });

  });

});
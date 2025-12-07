import { Move } from '../common';
import * as Parser from '../parser';

const testInput: string = `L68
L30
R2`;

describe('Day 1 Parser', () => {

  describe('parse', () => {

    it('should parse input for part 1', () => {
      const expected: Move[] = [
        { direction: 'left', distance: 68 },
        { direction: 'left', distance: 30 },
        { direction: 'right', distance: 2 }
      ];

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

    it('should parse input for part 2', () => {
      const expected: Move[] = [
        { direction: 'left', distance: 68 },
        { direction: 'left', distance: 30 },
        { direction: 'right', distance: 2 }
      ];

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

  });

});
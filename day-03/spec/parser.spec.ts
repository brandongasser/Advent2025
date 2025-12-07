import * as Parser from '../parser';

describe('Day 3 Parser', () => {

  describe('parse', () => {

    it('should parse input for part 1', () => {
      const testInput = '6145\n9824\n7513';
      const expected = [[6, 1, 4, 5], [9, 8, 2, 4], [7, 5, 1, 3]];

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

    it('should parse input for part 2', () => {
      const testInput = '6145\n9824\n7513';
      const expected = [[6, 1, 4, 5], [9, 8, 2, 4], [7, 5, 1, 3]];

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

  });

});
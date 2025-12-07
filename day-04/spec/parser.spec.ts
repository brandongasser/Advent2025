import * as Parser from '../parser';

describe('Day 4 Parser', () => {

  describe('parse', () => {

    it('should parse input for part 1', () => {
      const testInput = '..@\n@.@\n@..';
      const expected = ['..@', '@.@', '@..'];

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

    it('should parse input for part 2', () => {
      const testInput = '..@\n@.@\n@..';
      const expected = ['..@', '@.@', '@..'];

      const actual = Parser.parse(testInput, 2);

      expect(actual).toEqual(expected);
    });

  });

});
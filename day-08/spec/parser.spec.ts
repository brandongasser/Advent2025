import * as Parser from '../parser';

describe('Day 8 Parser', () => {

  describe('parse', () => {
    
    it('should parse the input for part 1', () => {
      const testInput = '15,734,50\n62,7,234';
      const expected: [number, number, number][] = [[ 15, 734, 50 ], [ 62, 7, 234 ]];

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

  });

});
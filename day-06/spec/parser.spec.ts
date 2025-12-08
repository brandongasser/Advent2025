import * as Parser from '../parser';

const testInput = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;

describe('Day 6 Parser', () => {

  describe('parse', () => {

    it('should parse input for part 1', () => {
      const actual = Parser.parse(testInput, 1);

      const expectedColumns = [
        [ 123, 45, 6 ],
        [ 328, 64, 98 ],
        [ 51, 387, 215 ],
        [ 64, 23, 314 ]
      ];

      expect(actual.columns).toEqual(expectedColumns);
      expect(actual.functions[0](1, 1)).toEqual(1);
      expect(actual.functions[1](1, 1)).toEqual(2);
      expect(actual.functions[2](1, 1)).toEqual(1);
      expect(actual.functions[3](1, 1)).toEqual(2);
    });

    it('should parse input for part 2', () => {
      const actual = Parser.parse(testInput, 2);

      const expectedColumns = [
        [ 1, 24, 356 ],
        [ 369, 248, 8 ],
        [ 32, 581, 175 ],
        [ 623, 431, 4 ]
      ];

      expect(actual.columns).toEqual(expectedColumns);
      expect(actual.functions[0](1, 1)).toEqual(1);
      expect(actual.functions[1](1, 1)).toEqual(2);
      expect(actual.functions[2](1, 1)).toEqual(1);
      expect(actual.functions[3](1, 1)).toEqual(2);
    });

  });

});
import * as Parser from '../parser';

const testInput = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`;

describe('Day 9 Parser', () => {

  describe('parse', () => {

    it('should parse the input for part 1', () => {
      const expected: [number, number][] = [
        [ 7, 1 ],
        [ 11, 1 ],
        [ 11, 7 ],
        [ 9, 7 ],
        [ 9, 5 ],
        [ 2, 5 ],
        [ 2, 3 ],
        [ 7, 3 ]
      ];
      
      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

    it('should parse the input for part 2', () => {
      const expected: [number, number][] = [
        [ 7, 1 ],
        [ 11, 1 ],
        [ 11, 7 ],
        [ 9, 7 ],
        [ 9, 5 ],
        [ 2, 5 ],
        [ 2, 3 ],
        [ 7, 3 ]
      ];
      
      const actual = Parser.parse(testInput, 2);

      expect(actual).toEqual(expected);
    });

  });

});
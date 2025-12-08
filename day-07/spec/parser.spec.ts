import { MapSpace } from '../common';
import * as Parser from '../parser';

describe('Day 7 Parser', () => {

  describe('parse', () => {

    it('should parse the input for part 1', () => {
      const testInput = '.S.\n...\n.^.';
      const expected: MapSpace[][] = [
        [ 'empty', 'beam', 'empty' ],
        [ 'empty', 'empty', 'empty' ],
        [ 'empty', 'splitter', 'empty' ]
      ];

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

    it('should parse the input for part 2', () => {
      const testInput = '.S.\n...\n.^.';
      const expected: MapSpace[][] = [
        [ 'empty', 'beam', 'empty' ],
        [ 'empty', 'empty', 'empty' ],
        [ 'empty', 'splitter', 'empty' ]
      ];

      const actual = Parser.parse(testInput, 2);

      expect(actual).toEqual(expected);
    });

  });

});
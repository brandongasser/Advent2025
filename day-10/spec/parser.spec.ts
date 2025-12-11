import { Machine } from '../common';
import * as Parser from '../parser';

const testInput = `[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}
[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}`;

describe('Day 10 Parser', () => {

  describe('parse', () => {

    it('should parse the input for part 1', () => {
      const expected: Machine[] = [
        {
          indicatorLights: [ '.', '#', '#', '.' ],
          buttons: [ [3], [1, 3], [2], [2, 3], [0, 2], [0, 1] ],
          joltage: [ 3, 5, 4, 7 ]
        },
        {
          indicatorLights: [ '.', '.', '.', '#', '.' ],
          buttons: [ [0, 2, 3, 4], [2, 3], [0, 4], [0, 1, 2], [1, 2, 3, 4] ],
          joltage: [ 7, 5, 12, 7, 2 ]
        },
        {
          indicatorLights: [ '.', '#', '#', '#', '.', '#' ],
          buttons: [ [0, 1, 2, 3, 4], [0, 3, 4], [0, 1, 2, 4, 5], [1, 2] ],
          joltage: [ 10, 11, 11, 5, 10, 5 ]
        }
      ];

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

    it('should parse the input for part 2', () => {
      const expected: Machine[] = [
        {
          indicatorLights: [ '.', '#', '#', '.' ],
          buttons: [ [3], [1, 3], [2], [2, 3], [0, 2], [0, 1] ],
          joltage: [ 3, 5, 4, 7 ]
        },
        {
          indicatorLights: [ '.', '.', '.', '#', '.' ],
          buttons: [ [0, 2, 3, 4], [2, 3], [0, 4], [0, 1, 2], [1, 2, 3, 4] ],
          joltage: [ 7, 5, 12, 7, 2 ]
        },
        {
          indicatorLights: [ '.', '#', '#', '#', '.', '#' ],
          buttons: [ [0, 1, 2, 3, 4], [0, 3, 4], [0, 1, 2, 4, 5], [1, 2] ],
          joltage: [ 10, 11, 11, 5, 10, 5 ]
        }
      ];

      const actual = Parser.parse(testInput, 2);

      expect(actual).toEqual(expected);
    });

  });

});
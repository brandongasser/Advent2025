import { parse } from '../parser';
import * as Part2 from '../part-2';

const rawTestInput = `.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`;
const testInput = parse(rawTestInput, 2);

describe('Day 7 Part 2', () => {

  describe('part2', () => {
    
    it('should return the correct answer', () => {
      const actual = Part2.part2(testInput);

      expect(actual).toEqual(40);
    });

  });

  describe('moveBeams', () => {

    it('should move the beams', () => {
      const topRow: (number | 'splitter')[] = [0, 1, 0, 2, 0, 0, 5, 0];
      const bottomRow: (number | 'splitter')[] = [0, 'splitter', 0, 'splitter', 0, 0, 0, 0];

      const expected: (number | 'splitter')[] = [1, 'splitter', 3, 'splitter', 2, 0, 5, 0];

      Part2.moveBeams(topRow, bottomRow);

      expect(bottomRow).toEqual(expected);
    });

  });

});
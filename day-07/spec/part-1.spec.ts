import { MapSpace } from '../common';
import { parse } from '../parser';
import * as Part1 from '../part-1';

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
const testInput = parse(rawTestInput, 1);

describe('Day 7 Part 1', () => {

  describe('part1', () => {

    it('should return the correct answer', () => {
      const actual = Part1.part1(testInput);

      expect(actual).toEqual(21);
    });

  });

  describe('moveBeams', () => {

    it('should move the beams to the next row and return the number of splits', () => {
      const upperRow: MapSpace[] = ['empty', 'beam', 'empty', 'beam', 'empty', 'empty', 'beam', 'empty'];
      const lowerRow: MapSpace[] = ['empty', 'splitter', 'empty', 'splitter', 'empty', 'empty', 'empty', 'empty'];

      const expected: MapSpace[] = ['beam', 'splitter', 'beam', 'splitter', 'beam', 'empty', 'beam', 'empty'];

      const actualSplits = Part1.moveBeams(upperRow, lowerRow);

      expect(lowerRow).toEqual(expected);
      expect(actualSplits).toEqual(2);
    });

  });

});
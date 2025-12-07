import * as Part1 from '../part-1';
import { parse } from '../parser';

const rawTestInput = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;
const testInput = parse(rawTestInput, 1);

describe('Day 4 Part 1', () => {

  describe('part1', () => {

    it('should return the correct answer', () => {
      const actual = Part1.part1(testInput);

      expect(actual).toEqual(13);
    });

  });

});
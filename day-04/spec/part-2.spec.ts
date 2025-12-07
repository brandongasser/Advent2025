import * as Part2 from '../part-2';
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
const testInput = parse(rawTestInput, 2);

describe('Day 4 Part 2', () => {

  describe('part2', () => {

    it('should return the correct answer', () => {
      const actual = Part2.part2(testInput);

      expect(actual).toEqual(43);
    });

  });

});
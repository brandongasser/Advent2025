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

  describe('remove', () => {
    
    it('should remove a roll from the adjacent count map', () => {
      const map = [
        [ 1, 1000000, 1000000, 1 ],
        [ 1000000, 4, 3, 1000000 ],
        [ 2, 1000000, 4, 1000000 ],
        [ 1000000, 2, 1000000, 1 ]
      ];
      const expected = [
        [ 1, 999999, 999999, 0 ],
        [ 1000000, 3, 999999, 999999 ],
        [ 2, 999999, 3, 999999 ],
        [ 1000000, 2, 1000000, 1 ]
      ];

      Part2.remove(map, 1, 2);

      expect(map).toEqual(expected);
    });

    it('should remove a roll from the edge of the adjacent count map', () => {
      const map = [
        [ 1, 1000000, 1000000, 1 ],
        [ 1000000, 4, 3, 1000000 ],
        [ 2, 1000000, 4, 1000000 ],
        [ 1000000, 2, 1000000, 1 ]
      ];
      const expected = [
        [ 999999, 999999, 1000000, 1 ],
        [ 999999, 3, 3, 1000000 ],
        [ 2, 1000000, 4, 1000000 ],
        [ 1000000, 2, 1000000, 1 ]
      ];

      Part2.remove(map, 0, 0);

      expect(map).toEqual(expected);
    });

  });

});
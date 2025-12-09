import * as Part2 from '../part-2';
import { parse } from '../parser';

const rawTestInput = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`;
const testInput = parse(rawTestInput, 2);

describe('Day 9 Part 2', () => {

  describe('part2', () => {

    it('should return the correct answer', () => {
      const actual = Part2.part2(testInput);

      expect(actual).toEqual(24);
    });

  });

});
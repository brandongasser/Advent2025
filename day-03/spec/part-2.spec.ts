import * as Part2 from '../part-2';
import { parse } from '../parser';

const rawTestInput = `987654321111111
811111111111119
234234234234278
818181911112111`;
const testInput = parse(rawTestInput, 2);

describe('Day 3 Part 2', () => {

  describe('part2', () => {

    it('should return the correct answer', () => {
      const actual = Part2.part2(testInput);

      expect(actual).toEqual(3121910778619);
    });

  });

});
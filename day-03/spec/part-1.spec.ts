import * as Part1 from '../part-1';
import { parse } from '../parser';

const rawTestInput = `987654321111111
811111111111119
234234234234278
818181911112111`;
const testInput = parse(rawTestInput, 1);

describe('Day 3 Part 1', () => {

  describe('part1', () => {

    it('should return the correct answer', () => {
      const actual = Part1.part1(testInput);

      expect(actual).toEqual(357);
    });

  });

});
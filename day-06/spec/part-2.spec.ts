import * as Part2 from '../part-2';
import { parse } from '../parser';

const rawTestInput = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;
const testInput = parse(rawTestInput, 2);

describe('Day 6 Part 2', () => {

  describe('part2', () => {

    it('should return the correct answer', () => {
      const actual = Part2.part2(testInput);

      expect(actual).toEqual(3263827);
    });

  });

});
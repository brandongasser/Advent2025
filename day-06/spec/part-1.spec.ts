import * as Part1 from '../part-1';
import { parse } from '../parser';

const rawTestInput = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;
const testInput = parse(rawTestInput, 1);

describe('Day 6 Part 1', () => {

  describe('part1', () => {
  
    it('should return the correct answer', () => {
      const actual = Part1.part1(testInput);

      expect(actual).toEqual(4277556);
    });

  });

});
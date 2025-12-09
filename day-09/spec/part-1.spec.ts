import * as Part1 from '../part-1';
import { parse } from '../parser';

const rawTestInput = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`;
const testInput = parse(rawTestInput, 1);

describe('Day 9 Part 1', () => {

  describe('part1', () => {

    it ('should return the correct answer', () => {
      const actual = Part1.part1(testInput);

      expect(actual).toEqual(50);
    });
    
  });

});
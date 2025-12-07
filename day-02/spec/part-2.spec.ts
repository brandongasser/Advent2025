import * as Part2 from '../part-2';
import { parse } from '../parser';

const rawTestInput = '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124';
const testInput = parse(rawTestInput, 2);

describe('Day 2 Part 2', () => {

  describe('part2', () => {

    it('should return the correct answer', () => {
      const expected = 4174379265;

      const actual = Part2.part2(testInput);

      expect(actual).toEqual(expected);
    });

  });

  describe('isInvalidId', () => {

    it('should return false for a valid id', () => {
      const actual = Part2.isInvalidId(12312);

      expect(actual).toBeFalse();
    });

    it('should return true for an invalid id', () => {
      const actual = Part2.isInvalidId(1212121212);

      expect(actual).toBeTrue();
    });

  });

});
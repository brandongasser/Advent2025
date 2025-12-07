import * as Part1 from '../part-1';
import { parse } from '../parser';

const rawTestInput = '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124';
const testInput = parse(rawTestInput, 1);

describe('Day 2 Part 1', () => {

  describe('part1', () => {

    it('should return the correct answer', () => {
      const expected = 1227775554;

      const actual = Part1.part1(testInput);

      expect(actual).toEqual(expected);
    });

  });

  describe('isInvalidId', () => {

    it('should return true for an invalid id', () => {
      const actual = Part1.isInvalidId(123123);

      expect(actual).toBeTrue();
    });

    it('should return false for a valid id with even length', () => {
      const actual = Part1.isInvalidId(123124);

      expect(actual).toBeFalse();
    });

    it('should return false for a valid id with odd length', () => {
      const actual = Part1.isInvalidId(12312);
      
      expect(actual).toBeFalse();
    });

  });

});
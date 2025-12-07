import * as Part2 from '../part-2';
import { parse } from '../parser';
import { Move } from '../common';

const rawSampleInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;
const sampleInput = parse(rawSampleInput, 2);

describe('Day 2 Part 2', () => {

  describe('part2', () => {

    it('should return the correct answer', () => {
      const expected = 6;

      const actual = Part2.part2(sampleInput);

      expect(actual).toEqual(expected);
    });

  });

  describe('executeMove', () => {

    it('should execute a left move', () => {
      const move: Move = { direction: 'left', distance: 10 };
      const actual = Part2.executeMove(55, move);

      const expected = { next: 45, zeroCount: 0 };

      expect(actual).toEqual(expected);
    });

    it('should execute a right move', () => {
      const move: Move = { direction: 'right', distance: 10 };
      const actual = Part2.executeMove(55, move);
      
      const expected = { next: 65, zeroCount: 0 };

      expect(actual).toEqual(expected);
    });

    it('should execute a left move over zero', () => {
      const move: Move = { direction: 'left', distance: 2 };
      const actual = Part2.executeMove(1, move);

      const expected = { next: 99, zeroCount: 1 };

      expect(actual).toEqual(expected);
    });

    it('should execute a right move over zero', () => {
      const move: Move = { direction: 'right', distance: 2 };
      const actual = Part2.executeMove(99, move);

      const expected = { next: 1, zeroCount: 1 };

      expect(actual).toEqual(expected);
    });

    it('should execute a left move starting at zero', () => {
      const move: Move = { direction: 'left', distance: 2 };
      const actual = Part2.executeMove(0, move);

      const expected = { next: 98, zeroCount: 0 };

      expect(actual).toEqual(expected);
    });

    it('should execute a right move starting at zero', () => {
      const move: Move = { direction: 'right', distance: 2 };
      const actual = Part2.executeMove(0, move);

      const expected = { next: 2, zeroCount: 0 };

      expect(actual).toEqual(expected);
    });

    it('should execute a left move ending at zero', () => {
      const move: Move = { direction: 'left', distance: 2 };
      const actual = Part2.executeMove(2, move);

      const expected = { next: 0, zeroCount: 1 };

      expect(actual).toEqual(expected);
    });

    it('should execute a right move ending at zero', () => {
      const move: Move = { direction: 'right', distance: 2 };
      const actual = Part2.executeMove(98, move);

      const expected = { next: 0, zeroCount: 1 };

      expect(actual).toEqual(expected);
    });

    it('should count multiple zeros when executing a left move', () => {
      const move: Move = { direction: 'left', distance: 102 };
      const actual = Part2.executeMove(2, move);

      const expected = { next: 0, zeroCount: 2 };

      expect(actual).toEqual(expected);
    });

    it('should count multiple zeros when executing a right move', () => {
      const move: Move = { direction: 'right', distance: 102 };
      const actual = Part2.executeMove(98, move);

      const expected = { next: 0, zeroCount: 2 };

      expect(actual).toEqual(expected);
    });

  });

});
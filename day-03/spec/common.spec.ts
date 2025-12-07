import * as Common from '../common';

describe('Day 3 Common', () => {

  describe('largestJoltage', () => {

    it('should find the largest joltage for 2 choices', () => {
      const bank = [9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1];
      const actual = Common.largestJoltage(bank, 2);

      expect(actual).toEqual(98);
    });

    it('should find the largest joltage for 12 choices', () => {
      const bank = [9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1];
      const actual = Common.largestJoltage(bank, 12);

      expect(actual).toEqual(987654321111);
    });

  });

});
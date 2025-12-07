import * as Common from '../common';

describe('Day 4 Common', () => {

  describe('neighbors', () => {
    
    it('should return the neighbors of a cell', () => {
      const map = ['@..@','.@@.', '@.@.', '.@.@'];
      const expected = ['@', '.', '.', '.', '@', '@', '.', '@'];

      const actual = Common.neighbors(map, 1, 1);

      expect(actual).toEqual(expected);
    });

    it('should return the neighbors of a cell on the edge', () => {
      const map = ['@..@','.@@.', '@.@.', '.@.@'];
      const expected = ['.', '.', '@'];

      const actual = Common.neighbors(map, 0, 0);

      expect(actual).toEqual(expected);
    });
    
  });

});
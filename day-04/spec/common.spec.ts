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

  describe('convertToAdjacentCountMap', () => {

    it('should convert the map to an adjacent counts map', () => {
      const map = [
        '@..@',
        '.@@.',
        '@.@.',
        '.@.@'
      ];
      const expected = [
        [ 1, 1000000, 1000000, 1 ],
        [ 1000000, 4, 3, 1000000 ],
        [ 2, 1000000, 4, 1000000 ],
        [ 1000000, 2, 1000000, 1 ]
      ];

      const actual = Common.convertToAdjacentCountMap(map);

      expect(actual).toEqual(expected);
    });

  });

});
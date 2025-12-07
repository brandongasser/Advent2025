import * as Common from '../common';

describe('Day 2 Common', () => {

  describe('expandRange', () => {
    
    it('should expand the range to a list', () => {
      const expected = [11, 12, 13, 14, 15];

      const actual = Common.expandRange(11, 15);

      expect(actual).toEqual(expected);
    });

  });

});
import * as Common from '../common';

describe('Day 8 Common', () => {

  describe('Heap', () => {

    describe('push', () => {

      it('should push a new element to the heap', () => {
        const heap = new Common.Heap();

        heap.push([1, 1, 4]);
        heap.push([1, 1, 3]);
        heap.push([1, 1, 5]);
        heap.push([1, 1, 6]);

        const actual = heap.asList();

        const expected: [number, number, number][] = [
          [1, 1, 6],
          [1, 1, 5],
          [1, 1, 4],
          [1, 1, 3]
        ];
        expect(actual).toEqual(expected);
      });

    });

    describe('pop', () => {

      it('should pop an element from the heap', () => {
        const heap = new Common.Heap();

        heap.push([1, 1, 6]);
        heap.push([1, 1, 4]);
        heap.push([1, 1, 5]);
        heap.push([1, 1, 3]);

        const actualElement = heap.pop();
        const actualHeap = heap.asList();

        const expectedElement: [number, number, number] = [1, 1, 6];
        const expectedHeap: [number, number, number][] = [
          [1, 1, 5],
          [1, 1, 4],
          [1, 1, 3]
        ];
        expect(actualElement).toEqual(expectedElement);
        expect(actualHeap).toEqual(expectedHeap)
      });

    });

    describe('peek', () => {

      it('should return the top element without changing the heap', () => {
        const heap = new Common.Heap();

        heap.push([1, 1, 6]);
        heap.push([1, 1, 4]);
        heap.push([1, 1, 5]);
        heap.push([1, 1, 3]);

        const heapBefore = heap.asList();
        const actualElement = heap.peek();
        const heapAfter = heap.asList();

        expect(actualElement).toEqual([1, 1, 6]);
        expect(heapBefore).toEqual(heapAfter);
      });

    });

    describe('size', () => {

      it('should return the size of the heap', () => {
        const heap = new Common.Heap();

        heap.push([1, 1, 6]);
        heap.push([1, 1, 4]);
        heap.push([1, 1, 5]);
        heap.push([1, 1, 3]);

        const actual = heap.size();

        expect(actual).toEqual(4);
      });

    });

    describe('asList', () => {

      it('should return the heap as a list', () => {
        const heap = new Common.Heap();

        heap.push([1, 1, 4]);
        heap.push([1, 1, 3]);
        heap.push([1, 1, 5]);
        heap.push([1, 1, 6]);

        const actual = heap.asList();

        const expected: [number, number, number][] = [
          [1, 1, 6],
          [1, 1, 5],
          [1, 1, 4],
          [1, 1, 3]
        ];
        expect(actual).toEqual(expected);
      });

    });

  });

});
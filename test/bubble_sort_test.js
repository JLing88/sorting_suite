const assert = require('chai').assert
const bubbleSort = require('../bubble_sort')

describe("bubble sort", function() {
  it("can sort an array", function() {
    let array = [3, 5, 2, 1, 4]
    assert.deepEqual(bubbleSort(array), [1,2,3,4,5])
  })

  it('can sort another array', function() {
    let array = [342, 1, 1000, 39999, 3, 240, 100]
    assert.deepEqual(bubbleSort(array), [1,3,100,240,342,1000,39999])
  })
})
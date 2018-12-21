/**
 * Problem #1: Multiples of 3 and 5
 * If we list all the natural numbers below 10 that are multiples
 * of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

// Using generator functions
(() => {
  var a = function * (start, end) {
    let current = start
    while (current < end) {
      yield current
      current += 15
    }
  }

  var multiplesOf5 = function * (start = 5, end) {
    let current = start
    while (current < end) {
      yield current
      current += 5
    }
  }

  var multiplesOf3and5 = function * (end) {
    yield * a(3, end)
    yield * a(6, end)
    yield * a(9, end)
    yield * a(12, end)
    yield * multiplesOf5(5, end)
  }

  var iterable = multiplesOf3and5(10)

  Array.from(iterable).reduce((acum, current) => acum + current, 0)
})()

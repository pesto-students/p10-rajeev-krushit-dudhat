// fibonaki series with iterators

const fib = {
  limit: 10,
  cursor: 1,
  previous: 0,
  current: 0,
  [Symbol.iterator]: function () {
    return this;
  },
  next: function () {
    // console.log(this.current, this.previous, this.cursor)
    if (this.cursor++ <= this.limit) {
      [this.previous, this.current] = [this.current, (this.previous + this.current) || 1];
      return {
        value: this.previous,
        done: false
      }
    } else {
      return {
        done: true
      }
    }
  }
}

for (let i of fib) {
  console.log(i);
}
function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
      console.log(items);
    },
    pop(item) {
      console.log(this);
      return items.pop(item);
    }
  };
}

// function createStack() {
//   const items = [];
//   const push = (item) => {
//     this.items.push(item);
//     console.log(this);
//   };
//   const pop = (item) => {
//     console.log(this);
//     return this.items.pop(item);
//   };
//   return { push, pop };
// }

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items);

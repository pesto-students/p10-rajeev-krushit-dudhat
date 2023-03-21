function createStack() {
  let _items = [];
  return {
    push(item) {
      _items.push(item);
      console.log(_items);
    },
    pop(item) {
      console.log(_items);
      return _items.pop(item);
    }
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack._items);


// reducer functions
const add = (...args) => args.reduce((acc, cur) => acc + cur, 0);

const sub = (...args) => args.reduce((acc, cur) => acc - cur);

const mul = (...args) => args.reduce((acc, cur) => acc * cur);

// utils function for array comparision
const arrayComp = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort();
  arr2.sort();
  return arr1.every((elem, index) => elem === arr2[index]);
}

const memoize = (fn) => {
  let cache = [];
  return function (...args) {
    // checks cache.
    for (let i = 0; i < cache.length; i++) {
      if (arrayComp(cache[i][0], args)) {
        return cache[i][1];
      }
    }
    const result = fn(...args);
    cache.push([args, result]);
    return result;
  }
}

const memoizeAdd = memoize(add);
const memoizeSub = memoize(sub);
const memoizeMul = memoize(mul);

const log = (fn, ...args) => {
  console.time()
  console.log(`${args} =>`, fn(...args));
  console.timeEnd();
}

// test case 
log(memoizeAdd, );
console.log('========================================= ADD');
log(memoizeAdd, 100, 200);
log(memoizeAdd, 100, 200);
log(memoizeAdd, 130, 230);
log(memoizeAdd, 130, 230);
log(memoizeAdd, 100, 220, 200, 499, 232, 533);
log(memoizeAdd, 100, 220, 200, 499, 232, 533);
log(memoizeAdd, 100, 220, 200, 499, 232, 533);
log(memoizeAdd, 100);
log(memoizeAdd, 100);
log(memoizeAdd, 100, 200, 499, 232, 533);
log(memoizeAdd, 100, 200, 499, 232, 533);
console.log('========================================= SUB');
log(memoizeSub, 100, 200);
log(memoizeSub, 100, 200);
log(memoizeSub, 130, 230);
log(memoizeSub, 130, 230);
log(memoizeSub, 100, 220, 200, 499, 232, 533);
log(memoizeSub, 100, 220, 200, 499, 232, 533);
log(memoizeSub, 100, 220, 200, 499, 232, 533);
log(memoizeSub, 100);
log(memoizeSub, 100);
log(memoizeSub, 100, 200, 499, 232, 533);
log(memoizeSub, 100, 200, 499, 232, 533);
console.log('========================================= MUL');
log(memoizeMul, 100, 200);
log(memoizeMul, 100, 200);
log(memoizeMul, 130, 230);
log(memoizeMul, 130, 230);
log(memoizeMul, 100, 220, 200, 499, 232, 533);
log(memoizeMul, 100, 220, 200, 499, 232, 533);
log(memoizeMul, 100, 220, 200, 499, 232, 533);
log(memoizeMul, 100);
log(memoizeMul, 100);
log(memoizeMul, 100, 200, 499, 232, 533);
log(memoizeMul, 100, 200, 499, 232, 533);
log(memoizeMul, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332);
log(memoizeMul, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332);
log(memoizeMul, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100, 100, 234, 323, 122, 432, 122, 332, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100, 200, 499, 232, 533, 3323222, 432, 234, 323, 122, 432, 122, 332, 100, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 13222, 321232, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100,); // 0.052s
log(memoizeMul, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100, 100, 234, 323, 122, 432, 122, 332, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100, 200, 499, 232, 533, 3323222, 432, 234, 323, 122, 432, 122, 332, 100, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 13222, 321232, 100, 200, 499, 232, 533, 322, 432, 234, 323, 122, 432, 122, 332, 100,); // 0.08

/*
  WEEK 4:JS:Exercise4.1:Implement a function named getNumberwhich generatesa random number. If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise. Let’s also keep thepromise resolution/rejection time as a variable.
  1.JS promises should not be used.
  2.A custom promise function should be created.
  3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
  4.Should be able to accept callbacks as props.
*/

function getNumber() {
  return 10
}

function customPromise(resolve = () => { }, reject = () => { }) {
  const number = getNumber();
  const time = 1000;

  if (number % 5 === 0) {
    setTimeout(() => {
      reject(number);
    }, time);
  } else {
    setTimeout(() => {
      resolve(number);
    }, time);
  }

  return {
    then: function (success, error) {
      resolve = success.bind(null);
      reject = error ? error.bind(null) : reject;
      return this;
    },
    catch: function (error) {
      reject = error.bind(null);
      return this;
    }
  }
}

const promise = customPromise()
  .then((val) => {
    console.log('resolved', val);
  })
  .catch((err) => {
    console.log('rejected', err);
  });
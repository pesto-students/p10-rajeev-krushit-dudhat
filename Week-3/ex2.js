
const car = {
  time: 10,
  speed: 5,
  distance: function () {
    return this.time * this.speed;
  },
  distanceParam: function (time, speed) {
    console.log(this.time * this.speed);
    return time * speed;
  }
}

const dist = car.distance;

// bind with car object
const bindedCar = dist.bind(car);
console.log(bindedCar());

// bind with non-car object
const bindedNonCar = dist.bind({ time: 15, speed: 10 });
console.log(bindedNonCar());

// Call dist function with object  and param
const callDistance = car.distanceParam.call({ time: 3, speed: 4 }, 1, 4);
console.log(callDistance)

// apply function. returns functoin value
const applyDistance = car.distanceParam.apply({ time: 1, speed: 2 }, [3, 4]);
console.log(applyDistance)


// Store data in key Value pairs


// Same as Dictionary :)

var myCars = {
    "p1": "800 kmph",
    "gallord": "700 kmph",
    "macleren": "850 kmph"
}

console.log(myCars);


var myAgera = {
  name: "Agera",
  manufacturer: {
    name: "Koengiseeg",
    location: "Sweden",
  },
  topSpeed: 588,
  color: "Black",
  spoilers: false,
  applyBrake: function () {
    setTimeout(function () {
      console.log("Car Stopped");
    }, 5000);
  },
};

console.log(myAgera.name);
console.log(myAgera.color);
console.log(myAgera.manufacturer.name);
console.log(myAgera.manufacturer.location);
console.log(myAgera.spoilers);
console.log(myAgera.topSpeed);
console.log(myAgera.applyBrake());
console.log(myAgera.applyBrake);


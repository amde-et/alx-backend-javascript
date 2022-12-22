export default class Car {
  constructor(brand, motor, color) {
    // Create objs
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Methods

  cloneCar() {
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    const clone = new NewObj();
    return clone;
  }

  // Setters

  // Getters
}
/* class TestCar extends Car {};
const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();
console.log(tc1 instanceof TestCar);
console.log(tc2 instanceof TestCar);
console.log(tc1 == tc2); */

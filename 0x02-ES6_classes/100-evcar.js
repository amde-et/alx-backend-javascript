import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const Obj = super.constructor || super[Symbol.species];
    return new Obj();
  }
}

export default EVCar;

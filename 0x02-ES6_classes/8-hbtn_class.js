export default class HolbertonClass {
  constructor(size, location) {
    // Create objs
    this._size = size;
    this._location = location;
  }

  // Methods

  [Symbol.toPrimitive](type) {
    if (type === 'string') return this._location;
    return this._size;
  }

  // Setters

  // Getters
}

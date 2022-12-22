export default class Airport {
  constructor(name, code) {
    // Create objs
    this._code = code;
    this._name = name;
  }

  // Methods

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  // Setters

  // Getters
}

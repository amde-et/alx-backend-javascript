export default class Currency {
  constructor(code, name) {
    // Create objs
    this._code = code;
    this._name = name;
  }

  // Methods

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }

  // Setters
  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._name = newCode;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
}

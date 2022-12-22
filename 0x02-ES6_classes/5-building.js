export default class Building {
  constructor(sqft) {
    // Any class extending Building must implement below method
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw Error('Class extending Building must override evacuationWarningMessage');

    // Create objs
    this._sqft = sqft;
  }

  // Methods

  // Setters

  // Getters
  get sqft() {
    return this._sqft;
  }
}

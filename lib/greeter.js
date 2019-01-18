class Greeter {
  constructor() {
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getSalutation() {
    return this.salutation;
  }

  setSalutation(salutation) {
    this.salutation = salutation;
  }

  toString() {
    if (!this.name) {
      throw new Error('Name is required');
    } else if (!this.salutation) {
      throw new Error('Salutation is required');
    }

    return `${this.getSalutation()} ${this.getName()}`;
  }
}

module.exports = Greeter;

class Greeter {
  constructor() {
    this.separator = ' ';
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

  getSeparator() {
    return this.separator;
  }

  setSeparator(separator) {
    this.separator = separator;
  }

  toString() {
    if (!this.name) {
      throw new Error('Name is required');
    } else if (!this.salutation) {
      throw new Error('Salutation is required');
    }

    return `${this.getSalutation()}${this.getSeparator()}${this.getName()}`;
  }
}

module.exports = Greeter;

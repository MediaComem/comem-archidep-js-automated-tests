class GreeterDecorator {
  constructor(greeter) {
    this.greeter = greeter;
  }

  getName() {
    return this.greeter.getName();
  }

  setName(name) {
    return this.greeter.setName(name);
  }

  getSalutation() {
    return this.greeter.getSalutation();
  }

  setSalutation(salutation) {
    return this.greeter.setSalutation(salutation);
  }

  toString() {
    return this.greeter.toString();
  }
}

module.exports = GreeterDecorator;

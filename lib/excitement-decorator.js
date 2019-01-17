const GreeterDecorator = require('./greeter-decorator');

class ExcitementDecorator extends GreeterDecorator {
  getExcitement() {
    return this.excitement || 0;
  }

  setExcitement(excitement) {
    this.excitement = excitement;
  }

  toString() {
    return `${super.toString()}${'!'.repeat(this.excitement)}`;
  }
}

module.exports = ExcitementDecorator;

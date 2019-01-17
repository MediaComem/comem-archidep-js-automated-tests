const GreeterDecorator = require('./greeter-decorator');

class LoudDecorator extends GreeterDecorator {
  setLoud(loud = true) {
    this.loud = loud;
  }

  toString() {
    const original = super.toString();
    return this.loud ? original.toUpperCase() : original;
  }
}

module.exports = LoudDecorator;

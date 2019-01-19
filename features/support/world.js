const { setWorldConstructor } = require('cucumber')

const Greeter = require('../../lib/greeter');

class GreeterWorld {
  constructor() {
    this.greeter = new Greeter();
  }
}

setWorldConstructor(GreeterWorld);

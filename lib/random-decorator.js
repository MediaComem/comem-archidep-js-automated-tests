const r2 = require('r2');

const GreeterDecorator = require('./greeter-decorator');

class RandomDecorator extends GreeterDecorator {
  constructor(greeter, randomNameFunc = defaultRandomNameFunc) {
    super(greeter);
    this.randomNameFunc = randomNameFunc;
  }

  async fetchRandomName() {
    const name = await this.randomNameFunc();
    this.setName(name);
  }
}

async function defaultRandomNameFunc() {
  const json = await r2('https://randomuser.me/api').json;
  return json.results[0].name.first;
}

module.exports = RandomDecorator;

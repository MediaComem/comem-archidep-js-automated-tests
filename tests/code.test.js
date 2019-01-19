const { expect } = require('chai');
const { fake } = require('sinon');

const ExcitementDecorator = require('../lib/excitement-decorator');
const Greeter = require('../lib/greeter');
const LoudDecorator = require('../lib/loud-decorator');
const RandomDecorator = require('../lib/random-decorator');

describe('Greeter', function() {
  it('should produce a simple greeting', function() {

    const greeter = new Greeter();
    greeter.setName('Bob');
    greeter.setSalutation('Hi');

    expect(greeter.toString()).to.equal('Hi Bob');
  });

  it('should produce a greeting with a separator', function() {

    const greeter = new Greeter();
    greeter.setName('Bob');
    greeter.setSalutation('Hi');
    greeter.setSeparator(', ');

    expect(greeter.toString()).to.equal('Hi, Bob');
  });
});

describe('LoudDecorator', function() {
  it('should make a greeting louder', function() {

    const mockGreeter = {
      toString: fake.returns('Hello')
    };

    const decorator = new LoudDecorator(mockGreeter);
    decorator.setLoud();

    expect(decorator.toString()).to.equal('HELLO');
  });
});

describe('Integration', function() {
  describe('Greeter & LoudDecorator', function() {
    it('should make a greeting louder', function() {

      const greeter = new Greeter();
      greeter.setName('Bob');
      greeter.setSalutation('Hi');

      const decorator = new LoudDecorator(greeter);
      decorator.setLoud();

      expect(decorator.toString()).to.equal('HI BOB');
    });
  });
});

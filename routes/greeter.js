const debugFactory = require('debug');
const express = require('express');

const debug = debugFactory('greeter:api');

const ExcitementDecorator = require('../lib/excitement-decorator');
const Greeter = require('../lib/greeter');
const LoudDecorator = require('../lib/loud-decorator');
const RandomDecorator = require('../lib/random-decorator');

const router = express.Router();

router.get('/', function(req, res) {
  Promise.resolve(req).then(buildGreeting).then(greeting => res.send({ greeting })).catch(err => {
    debug(err.stack);
    res.sendStatus(500);
  });
});

module.exports = router;

async function buildGreeting(req) {

  let greeter = new Greeter();

  if (req.query.excitement) {
    greeter = new ExcitementDecorator(greeter);
    greeter.setExcitement(req.query.excitement);
  }

  if (req.query.loud) {
    greeter = new LoudDecorator(greeter);
    greeter.setLoud();
  }

  greeter.setName(req.query.name || 'World');
  greeter.setSalutation(req.query.salutation || 'Hello');

  if (req.query.random) {
    greeter = new RandomDecorator(greeter);
    await greeter.fetchRandomName();
  }

  return greeter.toString();
}

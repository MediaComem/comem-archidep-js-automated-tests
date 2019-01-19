const { expect } = require('chai')
const { Given, When, Then } = require('cucumber')

Given('I am named {string}', function(name) {
  this.greeter.setName(name);
});

Given('I want to be saluted with {string}', function(salutation) {
  this.greeter.setSalutation(salutation);
});

When('I am greeted', function() {
  this.greeting = this.greeter.toString();
});

Then('the greeting should be {string}', function(greeting) {
  expect(this.greeting).to.equal(greeting);
});

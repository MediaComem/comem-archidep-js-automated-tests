const { expect } = require('chai');
const supertest = require('supertest');

const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;

describe('Greeter API', function() {
  it('should produce a simple greeting', async function() {

    // Make a GET request to /greeter
    const response = await supertest(`${baseUrl}/greeter`).get('/');

    // Assert that the response status code is 200 OK
    expect(response.status).to.equal(200);

    // Assert that the response contains the greeting "Hello World"
    expect(response.body).to.deep.equal({
      greeting: 'Hello World'
    });
  });

  it('should produce a complex greeting', async function() {

    // Make a GET request to /greeter with parameters
    let url = `${baseUrl}/greeter?`;
    url += 'name=Bob&salutation=Hi';
    url += '&excitement=2';
    url += '&loud=true';

    const response = await supertest(url).get('/');

    // Assert that the response status code is 200 OK
    expect(response.status).to.equal(200);

    // Assert that the response contains the greeting "HI BOB!!"
    expect(response.body).to.deep.equal({
      greeting: 'HI BOB!!'
    });;
  });
});

const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;

describe('Greeter web page', function() {
  this.timeout(10000);

  let driver;

  beforeEach(async function() {
    driver = await new webdriver.Builder()
      .forBrowser('chrome') // Change to your browser if required
      .build();
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('should produce a complex greeting', async function() {
    await driver.get(baseUrl);

    // Click the random checkbox
    const randomInput = await driver.findElement(By.name('random'));
    await randomInput.click();

    // Fill the name field
    const nameInput = await driver.findElement(By.name('name'));
    await nameInput.clear();
    await nameInput.sendKeys('webdriver');

    // Fill the excitement field
    const excitementInput = await driver.findElement(By.name('excitement'));
    await excitementInput.clear();
    await excitementInput.sendKeys('2');

    // Click the loud checkbox
    const loudCheckbox = await driver.findElement(By.name('loud'));
    await loudCheckbox.click();

    // Wait until the correct greeting is displayed in the title
    await driver.wait(async function() {
      const title = await driver.findElement(By.css('h1.jumbotron-heading'));
      const text = await title.getText();
      return text === 'HELLO WEBDRIVER!!'; // Check its expected value
    });

    await new Promise(resolve => setTimeout(resolve, 500));
  });
});

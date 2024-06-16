import { Builder, By, Key, WebDriver } from 'selenium-webdriver';

describe('test1', () => {
  let driver: WebDriver;
  const timeout = 30000;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    driver.manage().setTimeouts({ implicit: timeout });
  }, timeout);

  afterAll(async () => {
    await driver.quit();
  }, timeout);

  it('test1', async () => {
    // Test name: test1
    // Step # | name | target | value
    // 1 | open | / |
    await driver.get("http://localhost:1234/");

    // 2 | setWindowSize | 1388x732 |
    await driver.manage().window().setRect({ width: 1388, height: 732 });

    // 3 | click | id=:r1: |
    await driver.findElement(By.id(":r1:")).click();

    // 4 | type | id=:r1: | what is me@eon
    await driver.findElement(By.id(":r1:")).sendKeys("what is me@eon");

    // 5 | type | id=:r1: | what is me@eon
    await driver.findElement(By.id(":r1:")).sendKeys("what is me@eon");

    // 6 | sendKeys | id=:r1: | ${KEY_ENTER}
    await driver.findElement(By.id(":r1:")).sendKeys(Key.ENTER);
  }, timeout);
});

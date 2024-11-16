describe('NinjaOne Login Page Accessibility Tests', function () {

  this.tags = ['a11y', 'login'];

  beforeEach(async function () {
    await browser.page.loginPage().navigate().assert.titleEquals('NinjaOne');
    await browser.axeInject();
  })

  after(browser => browser.end());


  it('NinjaOne login page has accessible headers', function () {
    browser.axeRun('body', {
      runOnly: ['empty-heading', 'page-has-heading-one', 'p-as-heading']
    }, (results) => {
      expect(results.violations.length).to.equal(0);
    });
  });

  it('NinjaOne login page has sufficient color contrast', function () {
    browser.axeRun('body', {
      runOnly: ['color-contrast']
    }, (results) => {
      expect(results.violations.length).to.equal(0);
    });
  });

  it('NinjaOne login page has appropriate ARIA roles', function () {
    browser.axeRun('body', {
      runOnly: ['aria-roles']
    }, (results) => {
      expect(results.violations.length).to.equal(0);
    });
  });

  it('NinjaOne login page has form elements with labels', function () {
    browser.axeRun('body', {
      runOnly: ['label']
    }, (results) => {
      expect(results.violations.length).to.equal(0);
    });
  });

  it('NinjaOne login page has images with alt attributes', function () {
    browser.axeRun('body', {
      runOnly: ['image-alt']
    }, (results) => {
      expect(results.violations.length).to.equal(0);
    });
  });


});
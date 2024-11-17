describe('NinjaOne Login Feature Tests', function () {

  this.tags = ['login'];

  beforeEach(function () {
    const login = browser.window.maximize().page.loginPage();
    login.navigate().assert.titleEquals('NinjaOne');

  })

  after(browser => browser.end());

  it('should display an alert message with invalid login', async function () {
    const loginPage = browser.page.loginPage();
    loginPage
      .login('test@gmail.com', 'pass123')
      .assert.textContains(
        '@alertMessage',
        'Human verification failed. Please try again or contact your system administrator for assistance.'
      );
  });

  it('should verify "Forgot your password?" link is working as expected', async function () {
    const loginPage = browser.page.loginPage();
    const resetPasswordPage = browser.page.resetPasswordPage();

    loginPage
      .assert.textContains('@forgotPasswordLink', 'Forgot your password?')
      .click('@forgotPasswordLink');

    resetPasswordPage
      .assert.urlEquals('https://app.ninjarmm.com/auth/#/resetPassword')
  });

  it('should verify "Email" is the default option in the Verify Identity By dropdown', async function () {
    const loginPage = browser.page.loginPage();
    const resetPasswordPage = browser.page.resetPasswordPage();

    loginPage
      .click('@forgotPasswordLink');

    resetPasswordPage
      .waitForElementVisible('@verifyIdentityByDropdown')
      .expect.element('@selectedOption').text.to.equal('Email');
  });

  it('should verify "Do not have an account?" link is working as expected', async function () {
    const loginPage = browser.page.loginPage();
    const registerPage = browser.page.registerPage();

    loginPage
      .assert.textContains('@doNotHaveAnAccountLink', 'Do not have an account?')
      .click('@doNotHaveAnAccountLink');

    registerPage
      .assert.urlMatches('/register')
      .waitForElementVisible('@pageHeader')
      .expect.element('@pageHeader').text.to.equal('Registration');
  });

});
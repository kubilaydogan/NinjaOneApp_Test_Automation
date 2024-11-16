module.exports = {
    url: function () {
        return `${this.api.launchUrl}/login`;
    },
    elements: {
        emailField: 'input[name="email"]',
        passwordField: 'input[name="password"]',
        submitButton: 'button[type="submit"]',
        alertMessage: '.alert',
        forgotPasswordLink: 'a[href="#/resetPassword"]',
        doNotHaveAnAccountLink: 'a[href="#/register"]'

    },
    commands: [{
        login(email, password) {
            return this
                .waitForElementVisible('@emailField')
                .setValue('@emailField', email) 
                .setValue('@passwordField', password)
                .click('@submitButton');
        }
    }]
};
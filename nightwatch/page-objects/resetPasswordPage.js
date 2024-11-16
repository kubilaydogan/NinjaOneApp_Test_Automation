module.exports = {
    url: function () {
        return `${this.api.launchUrl}/resetPassword`;
    },
    elements: {
        verifyIdentityByDropdown: '.control-label + div',
        selectedOption: 'div[class$="singleValue"]',
        emailField: 'input[name="email"]',
        sendButton: 'button[type="submit"]',
    }
};


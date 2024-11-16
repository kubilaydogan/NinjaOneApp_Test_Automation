module.exports = {
    url: function () {
        return `${this.api.launchUrl}/register`;
    },
    elements: {
        pageHeader: 'a + h2',
    }
};
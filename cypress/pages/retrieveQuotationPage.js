class retrieveQuotataionPage {

    locators = {
        retrieveQuotataionTab: () => cy.get('#retrieve'),
        idNuberField: () => cy.get('input[name="id"]'),
        retrieveQuotataionButton: () => cy.get('#getquote')
    }

    clickRetrieveQuotataionTab() {
        this.locators.retrieveQuotataionTab().click()
    }

    enterIdNumber() {
        this.locators.idNuberField().type('123456789') //extend to enter dynamic value
    }

    clickRetrieveQuotataionButton() {
        this.locators.retrieveQuotataionButton().click()
    }
}

module.exports = new retrieveQuotataionPage();
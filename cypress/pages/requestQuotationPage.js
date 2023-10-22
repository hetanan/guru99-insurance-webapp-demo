class requestQuotationPage {
    locators =  {
        reqQuotationTab: () => cy.get('#newquote'),
        breakdownCover: () => cy.get('#quotation_breakdowncover'),
        estimatedValue: () => cy.get('#quotation_vehicle_attributes_value'),
        calculatePremium: () => cy.get('input[class="btn btn-default"]'),
        resetDetails: () => cy.get('#resetquote')
    }

    clickReqQuotationTab() {
        this.locators.reqQuotationTab().click()
    }

    selectBreakdownCover() {
        this.locators.breakdownCover().select('At home').should('have.value', '3')
    }

    enterEstimatedval() {
        this.locators.estimatedValue().type('100000')
    }

    clickCalculatePremium() {
        this.locators.calculatePremium().click()
    }

    clickResetButton() {
        this.locators.resetDetails().click()
    }
}

module.exports = new requestQuotationPage();
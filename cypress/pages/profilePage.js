class profilePage {

    locators = {
        profiletab: () => cy.get('#profile'),
        userTitel: () => cy.get('#showtitle')
    }

    clickProfileTab() {
        this.locators.profiletab().click()
    }

    verifyUserTitle() {
        this.locators.userTitel().should('have.text', 'Doctor')
    }
}

module.exports = new profilePage();
class profilePage {

    locators = {
        profileTab: () => cy.get('#profile'),
        userTitle: () => cy.get('#showtitle'),
        editProfiletab: () => cy.get('#editprofile'),
        updateProfileButton: () => cy.get('input[name="commit"]')
    }

    clickProfileTab() {
        this.locators.profileTab().click()
    }

    verifyUserTitle() {
        this.locators.userTitle().should('have.text', 'Doctor')
    }

    clickEditProfileTab() {
        this.locators.editProfiletab().click()
    }

    clickUpdateProfileButton() {
        this.locators.updateProfileButton().click()
    }
}

module.exports = new profilePage();
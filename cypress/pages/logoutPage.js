class logoutPage {

    locators = {
        logoutButton: ()=> cy.get('input[class="btn btn-danger"]')
    }

    clickLogoutButton(){
        this.locators.logoutButton().click()
    }
}

module.exports = new logoutPage()
// move credentials to env file

class loginPage {

    locators = {
        emailBox: ()=> cy.get('#email'),
        passwordBox: ()=> cy.get('#password'),
        loginButton: ()=> cy.get('input[name="submit"]'),
        postLoginText: ()=> cy.get('h2')
    }

    enterEmail(){
        this.locators.emailBox().type('testemail@test.com')
    }

    enterPassword(){
        this.locators.passwordBox().type('nrugttWvg76-.ny!')
    }

    clickSubmitButton(){
        this.locators.loginButton().click()
    }

}

module.exports = new loginPage()
class registerPage {
    
    constructor() {
        this.firstName = 'John',
        this.lastName = 'Doe',
        this.password = '7hjhbkjy%78ybotyyiyg^GGy'
    }
      
    locators = {
        registerButton: () => cy.get('a.btn'),
        titleSelection: () => cy.get('#user_title'), //using id attribute
        firstName: () => cy.get('#user_firstname'),
        lastName: () => cy.get('#user_surname'),
        emailBox: () => cy.get('#user_user_detail_attributes_email'),
        passwordBox: () => cy.get('#user_user_detail_attributes_password'),
        passwordConfirmBox: () => cy.get('#user_user_detail_attributes_password_confirmation'),
        createUser: () => cy.get('input[name="submit"]'), //using name attribute
        resetButton: () => cy.get('#resetform') //using id attribute
    }

    clickRegisterButton() {
        this.locators.registerButton().click()
    }

    selectTitle() {
        this.locators.titleSelection().select('Doctor').should('have.value', 'Doctor')
    }

    enterFirstName() {
        this.locators.firstName().type(this.firstName) //add custom command to generate random name
    }

    enterLastName() {
        this.locators.lastName().type(this.lastName) //add custom command to generate random name
    }

    enterEmail() {
        this.locators.emailBox().type(this.firstName + '.' + this.lastName + '@test.com') 
    }

    enterPassword() {
        this.locators.passwordBox().type(this.password) //add custom command to generate random name
    }

    reEnterPassword() {
        this.locators.passwordConfirmBox().type(this.password) //add custom command to generate random name
    }

    createUser() {
        this.locators.createUser().click()
    }

    resetData() {
        this.locators.resetButton().click()
    }
}

module.exports = new registerPage();
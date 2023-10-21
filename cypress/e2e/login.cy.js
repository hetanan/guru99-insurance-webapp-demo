import loginPage from '../pages/loginPage'
import logoutPage from '../pages/logoutPage'

//to improve add more assertions to confirm login is successful or unsuccessful

describe('Login to webapplication - Guru99 Insurance', () => {

    beforeEach(() => {
        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    }) //executes before each test

    it('Login using valid credentials', () => {
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickSubmitButton()
        logoutPage.locators.logoutButton().should('be.visible') //assertion to confirm login is successful
        cy.url().should('include', '/insurance/v1/header.php') //assertion to confirm login is successful
    })

    it('Unsuccessful login using invalid credentials', () => {
        loginPage.enterEmail()
        loginPage.clickSubmitButton()
        loginPage.locators.loginButton().should('be.visible') //assertion to confirm login is unsuccessful
    })

    it('Logout from webapplication', () => {
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickSubmitButton()
        logoutPage.clickLogoutButton()
        loginPage.locators.loginButton().should('be.visible') //assertion to confirm logout is successful
    })
})

import profilePage from '../pages/profilePage'
import loginPage from '../pages/loginPage'

describe('Load user profile', () => {
    
        beforeEach(() => {
            cy.visit('https://demo.guru99.com/insurance/v1/index.php')
            loginPage.enterEmail()
            loginPage.enterPassword()
            loginPage.clickSubmitButton()
        })
    
        it('Load user profile', () => {
            profilePage.clickProfileTab()
            cy.url().should('include', '/insurance/v1/header.php')
            profilePage.verifyUserTitle()
        })
})
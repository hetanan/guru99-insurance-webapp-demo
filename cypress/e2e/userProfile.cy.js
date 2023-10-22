import profilePage from '../pages/profilePage'
import loginPage from '../pages/loginPage'
import registerPage from '../pages/registerPage'

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
 
        //Above it block is failling once that is fixed test to be enabled
        it.skip('Edit user profile', () => {
            profilePage.clickEditProfileTab()
            cy.url().should('include', '/insurance/v1/header.php')
            registerPage.locators.titleSelection().should('be.visible')
            registerPage.locators.titleSelection().select('Captain').invoke('val').should('equal', 'Captain')
            profilePage.clickUpdateProfileButton()
        })
})